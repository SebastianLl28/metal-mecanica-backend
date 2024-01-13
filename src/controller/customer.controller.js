import { Op } from 'sequelize'
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
    const obj = {
      limit: 10
    }

    const { name, customerType, pagination } = req.query
    if (name) obj.where = { name: { [Op.like]: `%${name}%` } }
    // Las personas que no tienen apellidos son company y las personas que si tienen son person
    if (customerType === 'company') obj.where = { ...obj.where, lastName: null }
    if (customerType === 'person') {
      obj.where = { ...obj.where, lastName: { [Op.ne]: null } }
    }

    if (pagination) {
      obj.offset = (pagination - 1) * obj.limit
    }
    // order by createAt
    obj.order = [['createdAt', 'ASC']]
    const { rows, count } = await findAllCustomer(obj)
    const response = {
      info: {
        count,
        pages: Math.ceil(count / obj.limit)
      },
      results: rows
    }
    res.status(200).json(response)
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
