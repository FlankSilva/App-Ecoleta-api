import { Router } from 'express'

import ItemsController from '../app/controllers/ItemsController'

const itemsController = new ItemsController()

const itemsRoutes = Router()

itemsRoutes.post('/', itemsController.store)
itemsRoutes.get('/', itemsController.index)


export default itemsRoutes