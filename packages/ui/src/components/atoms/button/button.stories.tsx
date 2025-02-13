import { type Meta, StoryObj } from '@storybook/react';

import { Button, type ButtonProps } from './button';

const meta = {
	component: Button,
	args: {
		label: 'Change moi!',
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
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
