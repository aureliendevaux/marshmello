import type { Intent } from '~/types/style';
import type { Component } from '~/types/utils';
import type { ClassValue } from 'class-variance-authority/types';
import type { HTMLAttributes } from 'react';

import { cm } from '~/utils/style';
import { cva } from 'class-variance-authority';

export interface TextProps extends HTMLAttributes<HTMLElement> {
	intent?: Intent;
	dimmed?: boolean;
	as?: 'p' | 'span';
	size?: 'base' | 'sm';
}

type TextVariants = {
	intent: {
		brand: ClassValue;
		accent: ClassValue;
		success: ClassValue;
		warning: ClassValue;
		danger: ClassValue;
		info: ClassValue;
		neutral: ClassValue;
	};
	dimmed: {
		true: ClassValue;
		false: ClassValue;
	};
	size: {
		base: ClassValue;
		sm: ClassValue;
	};
};

const textVariants = cva<TextVariants>('', {
	variants: {
		intent: {
			brand: undefined,
			accent: undefined,
			success: undefined,
			warning: undefined,
			danger: undefined,
			info: undefined,
			neutral: undefined,
		},
		dimmed: {
			true: undefined,
			false: undefined,
		},
		size: {
			base: 'text-base',
			sm: 'text-sm',
		},
	},
	compoundVariants: [
		{
			intent: 'brand',
			dimmed: true,
			className: 'text-brand-700/75',
		},
		{
			intent: 'accent',
			dimmed: true,
			className: 'text-accent-700/75',
		},
		{
			intent: 'success',
			dimmed: true,
			className: 'text-success-700/75',
		},
		{
			intent: 'warning',
			dimmed: true,
			className: 'text-warning-700/75',
		},
		{
			intent: 'danger',
			dimmed: true,
			className: 'text-danger-700/75',
		},
		{
			intent: 'info',
			dimmed: true,
			className: 'text-info-700/75',
		},
		{
			intent: 'neutral',
			dimmed: true,
			className: 'text-neutral-700/75',
		},
		{
			intent: 'brand',
			dimmed: false,
			className: 'text-brand-700',
		},
		{
			intent: 'accent',
			dimmed: false,
			className: 'text-accent-700',
		},
		{
			intent: 'success',
			dimmed: false,
			className: 'text-success-700',
		},
		{
			intent: 'warning',
			dimmed: false,
			className: 'text-warning-700',
		},
		{
			intent: 'danger',
			dimmed: false,
			className: 'text-danger-700',
		},
		{
			intent: 'info',
			dimmed: false,
			className: 'text-info-700',
		},
		{
			intent: 'neutral',
			dimmed: false,
			className: 'text-neutral-700',
		},
	],
});

export function Text(props: Readonly<TextProps>): Component {
	const {
		intent = 'neutral',
		dimmed,
		size = 'base',
		className,
		children,
		as: As = 'p',
		...rest
	} = props;

	return (
		<As {...rest} className={cm(textVariants({ intent, dimmed, size }), className)}>
			{children}
		</As>
	);
}
