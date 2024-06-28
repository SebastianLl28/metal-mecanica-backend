import { verifyTokenSecretKey } from '../helpers/jsonwebtoken.js'
import { findUserById } from '../service/user.service.js'

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader) return res.status(401).json({ message: 'Unauthorized' })
    const token = authHeader.split(' ')[1]
    const payload = verifyTokenSecretKey(token)
    if (!payload) return res.status(401).json({ message: 'Unauthorized' })
    const findUser = await findUserById(payload.id)
    if (!findUser) return res.status(401).json({ message: 'Unauthorized' })
    req.user = findUser
    next()
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Unauthorized' })
  }
}
