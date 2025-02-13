import { cx, type CxOptions } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export function cm(...values: CxOptions) {
	return twMerge(cx(values));
}
