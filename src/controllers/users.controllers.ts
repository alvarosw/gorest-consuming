import { Request, Response } from 'express'
import GoRestApi from '../shared/gorest/gorest.service'
import AbstractController from './abstract.controller'

class UsersController extends AbstractController {
  constructor() {
    super(new GoRestApi('users'))
  }

  createPost = (req: Request, res: Response) =>
    this.api
      .post(req.body, `${req.params.id}/posts`)
      .then((data) => res.json(data))
      .catch((error) => res.status(error.status || 500).json(error))

  getPosts = (req: Request, res: Response) =>
    this.api
      .get(`${req.params.id}/posts`)
      .then((data) => res.json(data))
      .catch((error) => res.status(error.status || 500).json(error))
}

export default new UsersController()
