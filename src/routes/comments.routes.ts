import { Router } from 'express'
import CommentsController from '../controllers/comments.controllers'

const router = Router()

router.get('', CommentsController.get)
router.delete('/:id', CommentsController.remove)

export default router
