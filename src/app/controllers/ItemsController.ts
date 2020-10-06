import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Items from '../models/Items'

class  ItemsController {
  async store(request: Request, response: Response) {
    try {
      const { title, image } = request.body

      const itemsRepository = getRepository(Items)

      const item = itemsRepository.create({
        image,
        title,
      })

      await itemsRepository.save(item)
    
      return response.json(item)
      } catch (error) {
        return response.status(401).json({ error: error.message });
      }
  }

  async index(request: Request, response: Response) {
    try {
      const itemsRepository = getRepository(Items)

      const items = await itemsRepository.find()

      const serializedItems = items.map(item => {
        return {
          id: item.id,
          title: item.title,
          image_url: `http://localhost:3333/uploads/${item.image}`
        }
      })

      return response.json(serializedItems)
      
    } catch (error) {
      return response.status(401).json({ error: error.message })
    }
  }
}

export default ItemsController