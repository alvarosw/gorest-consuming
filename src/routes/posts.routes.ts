import { Router } from 'express'
import PostsController from '../controllers/posts.controllers'

const router = Router()

router.get('', PostsController.get)

export default router
