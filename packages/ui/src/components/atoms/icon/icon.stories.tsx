import type { IconName } from '~/types/icon';

import { type Meta, StoryObj } from '@storybook/react';

import { Icon, type IconProps } from './icon';

const meta = {
	component: Icon,
	args: {
		name: 'user-circle',
		size: 'md',
	},
	argTypes: {
		name: {
			options: ['user-circle'] satisfies Array<IconName>,
			control: {
				type: 'select',
			},
		},
		size: {
			options: ['sm', 'md', 'lg'] satisfies Array<IconProps['size']>,
			control: {
				type: 'select',
			},
		},
	},
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
