import { Router } from 'express'
import {
  getOrderDetails,
  getOrderDetail,
  createOrderDetailController,
  deleteOrderDetail
} from '../controller/orderDetail.controller.js'

const router = Router()

router.get('/', getOrderDetails)
router.get('/:id', getOrderDetail)
router.post('/', createOrderDetailController)
router.delete('/:id', deleteOrderDetail)

export default router
