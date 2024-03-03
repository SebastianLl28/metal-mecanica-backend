import { User } from '../model/index.js'

export const createUser = async newUser => {
  const user = User.create(newUser)
  return user
}

export const findUserByEmail = async email => User.findOne({ where: { email } })

export const findUserById = async id => User.findByPk(id)

export const findUserByDocument = async document =>
  User.findOne({ where: { document } })
