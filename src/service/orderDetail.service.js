import { OrderDetail } from '../model/index.js'

export const createOrderDetail = async orderDetail =>
  await OrderDetail.create(orderDetail)

export const findAllOrderDetails = async query =>
  await OrderDetail.findAndCountAll(query)

export const findOrderDetailById = async id => await OrderDetail.findByPk(id)

export const deleteOrderDetailById = async id =>
  await OrderDetail.destroy({ where: { id } })
