import { BaseSchema } from '@adonisjs/lucid/schema';

export default class Migration extends BaseSchema {
	protected tableName = 'todos';

	// eslint-disable-next-line @typescript-eslint/require-await
	async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id');
			table.string('name').notNullable();
			table.boolean('completed').notNullable().defaultTo(false);
			table.timestamp('created_at');
			table.timestamp('updated_at');
			table.timestamp('deleted_at');
		});
	}

	// eslint-disable-next-line @typescript-eslint/require-await
	async down() {
		this.schema.dropTable(this.tableName);
	}
}
