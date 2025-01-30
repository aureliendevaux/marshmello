import { hydrateAuthState } from '@/stores/auth_store';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// @ts-expect-error - No types needed here.
import '@fontsource-variable/inter';

import './index.css';
import { App } from './app';

await hydrateAuthState();

const root = document.querySelector('#root');

if (root) {
	createRoot(root).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
}
