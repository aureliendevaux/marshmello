import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_public_layout')({
	component: PublicLayout,
});

function PublicLayout() {
	return <Outlet />;
}
