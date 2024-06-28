import { Router } from 'express'
import {
  getfindAll,
  getfindById,
  postCreate,
  putUpdate,
  deleteDeleteById
} from '../controller/customer.controller.js'
import { schemeValidation } from '../middleware/schemeValidator.js'
import { registerCustomerSchema } from '../schema/customer.schema.js'
import { verifyToken } from '../middleware/verifyToken.js'

const router = Router()

router.get('/', verifyToken, getfindAll)
router.get('/:id', verifyToken, getfindById)
router.post(
  '/',
  verifyToken,
  schemeValidation(registerCustomerSchema),
  postCreate
)
router.put('/:id', verifyToken, putUpdate)
router.delete('/:id', verifyToken, deleteDeleteById)

export default router
