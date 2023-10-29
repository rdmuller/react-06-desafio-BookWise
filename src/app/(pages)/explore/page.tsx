import { HeaderTitle } from "@/components/HeaderTitle";
import { BookList } from "./components/BookList";

interface Category {
	id: string,
	name: string
}

export default async function Explore() {
	const categories: Category[] = await fetch(`${process.env.NEXT_URL}/api/categories`, 
		{ cache: "force-cache" }
	)
		.then(res => res.json())
		.then(data => data.categories);
		
	return (
		<div className="flex flex-col relative">
			<HeaderTitle icon="Binoculars" title="Explorar" />
			<BookList categories={categories} />
		</div>
	);
}