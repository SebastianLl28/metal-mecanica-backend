import { exit } from 'node:process'
import db from '../config/db.js'
import { listCustomer, listRole, listUser } from './index.js'
import Customer from '../model/Customer.js'
import { User, Role } from '../model/index.js'

const importarDatos = async () => {
  try {
    await db.authenticate()
    await db.sync()
    await Promise.all([
      Role.destroy({ where: {} }),
      Customer.destroy({ where: {} }),
      User.destroy({ where: {} })
    ])
    await Role.bulkCreate(listRole)
    const listUserLast = await listUser()
    await Promise.all([
      User.bulkCreate(listUserLast),
      Customer.bulkCreate(listCustomer)
    ])
    console.log('Datos Importados correctamente')
    exit()
  } catch (error) {
    console.log(error)
    exit(1)
  }
}

importarDatos()
