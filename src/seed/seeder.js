import { exit } from 'node:process'
import db from '../config/db.js'
import User from '../model/User.js'
import listUser from './user.seeder.js'
import Customer from '../model/Customer.js'
import listCustomer from './customer.seeder.js'

const importarDatos = async () => {
  try {
    await db.authenticate()
    await db.sync()
    await Promise.all([
      Customer.destroy({ where: {} }),
      User.destroy({ where: {} })
    ])
    console.log('Datos limpios')
    await Promise.all([
      User.bulkCreate(listUser),
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
