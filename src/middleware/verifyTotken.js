import { verifyTokenSecretKey } from '../helpers/jsonwebtoken.js'
import { findUserById } from '../service/user.service.js'

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const verifyTotken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader) return res.status(401).json({ message: 'Unauthorized' })
    const token = authHeader.split(' ')[1]
    console.log(token)
    const payload = verifyTokenSecretKey(token)
    if (!payload) return res.status(401).json({ message: 'Unauthorized' })
    const findUser = await findUserById(payload.id)
    console.log('llego 2')
    if (!findUser) return res.status(401).json({ message: 'Unauthorized' })
    console.log('llego 1')
    req.user = findUser
    next()
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Unauthorized' })
  }
}
