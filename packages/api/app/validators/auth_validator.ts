import vine, { SimpleMessagesProvider } from '@vinejs/vine';

import User from '#models/user';

export const loginSchema = vine.compile(
	vine.object({
		username: vine.string().minLength(3).maxLength(50),
		password: vine.string(),
	}),
);

loginSchema.messagesProvider = new SimpleMessagesProvider({
	'username.minLength': "Le nom d'utilisateur doit faire au moins 3 caractères",
	'username.maxLength': "Le nom d'utilisateur doit faire au plus 50 caractères",
});

export const registerSchema = vine.compile(
	vine.object({
		username: vine
			.string()
			.minLength(3)
			.maxLength(50)
			.exists(async (_, value) => {
				const row = await User.findBy({ username: value });
				return row === null;
			}),
		password: vine.string(),
	}),
);

registerSchema.messagesProvider = new SimpleMessagesProvider({
	'username.minLength': "Le nom d'utilisateur doit faire au moins 3 caractères",
	'username.maxLength': "Le nom d'utilisateur doit faire au plus 50 caractères",
	'username.exists': "Ce nom d'utilisateur est déjà pris",
});
