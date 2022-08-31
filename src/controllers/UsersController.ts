import { Request, Response } from 'express'
import GoRestApi from '../shared/gorest/GoRestApi'

export default class UsersController {
  static async get(_: Request, res: Response) {
    return GoRestApi.get('users')
      .then((data) => res.json(data))
      .catch((error) => res.status(error.status || 500).json(error))
  }
}
