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
      

      if (!existItems || existItems.length < 1) return response.status(401).json({ error: 'Items not exist' })

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

  async show(request: Request, response: Response) {
    const { id } = request.params

    const pointsRepository = getRepository(Points)
    const itemsRepository = getRepository(Items)

    const point = await pointsRepository
    .findOne({
      where: { id },
    })
    

    if (!point) return response.status(401).json({ message: 'Point not found' })


    return response.json(point)
  }
}

export default PointsController