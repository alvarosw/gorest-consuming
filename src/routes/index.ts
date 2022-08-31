import { Router } from 'express'
import userRoutes from './users.routes'
import postRoutes from './posts.routes'

const router = Router()
router.use('/users', userRoutes)
router.use('/posts', postRoutes)

export default router
