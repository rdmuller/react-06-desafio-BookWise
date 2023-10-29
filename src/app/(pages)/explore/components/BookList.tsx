"use client";

import { SearchForm } from "@/components/SearchForm";
import { TagBar } from "@/components/TagBar";
import { useState } from "react";

interface Category {
	id: string,
	name: string
}

interface BookListProps {
	categories: Category[]
}

export function BookList({ categories }: BookListProps) {
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
		
	return (
		<div className="flex flex-col">
			<SearchForm className="flex absolute top-0 right-0 w-[27rem]" />

			<TagBar categories={categories} selectedTags={selectedTags} onSetSelectedTags={setSelectedTags} />

			<div>
				{selectedTags}
			</div>
		</div>
	);
}