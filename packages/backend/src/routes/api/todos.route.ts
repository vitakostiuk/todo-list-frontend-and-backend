import { Router } from 'express';

import todoController from '../../controllers/todo.controller';
import { tryCatchWrapper } from '../../helpers/trycatchWrapper';
import { validateTodo } from '../../middlewares/validateTodo';
import { login } from '../../middlewares/login';
// import createError from '../../helpers/createError';

const todosRouter: Router = Router();

todosRouter.get('/', login, tryCatchWrapper(todoController.getAllTodo.bind(todoController)));
todosRouter.post(
  '/',
  login,
  validateTodo,
  tryCatchWrapper(todoController.addTodo.bind(todoController))
);
todosRouter.get('/:todoId', login, tryCatchWrapper(todoController.getById.bind(todoController)));
todosRouter.delete(
  '/:todoId',
  login,
  tryCatchWrapper(todoController.removeById.bind(todoController))
);
todosRouter.put(
  '/:todoId',
  validateTodo,
  tryCatchWrapper(todoController.updateById.bind(todoController))
);
todosRouter.patch(
  '/:todoId/status',
  login,
  validateTodo,
  tryCatchWrapper(todoController.updateStatus.bind(todoController))
);

export default todosRouter;
