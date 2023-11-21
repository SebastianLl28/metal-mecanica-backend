import {
  findAllCustomer,
  findCustomerById,
  createCustomer,
  deleteCustomer,
  updateCustomer
} from '../service/customer.service.js'

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getfindAll = async (req, res) => {
  try {
    const customers = await findAllCustomer()
    res.status(200).json(customers)
  } catch (error) {
    res.status(500).json({ message: error.message })
    console.log(error)
  }
}

export const getfindById = async (req, res) => {
  try {
    const customer = await findCustomerById(req.params.id)
    res.status(200).json(customer)
  } catch (error) {
    res.status(500).json({ message: error.message })
    console.log(error)
  }
}
export const postCreate = async (req, res) => {
  try {
    await createCustomer(req.body)
    res.status(200).json({ message: 'Se agrego al cliente' })
  } catch (error) {
    res.status(500).json({ message: error.message })
    console.log(error)
  }
}
export const deleteDeleteById = async (req, res) => {
  try {
    await deleteCustomer(req.params.id)
    res.status(200).json({ message: 'Se elimino al cliente' })
  } catch (error) {
    res.status(500).json({ message: error.message })
    console.log(error)
  }
}

export const putUpdate = async (req, res) => {
  try {
    const findCustomer = await findCustomerById(req.params.id)
    if (!findCustomer) {
      return res.status(404).json({ message: 'Customer not found' })
    }
    await updateCustomer(req.params.id, req.body)
    res.status(200).json({ message: 'Se edito al cliente' })
  } catch (error) {
    res.status(500).json({ message: error.message })
    console.log(error)
  }
}
