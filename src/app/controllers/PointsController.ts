import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Points from '../models/Points'
import Items from '../models/Items'

class  PointsController {
  async index(request: Request, response: Response) {
    try {
      const { city, uf } = request.query

      const pointsRepository = getRepository(Points)

      const points = await pointsRepository.find({
        where: { city, uf }
      })

      const serializedPoints = points.map(point => {
        return {
          ...point,
          image_url: `http://192.168.0.103:3333/uploads/${point.image}`
        }
      })

      return response.json(serializedPoints)
    } catch (error) {
      return response.status(401).json({ error: error.message });
    }
  }

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

      const itemsConvert = items.split(', ')

      const existItems = await itemsRepository.findByIds(itemsConvert)

      if (!existItems || existItems.length < 1) return response.status(401).json({ error: 'Items not exist' })

      const point = pointsRepository.create({
        image: request.file.filename,
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

    const serializedPoint = {
      ...point,
      image_url: `http://192.168.0.103:3333/uploads/${point.image}`
    }

    return response.json({point: serializedPoint})
  }
}

export default PointsController