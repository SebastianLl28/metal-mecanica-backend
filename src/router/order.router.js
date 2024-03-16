import { Router } from 'express'
import {
  getOrders,
  getOrder,
  postOrder,
  putOrder
} from '../controller/order.controller.js'
import { verifyTotken } from '../middleware/verifyTotken.js'

const router = Router()

router.get('/', verifyTotken, getOrders)
router.get('/:id', verifyTotken, getOrder)
router.post('/', verifyTotken, postOrder)
router.put('/:id', verifyTotken, putOrder)

export default router
