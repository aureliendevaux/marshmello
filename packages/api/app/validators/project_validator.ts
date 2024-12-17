import vine, { SimpleMessagesProvider } from '@vinejs/vine';

import User from '#models/user';

export const createProjectSchema = vine.compile(
	vine.object({
		name: vine.string().minLength(3).maxLength(255),
		userId: vine.number().exists(async (_, value) => {
			const row = await User.find(value);
			return row !== null;
		}),
	}),
);

createProjectSchema.messagesProvider = new SimpleMessagesProvider({
	'name.minLength': 'Le nom du projet doit faire au moins 3 caractères',
	'name.maxLength': 'Le nom du projet doit faire au plus 255 caractères',
});

export const editProjectSchema = vine.compile(
	vine.object({
		name: vine.string().minLength(3).maxLength(255),
	}),
);

editProjectSchema.messagesProvider = new SimpleMessagesProvider({
	'name.minLength': 'Le nom du projet doit faire au moins 3 caractères',
	'name.maxLength': 'Le nom du projet doit faire au plus 255 caractères',
});
