import { compareText, hashText } from '../helpers/bcrypt.js'
import { generateToken } from '../helpers/jsonwebtoken.js'
import { createUser, findUserByEmail } from '../service/user.service.js'

/**
 * Register User
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const postRegisterUser = async (req, res) => {
  try {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
      return res.status(400).send({ message: 'Faltan datos' })
    }

    const findUser = await findUserByEmail(email)

    if (findUser) {
      console.log(findUser)
      return res.status(400).send({ message: 'El usuario ya existe' })
    }

    const passwordHash = await hashText(password)

    const user = await createUser({ name, email, password: passwordHash })

    const viewUser = {
      id: user.id,
      name: user.name,
      email: user.email
    }
    res.status(201).json(viewUser)
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const postLoginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).send({ message: 'Faltan datos' })
    }
    const user = await findUserByEmail(email)
    if (!user) {
      return res.status(400).send({ message: 'Usuario no encontrado' })
    }

    const result = await compareText(password, user.password)

    if (!result) {
      return res.status(400).send({ message: 'Usuario no encontrado' })
    }

    const viewUser = {
      id: user.id,
      name: user.name,
      email: user.email
    }

    const token = generateToken(viewUser)

    res.status(200).json({ token })
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getVerifyToken = (req, res) => {
  try {
    res.status(200).json({ message: 'llego al final' })
  } catch (error) {
    res.status(500).send(error)
  }
}
