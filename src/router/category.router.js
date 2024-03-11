import { Router } from 'express'
import {
  getCategories,
  getCategoryById,
  postCategory,
  putCategory,
  deleteCategoryById,
  getAllCategories
} from '../controller/category.controller.js'

const router = Router()

router.get('/', getCategories)
router.get('/findAll', getAllCategories)
router.get('/:id', getCategoryById)
router.post('/', postCategory)
router.put('/:id', putCategory)
router.delete('/:id', deleteCategoryById)

export default router
