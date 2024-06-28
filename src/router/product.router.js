import { Router } from 'express'
import {
  getAllProducts,
  getProductById,
  postProduct,
  putProduct,
  deleteProduct
} from '../controller/product.controller.js'
import { verifyToken } from '../middleware/verifyToken.js'

const router = Router()

router.get('/', verifyToken, getAllProducts)
router.get('/:id', verifyToken, getProductById)
router.post('/', verifyToken, postProduct)
router.put('/:id', verifyToken, putProduct)
router.delete('/:id', verifyToken, deleteProduct)

export default router
