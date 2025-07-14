import type { ReactElement } from 'react';
import React from 'react';

export default function bindProps<
	Props extends {},
	BoundKeys extends keyof Props,
>(
	Component: (props: Props) => ReactElement,
	boundProps: Pick<Props, BoundKeys>,
) {
	function ResultComponent(props: Omit<Props, BoundKeys>) {
		const mergedProps = { ...boundProps, ...props } as Props;
		return <Component {...mergedProps} />;
	}

	return ResultComponent;
}
