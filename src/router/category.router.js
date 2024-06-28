import { Router } from 'express'
import {
  getCategories,
  getCategoryById,
  postCategory,
  putCategory,
  deleteCategoryById,
  getAllCategories
} from '../controller/category.controller.js'
import { verifyToken } from '../middleware/verifyToken.js'

const router = Router()

router.get('/', verifyToken, getCategories)
router.get('/findAll', verifyToken, getAllCategories)
router.get('/:id', verifyToken, getCategoryById)
router.post('/', verifyToken, postCategory)
router.put('/:id', verifyToken, putCategory)
router.delete('/:id', verifyToken, deleteCategoryById)

export default router
