import { exit } from 'node:process'
import db from '../config/db.js'
import {
  listCustomer,
  listRole,
  listUser,
  listCategory,
  listProduct
} from './index.js'
import Customer from '../model/Customer.js'
import { User, Role, Category, Product } from '../model/index.js'

const importarDatos = async () => {
  try {
    await db.sync({ force: true })
    await db.authenticate()
    await Promise.all([
      Role.destroy({ where: {} }),
      Customer.destroy({ where: {} }),
      User.destroy({ where: {} }),
      Product.destroy({ where: {} }),
      Category.destroy({ where: {} })
    ])
    await Role.bulkCreate(listRole)
    await Category.bulkCreate(listCategory)
    const listUserLast = await listUser()
    const listProductLast = await listProduct()
    await Promise.all([
      User.bulkCreate(listUserLast),
      Customer.bulkCreate(listCustomer),
      Product.bulkCreate(listProductLast)
    ])
    console.log('Datos Importados correctamente')
    exit()
  } catch (error) {
    console.log(error)
    exit(1)
  }
}

importarDatos()
