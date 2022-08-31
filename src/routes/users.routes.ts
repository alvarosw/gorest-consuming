import { Router } from 'express'
import UsersController from '../controllers/users.controller'

const router = Router()

router.get('', UsersController.get)
router.post('', UsersController.create)
router.get('/:id', UsersController.get)
router.put('/:id', UsersController.update)
router.delete('/:id', UsersController.remove)

//user posts
router.get('/:id/posts', UsersController.getPosts)
router.post('/:id/posts', UsersController.createPost)

export default router
