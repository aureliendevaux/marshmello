import type { Intent } from '~/types/style';
import type { Component } from '~/types/utils';

import { cm } from '~/utils/style';

export interface ButtonProps {
	label?: string;
	intent?: Intent;
}

export function Button(props: Readonly<ButtonProps>): Component {
	const { intent = 'brand', label } = props;

	return (
		<button
			className={cm(
				'font-sans text-white px-3 py-2 rounded-full font-medium text-center uppercase',
				{
					'bg-info-500': intent === 'info',
					'bg-success-500': intent === 'success',
					'bg-warning-500': intent === 'warning',
					'bg-danger-500': intent === 'danger',
					'bg-neutral-500': intent === 'neutral',
					'bg-brand-500': intent === 'brand',
					'bg-accent-500': intent === 'accent',
				},
			)}
		>
			{label}
		</button>
	);
}
