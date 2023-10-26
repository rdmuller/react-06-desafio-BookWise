"use client";

import { useState } from "react";
import { TagButton } from "./TagButton";

interface Category {
	id: string,
	name: string
}

interface TagBarProps {
	categories: Category[];
}

export function TagBar({categories}:TagBarProps) {
	const [selectedTags, setSelectedTags] = useState<string[]>([]);

	return (
		<div className="flex flex-row flex-wrap gap-3 mt-10">
			<TagButton>Tudo</TagButton>

			{categories.map(category => {
				return (
					<TagButton key={category.id}>{category.name}</TagButton>
				);
			})}
		</div>
	);
}