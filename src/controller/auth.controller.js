import { compareText, hashText } from '../helpers/bcrypt.js'
import { generateToken } from '../helpers/jsonwebtoken.js'
import {
  createUser,
  findUserByDocument,
  findUserByEmail
} from '../service/user.service.js'

/**
 * Register User
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const postRegisterUser = async (req, res) => {
  try {
    const { name, email, password, lastName, document } = req.body
    if (!name || !email || !password) {
      return res.status(400).send({ message: 'Faltan datos' })
    }

    const [findUserEmail, findUserDocument] = await Promise.all([
      findUserByEmail(email),
      findUserByDocument(document)
    ])

    if (findUserEmail) {
      return res
        .status(400)
        .json({ message: 'Ya existe un usuario con ese correo' })
    }

    if (findUserDocument) {
      return res
        .status(400)
        .json({ message: 'Ya existe un usuario con ese documento' })
    }

    const passwordHash = await hashText(password)

    await createUser({
      name,
      email,
      password: passwordHash,
      lastName,
      document
    })

    res.status(201).json({ message: 'Se registro correctamente' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error del servidor' })
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
      return res.status(400).json({ message: 'Faltan datos' })
    }
    const user = await findUserByEmail(email)
    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado' })
    }

    const result = await compareText(password, user.password)

    if (!result) {
      return res.status(400).json({ message: 'Usuario no encontrado' })
    }

    const viewUser = {
      id: user.id,
      name: user.name,
      email: user.email
    }

    const token = generateToken(viewUser)

    res.status(200).json({ token })
  } catch (error) {
    res.status(500).json({ message: 'Error del servidor' })
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getVerifyToken = (req, res) => {
  try {
    res.status(200).json({ message: 'Token valido' })
  } catch (error) {
    res.status(500).send(error)
  }
}
