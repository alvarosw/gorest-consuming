import { Request, Response } from 'express'
import GoRestApi from '../shared/gorest/gorest.service'

const api = new GoRestApi('users')

export default class UsersController {
  static async get(req: Request, res: Response) {
    return api
      .get(req.params.id)
      .then((data) => res.json(data))
      .catch((error) => res.status(error.status || 500).json(error))
  }

  static async create(req: Request, res: Response) {
    return api
      .post(req.body)
      .then((data) => res.json(data))
      .catch((error) => res.status(error.status || 500).json(error))
  }

  static async update(req: Request, res: Response) {
    return api
      .update(req.params.id, req.body)
      .then((data) => res.json(data))
      .catch((error) => res.status(error.status || 500).json(error))
  }

  static async remove(req: Request, res: Response) {
    return api
      .remove(req.params.id)
      .then((data) => res.json(data))
      .catch((error) => res.status(error.status || 500).json(error))
  }
}
