import { exit } from 'node:process'
import db from '../config/db.js'
import Customer from '../model/Customer.js'
import listCustomer from './customer.seeder.js'

const importarDatos = async () => {
  try {
    await db.authenticate()
    await db.sync()
    await Customer.destroy({ where: {} })
    await Customer.bulkCreate(listCustomer)
    console.log('Datos Importados correctamente')
    exit()
  } catch (error) {
    console.log(error)
    exit(1)
  }
}

importarDatos()
