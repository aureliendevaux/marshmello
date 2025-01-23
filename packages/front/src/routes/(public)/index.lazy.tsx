import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/_public_layout/')({
	component: Home,
});

function Home() {
	return (
		<>
			<h1>Accueil</h1>
			<Link to="/auth/login">Se connecter</Link>
		</>
	);
}
