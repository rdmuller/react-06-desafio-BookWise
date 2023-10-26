"use client";

import { ComponentProps, ElementRef, forwardRef, useState } from "react";

export type TagButtonProps = ComponentProps<"button">

export const TagButton = forwardRef<ElementRef<"button">, TagButtonProps>(
	({ children, ...props }: TagButtonProps) => {
		const [selected, setSelected] = useState(false);

		function handleSelect() {
			setSelected(!selected);
		}

		return (
			<button onClick={handleSelect} className={`${selected ? "bg-purple-200 text-gray-100" : "shadow-tag text-purple-100"} px-4 py-1 rounded-full textarea-md leading-base hover:text-gray-100 hover:bg-purple-200 hover:shadow-tag`} {...props}>
				{children}
			</button>
		);
	}
);

TagButton.displayName = "TagButton";