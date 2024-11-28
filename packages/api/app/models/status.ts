import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations';

import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm';
import { DateTime } from 'luxon';
import { v7 } from 'uuid';

import Project from '#models/project';
import Todo from '#models/todo';

export default class Status extends BaseModel {
	static readonly table = 'statuses';

	@column({ isPrimary: true })
	declare id: number;

	@column()
	declare uuid: string;

	@column()
	declare name: string;

	@column()
	declare projectId: number;

	@belongsTo(() => Project)
	declare project: BelongsTo<typeof Project>;

	@column()
	declare order: number;

	@hasMany(() => Todo)
	declare todos: HasMany<typeof Todo>;

	@column.dateTime({ autoCreate: true })
	declare createdAt: DateTime;

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	declare updatedAt: DateTime;

	constructor() {
		super();
		this.uuid = v7();
	}
}
