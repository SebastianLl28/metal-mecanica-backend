import {
  findAllOrders,
  findOrderById,
  createOrder,
  updateOrder
} from '../service/order.service.js'

export const getOrders = async (req, res) => {
  try {
    const orders = await findAllOrders()
    res.json(orders)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error al obtener los pedidos' })
  }
}

export const getOrder = async (req, res) => {
  try {
    const { id } = req.params
    const order = await findOrderById(id)
    if (!order) {
      return res.status(404).json({ message: 'Pedido no encontrado' })
    }
    res.json(order)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error al obtener el pedido' })
  }
}

export const postOrder = async (req, res) => {
  try {
    const order = await createOrder(req.body)
    res.status(201).json(order)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error al crear el pedido' })
  }
}

export const putOrder = async (req, res) => {
  try {
    const { id } = req.params
    const order = await updateOrder(id, req.body)
    if (!order) {
      return res.status(404).json({ message: 'Pedido no encontrado' })
    }
    res.json(order)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error al actualizar el pedido' })
  }
}
