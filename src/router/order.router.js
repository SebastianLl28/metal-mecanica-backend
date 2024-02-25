import { Router } from 'express'
import {
  getOrders,
  getOrder,
  postOrder,
  putOrder
} from '../controller/order.controller.js'

const router = Router()

router.get('/', getOrders)
router.get('/:id', getOrder)
router.post('/', postOrder)
router.put('/:id', putOrder)

export default router
