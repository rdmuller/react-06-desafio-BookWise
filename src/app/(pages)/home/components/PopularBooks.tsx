import { BookSimpleCard } from "../../../components/SimpleCard";
import axios from "axios";

interface Book {
	name: string,
    book_id: string,
    author: string, 
    cover_url: string,
    avg_rate: number
}

export const revalidate = 300;

export default async function PopularBooks() {
	const popularBooks: Book[] = await axios.get("http://localhost:3000/api/books/most-popular", {
		params: {
			page_rows: 3
		}
	}).then(res => res.data.most_popular_books);

	return (
		<div className="flex flex-col gap-3 w-[20rem] min-w-[20rem] relative">
			<span className="text-sm leading-base font-normal">Livros populares</span>
			<div className="flex flex-col gap-3 bottom-0 top-9">
				{popularBooks.map(book => {
					return (
						<BookSimpleCard 
							key={book.book_id} 
							id={book.book_id} 
							author={book.author} 
							avgRate={book.avg_rate} 
							coverUrl={book.cover_url} 
							name={book.name} 
						/>
					);
				})}
			</div>
		</div>
	);
}