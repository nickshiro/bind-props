import type { JSX } from 'solid-js';
import { createMemo } from 'solid-js';

export default function bindProps<
	Props extends {},
	BoundKeys extends keyof Props,
>(
	Component: (props: Props) => JSX.Element,
	boundProps: Pick<Props, BoundKeys>,
) {
	function ResultComponent(allProps: Omit<Props, BoundKeys>) {
		const merged = createMemo(
			() =>
				({
					...boundProps,
					...allProps,
				}) as Props,
		);

		return Component(merged());
	}

	return ResultComponent;
}
