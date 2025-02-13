import type { IconName } from '~/types/icon';
import type { Intent } from '~/types/style';
import type { Component } from '~/types/utils';

import { Icon, type IconProps } from '~/components/atoms/icon/icon';
import { cm } from '~/utils/style';

export interface ButtonProps {
	label?: string;
	intent?: Intent;
	icon?: IconName;
	iconSize?: IconProps['size'];
}

export function Button(props: Readonly<ButtonProps>): Component {
	const { intent = 'brand', label, icon, iconSize } = props;

	return (
		<button
			className={cm(
				'text-white inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full',
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
			{icon && <Icon name={icon} size={iconSize} />}
			<span className={cm('font-sans uppercase leading-none font-medium text-center mt-0.5')}>
				{label}
			</span>
		</button>
	);
}
