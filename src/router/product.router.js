import { Router } from 'express'
import {
  getAllProducts,
  getProductById,
  postProduct,
  putProduct,
  deleteProduct
} from '../controller/product.controller.js'
import { verifyTotken } from '../middleware/verifyTotken.js'

const router = Router()

router.get('/', verifyTotken, getAllProducts)
router.get('/:id', verifyTotken, getProductById)
router.post('/', verifyTotken, postProduct)
router.put('/:id', verifyTotken, putProduct)
router.delete('/:id', verifyTotken, deleteProduct)

export default router
