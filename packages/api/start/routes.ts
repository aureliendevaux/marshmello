import router from '@adonisjs/core/services/router';

import { middleware } from '#start/kernel';

const todoController = () => import('#controllers/todo_controller');
const authController = () => import('#controllers/auth_controller');
const accountController = () => import('#controllers/account_controller');
const projectController = () => import('#controllers/project_controller');

router
	.group(() => {
		router.post('/login', [authController, 'login']).as('auth.login');
		router.post('/logout', [authController, 'logout']).as('auth.logout').use(middleware.auth());
		router.post('/register', [authController, 'register']).as('auth.register');
	})
	.prefix('/auth');

router
	.group(() => {
		router.delete('/', [accountController, 'deleteAccount']).as('account.delete');
	})
	.use(middleware.auth())
	.prefix('/account');

router
	.group(() => {
		router.get('/', [projectController, 'index']).as('projects.index');
		router.get('/:uuid', [projectController, 'show']).as('projects.show');
		router.post('/', [projectController, 'store']).as('projects.store');
		router.patch('/:uuid', [projectController, 'update']).as('projects.update');
		router.delete('/:uuid', [projectController, 'destroy']).as('projects.destroy');
	})
	.use(middleware.auth())
	.prefix('/projects');

router
	.group(() => {
		router.get('/', [todoController, 'index']);
		router.post('/', [todoController, 'create']);
		router.get('/:id', [todoController, 'show']);
		router.patch('/:id', [todoController, 'update']);
		router.delete('/:id', [todoController, 'delete']);
	})
	.prefix('/todos');
