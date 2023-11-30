"use client";

import { ComponentProps, ElementRef, forwardRef, useState } from "react";

export type TagButtonProps = ComponentProps<"button"> & {
	id: string,
	onSelectTag: (id:string) => void,
	onUnselectTag: (id:string) => void
}

export const TagButton = forwardRef<ElementRef<"button">, TagButtonProps>(
	({ id, children, onSelectTag, onUnselectTag, ...props }: TagButtonProps, ref) => {
		const [selected, setSelected] = useState(false);

		function handleSelect() {
			const newStateOfSelect = !selected;

			setSelected(newStateOfSelect);

			if (newStateOfSelect) {
				onSelectTag(id);
			} else {
				onUnselectTag(id);
			}
		}

		return (
			<button onClick={handleSelect} className={`${selected ? "bg-purple-200 text-gray-100" : "shadow-tag text-purple-100"} px-4 py-1 rounded-full textarea-md leading-base hover:text-gray-100 hover:bg-purple-200 hover:shadow-tag`} {...props} ref={ref}>
				{children}
			</button>
		);
	}
);

TagButton.displayName = "TagButton";