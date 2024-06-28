import { Router } from 'express'
import {
  getVerifyToken,
  postLoginUser,
  postRegisterUser
} from '../controller/auth.controller.js'
import { schemeValidation } from '../middleware/schemeValidator.js'
import { loginUserSchema, registerUserSchema } from '../schema/user.schema.js'
import { verifyToken } from '../middleware/verifyToken.js'

const router = Router()

router.post('/register', schemeValidation(registerUserSchema), postRegisterUser)

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags:
 *       - auth
 *     summary: Login user
 *     description: Use to login user with email and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: email
 *                 description: The user's email.
 *                 example: example@gmail.com
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: 123456789
 *     responses:
 *       200:
 *         description: login successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: token
 *                   example: eyJhbciOiIUz....
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   path:
 *                     type: string
 *                     description: missing property
 *                     example: email
 *                   message:
 *                     type: string
 *                     description: type of error
 *                     example: Required
 *       401:
 *         description: Incorrect email or password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: token
 *                   example: Incorrect email or password
 */
router.post('/login', schemeValidation(loginUserSchema), postLoginUser)

/**
 * @swagger
 * /api/auth/verifyToken:
 *   get:
 *     tags:
 *       - auth
 *     summary: Verify token
 *     description: Use to verify token
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Verify token successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: message
 *                   example: Token is valid
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: message
 *                   example: Unauthorized
 */
router.get('/verifyToken', verifyToken, getVerifyToken)

export default router
