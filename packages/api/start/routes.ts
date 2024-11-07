import router from '@adonisjs/core/services/router';

const todoController = () => import('#controllers/todo_controller');

router
	.group(() => {
		router.get('/', [todoController, 'index']);
		router.post('/', [todoController, 'create']);
		router.get('/:id', [todoController, 'show']);
		router.patch('/:id', [todoController, 'update']);
		router.delete('/:id', [todoController, 'delete']);
	})
	.prefix('/todos');
