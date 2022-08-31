import { Request, Response } from 'express'
import GoRestApi from '../shared/gorest/gorest.service'
import AbstractController from './abstract.controller'

class PostsController extends AbstractController {
  constructor() {
    super(new GoRestApi('posts'))
  }

  getComments = (req: Request, res: Response) =>
    this.api
      .get(`${req.params.id}/comments`)
      .then((data) => res.json(data))
      .catch((error) => res.status(error.status || 500).json(error))

  createComment = (req: Request, res: Response) =>
    this.api
      .post(req.body, `${req.params.id}/comments`)
      .then((data) => res.json(data))
      .catch((error) => res.status(error.status || 500).json(error))
}

export default new PostsController()
