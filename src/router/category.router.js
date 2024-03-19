import { Router } from 'express'
import {
  getCategories,
  getCategoryById,
  postCategory,
  putCategory,
  deleteCategoryById,
  getAllCategories
} from '../controller/category.controller.js'
import { verifyTotken } from '../middleware/verifyTotken.js'

const router = Router()

router.get('/', verifyTotken, getCategories)
router.get('/findAll', verifyTotken, getAllCategories)
router.get('/:id', verifyTotken, getCategoryById)
router.post('/', verifyTotken, postCategory)
router.put('/:id', verifyTotken, putCategory)
router.delete('/:id', verifyTotken, deleteCategoryById)

export default router
