import type { JSX } from 'solid-js';

export default function bindProps<
	Props extends {},
	BoundKeys extends keyof Props,
>(
	Component: (props: Props) => JSX.Element,
	boundProps: Pick<Props, BoundKeys>,
): (props: Omit<Props, BoundKeys>) => JSX.Element;
