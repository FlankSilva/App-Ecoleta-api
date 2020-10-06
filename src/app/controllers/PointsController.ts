import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Points from '../models/Points'
import Items from '../models/Items'

class  PointsController {
  async store(request: Request, response: Response) {
    try {
      const { 
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items 
      } = request.body

      const pointsRepository = getRepository(Points)
      const itemsRepository = getRepository(Items)

      const existItems = await itemsRepository.findByIds(items)

      if (!existItems) return response.status(401).json({ error: 'Items not exist' })

      const point = pointsRepository.create({
        image: 'image-fake.svg',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items: existItems
      })

      await pointsRepository.save(point)
    
      return response.json(point)
      } catch (error) {
        return response.status(401).json({ error: error.message });
      }
  }

//   async index(request: Request, response: Response) {
//     try {
//       const itemsRepository = getRepository(Items)

//       const items = await itemsRepository.find()

//       const serializedItems = items.map(item => {
//         return {
//           id: item.id,
//           title: item.title,
//           image_url: `http://localhost:3333/uploads/${item.image}`
//         }
//       })

//       return response.json(serializedItems)
      
//     } catch (error) {
//       return response.status(401).json({ error: error.message })
//     }
//   }
}

export default PointsController