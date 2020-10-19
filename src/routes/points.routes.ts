import { Router } from 'express'
import multer from 'multer'
import multerConfig from '../config/multer'

import PointsController from '../app/controllers/PointsController'

const pointsController = new PointsController()

const pointRoutes = Router()
const uploads = multer(multerConfig)

pointRoutes.post('/', uploads.single('image') ,pointsController.store)
pointRoutes.get('/', pointsController.index)
pointRoutes.get('/:id', pointsController.show)

export default pointRoutes