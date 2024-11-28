import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations';

import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm';
import { DateTime } from 'luxon';
import { v7 } from 'uuid';

import Status from '#models/status';
import Todo from '#models/todo';
import User from '#models/user';

export default class Project extends BaseModel {
	static readonly table = 'projects';

	@column({ isPrimary: true })
	declare id: number;

	@column()
	declare uuid: string;

	@column()
	declare name: string;

	@column()
	declare userId: number;

	@belongsTo(() => User)
	declare user: BelongsTo<typeof User>;

	@hasMany(() => Status)
	declare statuses: HasMany<typeof Status>;

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
