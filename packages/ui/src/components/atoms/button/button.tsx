import type { Component } from '~/types/utils';

export interface ButtonProps {
	label?: string;
}

export function Button({ label }: Readonly<ButtonProps>): Component {
	return <button>{label}</button>;
}
