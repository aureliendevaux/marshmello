import vine, { SimpleMessagesProvider } from '@vinejs/vine';

import Project from '#models/project';

export const createStatusSchema = vine.compile(
	vine.object({
		name: vine.string().minLength(3).maxLength(255),
		order: vine.number().min(1),
		projectId: vine.number().exists(async (_, value) => {
			const row = await Project.find(value);
			return row !== null;
		}),
	}),
);

createStatusSchema.messagesProvider = new SimpleMessagesProvider({
	'name.minLength': 'Le nom de la todo doit faire au moins 3 caractères',
	'name.maxLength': 'Le nom de la todo doit faire au plus 255 caractères',
});

export const updateStatusSchema = vine.compile(
	vine.object({
		name: vine.string().minLength(3).maxLength(255).optional(),
		order: vine.number().min(1).optional(),
	}),
);

updateStatusSchema.messagesProvider = new SimpleMessagesProvider({
	'name.minLength': 'Le nom de la todo doit faire au moins 3 caractères',
	'name.maxLength': 'Le nom de la todo doit faire au plus 255 caractères',
});
