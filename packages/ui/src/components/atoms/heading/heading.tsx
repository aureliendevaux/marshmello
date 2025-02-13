import type { Intent } from '~/types/style';
import type { Component } from '~/types/utils';
import type { HTMLAttributes } from 'react';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	intent: Intent;
}

export function Heading(props: Readonly<HeadingProps>): Component {
	return null;
}
