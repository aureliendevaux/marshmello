import { isAlreadyAuthenticated } from '@/stores/auth_store';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth_layout')({
	beforeLoad: () => {
		if (isAlreadyAuthenticated()) {
			// eslint-disable-next-line @typescript-eslint/only-throw-error
			throw redirect({ to: '/dashboard' });
		}
	},
	component: AuthLayout,
});

function AuthLayout() {
	return <Outlet />;
}
