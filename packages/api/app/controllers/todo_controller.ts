import type { HttpContext } from '@adonisjs/core/http';

import Project from '#models/project';
import Todo from '#models/todo';
import { createSchema, updateSchema } from '#validators/todo_validator';

export default class TodoController {
	async index({ auth, params, response }: HttpContext) {
		if (auth.use('web').isLoggedOut) {
			return response.unauthorized();
		}

		const project = await Project.findByOrFail({ uuid: params.projectUuid });
		const todos = await Todo.findManyBy({
			projectId: project.id,
		});

		return response.json(todos);
	}

	async show({ auth, params, response }: HttpContext) {
		if (auth.use('web').isLoggedOut) {
			return response.unauthorized();
		}

		const todo = await Todo.findByOrFail({ uuid: params.uuid });

		return response.json(todo);
	}

	async create({ auth, request, response }: HttpContext) {
		if (auth.use('web').isLoggedOut) {
			return response.unauthorized();
		}

		const payload = await request.validateUsing(createSchema);

		const todo = await Todo.create(payload);

		return response.created(todo);
	}

	async update({ auth, params, request, response }: HttpContext) {
		if (auth.use('web').isLoggedOut) {
			return response.unauthorized();
		}

		const todo = await Todo.findByOrFail({ uuid: params.uuid });
		const payload = await request.validateUsing(updateSchema);

		await todo.merge(payload).save();

		return response.json(todo);
	}

	async delete({ auth, params, response }: HttpContext) {
		if (auth.use('web').isLoggedOut) {
			return response.unauthorized();
		}

		const todo = await Todo.findByOrFail({ uuid: params.uuid });

		await todo.delete();

		return response.noContent();
	}
}
