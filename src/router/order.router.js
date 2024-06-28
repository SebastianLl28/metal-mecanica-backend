import { Router } from 'express'
import {
  getOrders,
  getOrder,
  postOrder,
  putOrder
} from '../controller/order.controller.js'
import { verifyToken } from '../middleware/verifyToken.js'

const router = Router()

router.get('/', verifyToken, getOrders)
router.get('/:id', verifyToken, getOrder)
router.post('/', verifyToken, postOrder)
router.put('/:id', verifyToken, putOrder)

export default router
