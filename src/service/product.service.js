import { Product } from '../model/index.js'

export const findAllProduct = async (query = {}) =>
  await Product.findAndCountAll(query)

export const findProductById = async id => await Product.findByPk(id)

export const createProduct = async product => await Product.create(product)

export const updateProduct = async (id, product) =>
  await Product.update(product, { where: { id } })
