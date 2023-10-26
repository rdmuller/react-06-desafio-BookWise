import { HeaderTitle } from "@/components/HeaderTitle";
import { TagBar } from "@/components/TagBar";

export default async function Explore() {
	const categories = await  fetch(`${process.env.NEXT_URL}/api/categories`, 
		{ cache: "force-cache" }
	)
		.then(res => res.json())
		.then(data => data.categories);

	return (
		<div >
			<HeaderTitle icon="Binoculars" title="Explorar" />
			<TagBar categories={categories} />
		</div>
	);
}