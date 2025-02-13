import type { ButtonProps } from '~/components';

import { type Meta, StoryObj } from '@storybook/react';

import { Text, type TextProps } from './text';

const meta = {
	component: Text,
	args: {
		intent: 'neutral',
		size: 'base',
		dimmed: false,
		as: 'p',
		children:
			'Voluptates ea blanditiis enim maxime maiores est impedit atque. Sed et possimus voluptatibus quisquam. Doloribus optio a architecto incidunt. Minus porro consequuntur et iste quam ipsum.',
	},
	argTypes: {
		intent: {
			options: [
				'brand',
				'accent',
				'neutral',
				'success',
				'warning',
				'danger',
				'info',
			] satisfies Array<ButtonProps['intent']>,
			control: {
				type: 'select',
			},
		},
		as: {
			options: ['p', 'span'] satisfies Array<TextProps['as']>,
			control: {
				type: 'select',
			},
		},
		size: {
			options: ['sm', 'base'] satisfies Array<TextProps['size']>,
			control: {
				type: 'select',
			},
		},
	},
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
