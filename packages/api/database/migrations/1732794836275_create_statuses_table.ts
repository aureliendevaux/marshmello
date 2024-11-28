import { BaseSchema } from '@adonisjs/lucid/schema';

export default class Migration extends BaseSchema {
	protected tableName = 'statuses';

	// eslint-disable-next-line @typescript-eslint/require-await
	async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id').notNullable();
			table.uuid('uuid').notNullable().unique();

			table.string('name').notNullable();
			table.integer('project_id').notNullable();
			table.integer('order').notNullable();

			table.timestamp('created_at').notNullable().defaultTo(this.now());
			table.timestamp('updated_at').notNullable().defaultTo(this.now());

			table.foreign('project_id').references('id').inTable('projects').onDelete('cascade');
			table.unique(['project_id', 'order']);
		});
	}

	// eslint-disable-next-line @typescript-eslint/require-await
	async down() {
		this.schema.dropTable(this.tableName);
	}
}
