import { Order } from '../model/index.js'

export const createOrder = async order => await Order.create(order)

export const findAllOrders = async query => await Order.findAndCountAll(query)

export const findOrderById = async id => await Order.findByPk(id)

export const updateOrder = async (id, order) =>
  await Order.update(order, { where: { id } })
