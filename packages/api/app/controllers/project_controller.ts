import { HttpContext } from '@adonisjs/core/http';

import Project from '#models/project';

export default class ProjectController {
	async index({ auth, response }: HttpContext) {
		if (auth.use('web').isLoggedOut) {
			return response.unauthorized();
		}

		const projects = await Project.findManyBy({ userId: auth.user!.id });

		return response.json(projects.map((p) => p.serialize({ fields: ['uuid', 'name'] })));
	}

	async show({ auth, response }: HttpContext) {
		if (auth.use('web').isLoggedOut) {
			return response.unauthorized();
		}
	}

	async store({ auth, request, response }: HttpContext) {
		if (auth.use('web').isLoggedOut) {
			return response.unauthorized();
		}
	}

	async update({ auth, request, response }: HttpContext) {
		if (auth.use('web').isLoggedOut) {
			return response.unauthorized();
		}
	}

	async destroy({ auth, response }: HttpContext) {
		if (auth.use('web').isLoggedOut) {
			return response.unauthorized();
		}
	}
}
