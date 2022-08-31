import AbstractController from './abstract.controller'

class UsersController extends AbstractController {
  constructor() {
    super('users')
  }
}

export default new UsersController()
