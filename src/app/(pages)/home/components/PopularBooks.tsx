import axios from "axios";

interface Book {
    book_id: string,
    author: string, 
    cover_url: string,
    avg_rate: number
}

export const revalidate = 60;

export default async function PopularBooks() {
	const popularBooks: Book[] = await axios.get("/books/most-popular", {
		params: {
			page_rows: 3,
		}
	}).then(res => res.data.most_popular_books);

	return (
		<div className="flex flex-col gap-3 w-[38rem] flex-1 relative">
			<span className="text-sm leading-base font-normal">Livros populares</span>
			<div className="flex flex-col gap-3 flex-1 absolute bottom-0 top-9">
				<p>{JSON.stringify(popularBooks)}</p>
			</div>
		</div>
	);
}