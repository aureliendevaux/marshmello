import router from '@adonisjs/core/services/router';

import { middleware } from '#start/kernel';

const todoController = () => import('#controllers/todo_controller');
const authController = () => import('#controllers/auth_controller');

router
	.group(() => {
		router.post('/login', [authController, 'login']).as('auth.login');
		router.post('/logout', [authController, 'logout']).as('auth.logout').use(middleware.auth());
		router.post('/register', [authController, 'register']).as('auth.register');
	})
	.prefix('/auth');

router
	.group(() => {
		router.get('/', [todoController, 'index']);
		router.post('/', [todoController, 'create']);
		router.get('/:id', [todoController, 'show']);
		router.patch('/:id', [todoController, 'update']);
		router.delete('/:id', [todoController, 'delete']);
	})
	.prefix('/todos');
