import {
  findAllCategory,
  findCategoryById,
  createCategory,
  updateCategory
} from '../service/category.service.js'

// TODO: Add pagination, page, etc
export const getCategories = async (req, res) => {
  try {
    const categories = await findAllCategory({ where: { state: true } })
    res.status(200).json(categories)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: 'Error en el servidor al buscar todas las categorías' })
  }
}

export const getAllCategories = async (req, res) => {
  try {
    const { rows } = await findAllCategory({ where: { state: true } })
    res.status(200).json({ categories: rows })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error al buscar todas las categorías' })
  }
}

export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params
    const category = await findCategoryById(id)
    res.status(200).json(category)
  } catch (error) {
    console.log(error.message)
    res
      .status(500)
      .json({ message: 'Error en el servidor al buscar la categoría' })
  }
}

export const postCategory = async (req, res) => {
  try {
    const { name, description } = req.body
    const query = {
      name,
      description,
      state: true
    }
    await createCategory(query)
    res.status(201).json({ message: 'Categoría creada correctamente' })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: 'Error en el servidor al crear la categoría' })
  }
}

export const putCategory = async (req, res) => {
  try {
    const { id } = req.params
    const category = await findCategoryById(id)
    if (!category) {
      return res.status(404).json({ message: 'Categoría no encontrada' })
    }
    const { name, description } = req.body
    const query = {
      name,
      description
    }
    await updateCategory(id, query)
    res.status(200).json({ message: 'Categoría actualizada correctamente' })
  } catch (error) {
    console.log(error.message)
    res
      .status(500)
      .json({ message: 'Error en el servidor al actualizar la categoría' })
  }
}

export const deleteCategoryById = async (req, res) => {
  try {
    const { id } = req.params
    const category = await findCategoryById(id)
    if (!category) {
      return res.status(404).json({ message: 'Categoría no encontrada' })
    }
    category.state = false
    await category.save()
    res.status(200).json({ message: 'Categoría eliminada correctamente' })
  } catch (error) {
    console.log(error.message)
    res
      .status(500)
      .json({ message: 'Error en el servidor al eliminar la categoría' })
  }
}
