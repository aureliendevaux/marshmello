import { BaseSchema } from '@adonisjs/lucid/schema';

export default class Migration extends BaseSchema {
	protected tableName = 'projects';

	// eslint-disable-next-line @typescript-eslint/require-await
	async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id').notNullable();
			table.uuid('uuid').notNullable().unique();

			table.string('name').notNullable();
			table.integer('user_id').notNullable();

			table.timestamp('created_at').notNullable().defaultTo(this.now());
			table.timestamp('updated_at').notNullable().defaultTo(this.now());

			table.foreign('user_id').references('id').inTable('users').onDelete('cascade');
		});
	}

	// eslint-disable-next-line @typescript-eslint/require-await
	async down() {
		this.schema.dropTable(this.tableName);
	}
}
