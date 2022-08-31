import GoRestApi from '../shared/gorest/gorest.service'
import AbstractController from './abstract.controller'

class CommentsController extends AbstractController {
  constructor() {
    super(new GoRestApi('comments'))
  }
}

export default new CommentsController()
