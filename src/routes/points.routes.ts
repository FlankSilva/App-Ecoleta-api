import { Router } from 'express'
import multer from 'multer'
import multerConfig from '../config/multer'
import { celebrate, Joi } from 'celebrate'

import PointsController from '../app/controllers/PointsController'

const pointsController = new PointsController()

const pointRoutes = Router()
const uploads = multer(multerConfig)

pointRoutes.post(
  '/', 
  uploads.single('image') ,
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      items: Joi.string().required(),
    })
  }, {
    abortEarly: false
  }),
  pointsController.store
)
pointRoutes.get('/', pointsController.index)
pointRoutes.get('/:id', pointsController.show)

export default pointRoutes