import { Category } from '../model/index.js'

export const findAllCategory = async (query = {}) =>
  await Category.findAndCountAll(query)

export const findCategoryById = async id => await Category.findByPk(id)

export const createCategory = async categCategory =>
  await Category.create(categCategory)

export const updateCategory = async (id, categCategory) =>
  await Category.update(categCategory, { where: { id } })
