import { Router } from 'express'
import {
  getVerifyToken,
  postLoginUser,
  postRegisterUser
} from '../controller/auth.controller.js'
import { schemeValidation } from '../middleware/schemeValidator.js'
import { loginUserSchema, registerUserSchema } from '../schema/user.schema.js'
import { verifyTotken } from '../middleware/verifyTotken.js'

const router = Router()

router.post('/register', schemeValidation(registerUserSchema), postRegisterUser)
router.post('/login', schemeValidation(loginUserSchema), postLoginUser)

router.get('/verifyToken', verifyTotken, getVerifyToken)

export default router
