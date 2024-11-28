import { HttpContext } from '@adonisjs/core/http';

export default class AccountController {
	async deleteAccount({ auth, response }: HttpContext) {
		if (auth.use('web').isLoggedOut) {
			return response.unauthorized();
		}

		await auth.user!.delete();
		await auth.use('web').logout();

		return response.noContent();
	}
}
