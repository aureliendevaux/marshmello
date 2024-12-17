import testUtils from '@adonisjs/core/services/test_utils';
import { test } from '@japa/runner';

import User from '#models/user';

test.group('Projects', (group) => {
	group.each.setup(() => testUtils.db().withGlobalTransaction());

	test('it should return the list of projects', async ({ client }) => {
		const user = await User.create({ username: 'test1234', password: 'test1234' });

		const response = await client.get('/projects').loginAs(user);

		response.assertStatus(200);
		response.assertBody([]);
	});

	test('it should create a new project', async ({ client }) => {
		const user = await User.create({ username: 'test1234', password: 'test1234' });
		const projectName = 'mon projet';

		const response = await client
			.post('/projects')
			.json({
				name: projectName,
				userId: user.id,
			})
			.loginAs(user);

		response.assertStatus(201);
		response.assertBodyContains({
			name: projectName,
			userId: user.id,
		});
	});

	test('it should get a project by id', async ({ client }) => {
		const user = await User.create({ username: 'test1234', password: 'test1234' });
		const projectName = 'mon projet';
		const createResponse = await client
			.post('/projects')
			.json({
				name: projectName,
				userId: user.id,
			})
			.loginAs(user);

		const projectId = (createResponse.response.body as { uuid: string }).uuid;

		const getResponse = await client.get(`/projects/${projectId}`).loginAs(user);

		getResponse.assertStatus(200);
		getResponse.assertBodyContains({
			uuid: projectId,
			name: projectName,
			userId: user.id,
		});
	});

	test('it should update a project', async ({ client }) => {
		const user = await User.create({ username: 'test1234', password: 'test1234' });
		const projectName = 'mon projet';
		const createResponse = await client
			.post('/projects')
			.json({
				name: projectName,
				userId: user.id,
			})
			.loginAs(user);

		const projectId = (createResponse.response.body as { uuid: string }).uuid;

		const patchResponse = await client
			.patch(`/projects/${projectId}`)
			.json({
				name: projectName,
			})
			.loginAs(user);

		patchResponse.assertStatus(200);
		patchResponse.assertBodyContains({
			uuid: projectId,
			name: projectName,
			userId: user.id,
		});
	});

	test('it should delete a project', async ({ client }) => {
		const user = await User.create({ username: 'test1234', password: 'test1234' });
		const projectName = 'mon projet';
		const createResponse = await client
			.post('/projects')
			.json({
				name: projectName,
				userId: user.id,
			})
			.loginAs(user);

		const projectId = (createResponse.response.body as { uuid: string }).uuid;
		const patchResponse = await client.delete(`/projects/${projectId}`).loginAs(user);
		patchResponse.assertStatus(204);
	});
});
