import { BaseSeeder } from '@adonisjs/lucid/seeders';

import Project from '#models/project';

export default class Seeder extends BaseSeeder {
	async run() {
		await Project.createMany([
			{
				userId: 1,
				name: 'Projet 1',
			},
			{
				userId: 1,
				name: 'Projet 2',
			},
		]);
	}
}
