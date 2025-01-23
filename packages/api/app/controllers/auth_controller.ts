import { errors } from '@adonisjs/auth';
import { HttpContext } from '@adonisjs/core/http';
import hash from '@adonisjs/core/services/hash';

import User from '#models/user';
import { loginSchema, registerSchema } from '#validators/auth_validator';

export default class AuthController {
	async login({ auth, request, response }: HttpContext) {
		const { username, password } = await request.validateUsing(loginSchema);

		const userExists = await User.findBy({ username });

		if (!userExists) {
			// eslint-disable-next-line @typescript-eslint/only-throw-error
			throw new errors.E_INVALID_CREDENTIALS();
		}

		const isValidPassword = await hash.verify(userExists.password, password);

		if (!isValidPassword) {
			// eslint-disable-next-line @typescript-eslint/only-throw-error
			throw new errors.E_INVALID_CREDENTIALS();
		}

		await auth.use('web').login(userExists);

		return response.json({
			uuid: userExists.uuid,
			username: userExists.username,
		});
	}

	async logout({ auth, response }: HttpContext) {
		if (auth.use('web').isLoggedOut) {
			return response.unauthorized();
		}

		await auth.use('web').logout();

		return response.noContent();
	}

	async register({ auth, request, response }: HttpContext) {
		const payload = await request.validateUsing(registerSchema);

		const user = await User.create(payload);
		await auth.use('web').login(user);

		return response.status(201).json({
			uuid: user.uuid,
			username: user.username,
		});
	}

	check({ auth, response }: HttpContext) {
		if (auth.user === undefined) {
			return response.unauthorized();
		}

		return response.ok({
			uuid: auth.user.uuid,
			username: auth.user.username,
		});
	}
}
