import type { HttpContext } from '@adonisjs/core/http';

import { DateTime } from 'luxon';

import Todo from '#models/todo';
import { createSchema, updateSchema } from '#validators/todo_validator';

export default class TodoController {
	async index({ response }: HttpContext) {
		const todos = await Todo.all();

		return response.json(todos);
	}

	async show({ params, response }: HttpContext) {
		const todo = await Todo.findOrFail(params.id);

		return response.json(todo);
	}

	async create({ request, response }: HttpContext) {
		const payload = await request.validateUsing(createSchema);

		const todo = await Todo.create(payload);

		return response.status(201).json(todo);
	}

	async update({ params, request, response }: HttpContext) {
		const todo = await Todo.findOrFail(params.id);
		const payload = await request.validateUsing(updateSchema);

		todo.merge(payload);
		await todo.save();

		return response.json(todo);
	}

	async delete({ params, response }: HttpContext) {
		const todo = await Todo.findOrFail(params.id);

		await todo
			.merge({
				deletedAt: DateTime.now(),
			})
			.save();

		return response.noContent();
	}
}
