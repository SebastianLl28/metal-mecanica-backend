import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const generateToken = payload =>
  jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: '8h'
  })

export const verifyTokenSecretKey = token =>
  jwt.verify(token, process.env.SECRET_KEY)
