import { Router } from 'express'
import {
  getAllCategories,
  getCategoryById,
  postCategory,
  putCategory,
  deleteCategoryById
} from '../controller/category.controller.js'

const router = Router()

router.get('/', getAllCategories)
router.get('/:id', getCategoryById)
router.post('/', postCategory)
router.put('/:id', putCategory)
router.delete('/:id', deleteCategoryById)

export default router
