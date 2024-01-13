import { Role } from '../model/index.js'

export const findRoleByName = async (name) => await Role.findOne({ where: { name } })
