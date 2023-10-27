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

	function handleSelectTag(id: string) {
		setSelectedTags(props => [...props, id]);
	}

	function handleUnSelectTag(id: string) {
		const newSelectedTags = selectedTags.filter(tag => tag !== id);
		setSelectedTags(newSelectedTags);
	}

	console.log(JSON.stringify(selectedTags));

	return (
		<div className="flex flex-row flex-wrap gap-3 mt-10">
			<TagButton id="all" onSelectTag={handleSelectTag} onUnSelectTag={handleUnSelectTag}>Tudo</TagButton>

			{categories.map(category => {
				return (
					<TagButton id={category.id} onSelectTag={handleSelectTag} onUnSelectTag={handleUnSelectTag} key={category.id}>{category.name}</TagButton>
				);
			})}
		</div>
	);
}