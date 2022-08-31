import GoRestApi from '../shared/gorest/gorest.service'
import AbstractController from './abstract.controller'

class UsersController extends AbstractController {
  constructor() {
    super(new GoRestApi('users'))
  }

  createPost = () => this.api.post({})
}

export default new UsersController()
