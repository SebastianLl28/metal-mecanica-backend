import {
  findAllOrderDetails,
  findOrderDetailById,
  createOrderDetail,
  deleteOrderDetailById
} from '../service/orderDetail.service.js'
import { findProductById } from '../service/product.service.js'
import { findOrderById } from '../service/order.service.js'

export const getOrderDetails = async (req, res) => {
  try {
    const orderDetails = await findAllOrderDetails()
    res.status(200).json(orderDetails)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error al traer todas las ordenes' })
  }
}

export const getOrderDetail = async (req, res) => {
  try {
    const { id } = req.params
    const orderDetail = await findOrderDetailById(id)
    res.status(200).json(orderDetail)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error al traer la orden' })
  }
}

export const createOrderDetailController = async (req, res) => {
  try {
    const { body } = req
    const order = await findOrderById(body.orderId)
    if (!order) {
      return res.status(404).json({ message: 'Orden no encontrada' })
    }
    const product = await findProductById(body.productId)
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' })
    }
    if (product.stock < body.quantity) {
      return res.status(400).json({ message: 'No hay stock suficiente' })
    }
    product.stock -= body.quantity
    await product.save()
    const orderDetail = await createOrderDetail(body)
    res.status(201).json(orderDetail)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error al crear la orden' })
  }
}

export const deleteOrderDetail = async (req, res) => {
  try {
    const { id } = req.params
    const orderDetail = await deleteOrderDetailById(id)
    if (!orderDetail) {
      return res.status(404).json({ message: 'Orden no encontrada' })
    }
    res.status(200).json({ message: 'Orden eliminada correctamente' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error al eliminar la orden' })
  }
}
