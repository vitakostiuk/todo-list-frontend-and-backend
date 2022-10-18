import { Router } from 'express';

import todoController from '../../controllers/todo.controller';
import { tryCatchWrapper } from '../../helpers/trycatchWrapper';

const todosRouter: Router = Router();

todosRouter.get('/', tryCatchWrapper(todoController.getAllTodo.bind(todoController)));
todosRouter.post('/', tryCatchWrapper(todoController.addTodo.bind(todoController)));
todosRouter.get('/:todoId', tryCatchWrapper(todoController.getById.bind(todoController)));
todosRouter.delete('/:todoId', tryCatchWrapper(todoController.removeById.bind(todoController)));
todosRouter.put('/:todoId', tryCatchWrapper(todoController.updateById.bind(todoController)));

export default todosRouter;
