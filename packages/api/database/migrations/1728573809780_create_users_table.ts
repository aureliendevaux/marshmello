import { BaseSchema } from '@adonisjs/lucid/schema';

export default class Migration extends BaseSchema {
	protected tableName = 'users';

	// eslint-disable-next-line @typescript-eslint/require-await
	async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id').notNullable();
			table.string('full_name').nullable();
			table.string('email', 254).notNullable().unique();
			table.string('password').notNullable();

			table.timestamp('created_at').notNullable();
			table.timestamp('updated_at').nullable();
		});
	}

	// eslint-disable-next-line @typescript-eslint/require-await
	async down() {
		this.schema.dropTable(this.tableName);
	}
}
