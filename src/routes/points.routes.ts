import { Router } from 'express'

import PointsController from '../app/controllers/PointsController'

const pointsController = new PointsController()

const pointRoutes = Router()

pointRoutes.post('/', pointsController.store)
pointRoutes.get('/', pointsController.index)
pointRoutes.get('/:id', pointsController.show)



export default pointRoutes