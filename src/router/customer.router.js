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

const router = Router()

router.get('/', getfindAll)
router.get('/:id', getfindById)
router.post('/', schemeValidation(registerCustomerSchema), postCreate)
router.put('/:id', putUpdate)
router.delete('/:id', deleteDeleteById)

export default router
