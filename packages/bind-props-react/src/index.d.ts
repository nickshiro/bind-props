import type { ReactElement } from 'react';

export default function bindProps<
	Props extends {},
	BoundKeys extends keyof Props,
>(
	Component: (props: Props) => ReactElement,
	boundProps: Pick<Props, BoundKeys>,
): (props: Omit<Props, BoundKeys>) => ReactElement;
