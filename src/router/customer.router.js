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
import { verifyTotken } from '../middleware/verifyTotken.js'

const router = Router()

router.get('/', verifyTotken, getfindAll)
router.get('/:id', verifyTotken, getfindById)
router.post(
  '/',
  verifyTotken,
  schemeValidation(registerCustomerSchema),
  postCreate
)
router.put('/:id', verifyTotken, putUpdate)
router.delete('/:id', verifyTotken, deleteDeleteById)

export default router
