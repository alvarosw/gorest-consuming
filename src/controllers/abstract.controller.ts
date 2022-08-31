import { Request, Response } from 'express'
import GoRestApi from '../shared/gorest/gorest.service'

export default class AbstractController {
  api: GoRestApi
  constructor(forModule: string) {
    this.api = new GoRestApi(forModule)
  }

  get = (req: Request, res: Response) => {
    return this.api
      .get(req.params.id)
      .then((data) => res.json(data))
      .catch((error) => res.status(error.status || 500).json(error))
  }

  create = (req: Request, res: Response) => {
    return this.api
      .post(req.body)
      .then((data) => res.json(data))
      .catch((error) => res.status(error.status || 500).json(error))
  }

  update = (req: Request, res: Response) => {
    return this.api
      .update(req.params.id, req.body)
      .then((data) => res.json(data))
      .catch((error) => res.status(error.status || 500).json(error))
  }

  remove = (req: Request, res: Response) => {
    return this.api
      .remove(req.params.id)
      .then((data) => res.json(data))
      .catch((error) => res.status(error.status || 500).json(error))
  }
}
