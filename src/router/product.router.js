import { Router } from 'express'
import {
  getAllProducts,
  getProductById,
  postProduct,
  putProduct,
  deleteProduct
} from '../controller/product.controller.js'

const router = Router()

router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.post('/', postProduct)
router.put('/:id', putProduct)
router.delete('/:id', deleteProduct)

export default router
