import GoRestApi from '../shared/gorest/gorest.service'
import AbstractController from './abstract.controller'

class PostsController extends AbstractController {
  constructor() {
    super(new GoRestApi('posts'))
  }
}

export default new PostsController()
