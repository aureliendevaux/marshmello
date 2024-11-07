import vine, { SimpleMessagesProvider } from '@vinejs/vine';

export const createSchema = vine.compile(
	vine.object({
		name: vine.string().minLength(3).maxLength(255),
	}),
);

createSchema.messagesProvider = new SimpleMessagesProvider({
	'name.minLength': 'Le nom de la todo doit faire au moins 3 caractères',
	'name.maxLength': 'Le nom de la todo doit faire au plus 255 caractères',
});

export const updateSchema = vine.compile(
	vine.object({
		name: vine.string().minLength(3).maxLength(255),
		completed: vine.boolean(),
	}),
);

updateSchema.messagesProvider = new SimpleMessagesProvider({
	'name.minLength': 'Le nom de la todo doit faire au moins 3 caractères',
	'name.maxLength': 'Le nom de la todo doit faire au plus 255 caractères',
});
