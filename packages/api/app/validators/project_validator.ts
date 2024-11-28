import vine, { SimpleMessagesProvider } from '@vinejs/vine';

export const createSchema = vine.compile(
	vine.object({
		name: vine.string().minLength(3).maxLength(255),
	}),
);

createSchema.messagesProvider = new SimpleMessagesProvider({
	'name.minLength': 'Le nom du projet doit faire au moins 3 caractères',
	'name.maxLength': 'Le nom du projet doit faire au plus 255 caractères',
});
