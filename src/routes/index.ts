import { Router } from 'express'
import userRoutes from './users.routes'
import postRoutes from './posts.routes'
import commentRoutes from './comments.routes'

const router = Router()
router.use('/users', userRoutes)
router.use('/posts', postRoutes)
router.use('/comments', commentRoutes)

export default router
