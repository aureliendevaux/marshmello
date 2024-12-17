import { HttpContext } from '@adonisjs/core/http';

import Project from '#models/project';
import { createProjectSchema, editProjectSchema } from '#validators/project_validator';

export default class ProjectController {
	async index({ auth, response }: HttpContext) {
		if (auth.use('web').isLoggedOut) {
			return response.unauthorized();
		}

		const projects = await Project.findManyBy({ userId: auth.user!.id });

		return response.json(projects.map((p) => p.serialize({ fields: ['uuid', 'name'] })));
	}

	async show({ auth, params, response }: HttpContext) {
		if (auth.use('web').isLoggedOut) {
			return response.unauthorized();
		}

		const project = await Project.findByOrFail({
			uuid: params.uuid,
		});

		return response.json(project.serialize());
	}

	async store({ auth, request, response }: HttpContext) {
		if (auth.use('web').isLoggedOut) {
			return response.unauthorized();
		}

		const payload = await request.validateUsing(createProjectSchema);
		const project = await Project.create(payload);

		return response.created(project.serialize());
	}

	async update({ auth, params, request, response }: HttpContext) {
		if (auth.use('web').isLoggedOut) {
			return response.unauthorized();
		}

		const project = await Project.findByOrFail({
			uuid: params.uuid,
		});

		const payload = await request.validateUsing(editProjectSchema);
		await project.merge(payload).save();

		return response.json(project.serialize());
	}

	async destroy({ auth, params, response }: HttpContext) {
		if (auth.use('web').isLoggedOut) {
			return response.unauthorized();
		}

		const project = await Project.findByOrFail({
			uuid: params.uuid,
		});

		await project.delete();

		return response.noContent();
	}
}
