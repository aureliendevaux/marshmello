import type { IconName } from '~/types/icon';
import type { Component } from '~/types/utils';
import type { HTMLAttributes } from 'react';

import { cm } from '~/utils/style';

export interface IconProps extends HTMLAttributes<SVGElement> {
	name: IconName;
	size?: 'sm' | 'md' | 'lg';
}

export function Icon(props: Readonly<IconProps>): Component {
	const { name, size = 'md', className, ...rest } = props;
	const iconUri = `/sprite.svg#${name}`;

	return (
		<svg
			{...rest}
			aria-hidden="true"
			className={cm(
				'pointer-events-none inline-block shrink-0 align-middle text-current',
				{
					'size-4': size === 'sm',
					'size-5': size === 'md',
					'size-6': size === 'lg',
				},
				className,
			)}
		>
			<use href={iconUri} />
		</svg>
	);
}
