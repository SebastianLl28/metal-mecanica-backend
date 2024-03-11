import { Op } from 'sequelize'
import {
  findAllProduct,
  findProductById,
  createProduct,
  updateProduct
} from '../service/product.service.js'

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getAllProducts = async (req, res) => {
  try {
    const obj = {
      limit: 10,
      where: { status: true }
    }

    const { name, pagination } = req.query

    if (name) obj.where = { name: { [Op.like]: `%${name}%` } }

    if (pagination) {
      obj.offset = (pagination - 1) * obj.limit
    }

    obj.order = [['createdAt', 'ASC']]

    const { rows, count } = await findAllProduct(obj)

    const response = {
      info: {
        count,
        pages: Math.ceil(count / obj.limit)
      },
      results: rows
    }

    res.status(200).json(response)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params
    const product = await findProductById(id)
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrada' })
    }
    res.status(200).json(product)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}

export const postProduct = async (req, res) => {
  try {
    const { description, price, stock, categoryId } = req.body
    await createProduct({
      description,
      price,
      stock,
      categoryId
    })
    res.status(201).json({ message: 'Producto creado correctamente' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error al crear el producto' })
  }
}

export const putProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await findProductById(id)
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrada' })
    }
    console.log(product.description)
    const { description, price, stock, productId } = req.body
    await updateProduct(id, { description, price, stock, productId })
    console.log(description)
    res.status(200).json({ message: 'Producto actualizada correctamente' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await findProductById(id)
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrada' })
    }
    product.status = false
    await product.save()
    res.status(200).json({ message: 'Producto eliminada correctamente' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}
