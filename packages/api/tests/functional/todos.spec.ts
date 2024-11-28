import { test } from '@japa/runner';

test.group('Todos', () => {
	test('it should return the list of todos', async ({ client }) => {
		const response = await client.get('/todos');

		response.assertStatus(200);
		response.assertBody([]);
	});

	test('it should create a new todo', async ({ client }) => {
		const todoName = 'ma première todo';

		const response = await client.post('/todos').json({
			name: todoName,
		});

		response.assertStatus(201);
		response.assertBodyContains({
			name: todoName,
			completed: false,
			deletedAt: null,
		});
	});

	test('it should get a todo by id', async ({ client }) => {
		const todoName = 'ma première todo';
		const createResponse = await client.post('/todos').json({
			name: todoName,
		});

		const todoId = (createResponse.response.body as { id: number }).id;

		const getResponse = await client.get(`/todos/${todoId}`);

		getResponse.assertStatus(200);
		getResponse.assertBodyContains({
			id: todoId,
			name: todoName,
			completed: false,
			deletedAt: null,
		});
	});

	test('it should update a todo', async ({ client }) => {
		const todoName = 'ma première todo';
		const createResponse = await client.post('/todos').json({
			name: todoName,
		});

		const todoId = (createResponse.response.body as { id: number }).id;

		const patchResponse = await client.patch(`/todos/${todoId}`).json({
			name: todoName,
			completed: true,
		});

		patchResponse.assertStatus(200);
		patchResponse.assertBodyContains({
			id: todoId,
			name: todoName,
			completed: true,
			deletedAt: null,
		});
	});

	test('it should delete a todo', async ({ client }) => {
		const todoName = 'ma première todo';
		const createResponse = await client.post('/todos').json({
			name: todoName,
		});

		const todoId = (createResponse.response.body as { id: number }).id;
		const patchResponse = await client.delete(`/todos/${todoId}`);
		patchResponse.assertStatus(204);
	});
});
