import { Router } from 'express'
import UsersController from '../controllers/users.controllers'

const router = Router()

router.get('', UsersController.get)
router.post('', UsersController.create)
router.get('/:id', UsersController.get)
router.put('/:id', UsersController.update)
router.delete('/:id', UsersController.remove)

export default router
