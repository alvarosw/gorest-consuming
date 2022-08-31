import { Router } from 'express'
import PostsController from '../controllers/posts.controllers'

const router = Router()

router.get('', PostsController.get)

// comments
router.get('/:id/comments', PostsController.getComments)
router.post('/:id/comments', PostsController.createComment)

export default router
