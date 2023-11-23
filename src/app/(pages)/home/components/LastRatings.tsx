import { BookCardWithComment } from "@/components/BookCardWithComment";
import axios from "axios";

interface Rating {
	id: string,
	created_at: string,
	rate: number,
	user: {
		name: string,
		avatar_url: string
	},
	book: {
		name: string,
		author: string,
		cover_url: string,
	},
	description: string
}

export const revalidate = 300;

export default async function LastRatings() {
	const lastRatings: Rating[] = await axios.get("http://localhost:3000/api/books/last-ratings", {
		params: {
			page_rows: 5
		}
	}).then(res => res.data.lastratings);

	return (
		<div className="flex flex-col gap-3 w-[38rem] min-w-[38rem] relative">
			<span className="text-sm leading-base font-normal">Avaliações mais recentes</span>
			<div className="flex flex-col gap-3 absolute bottom-0 top-9 min-w-[38rem] overflow-y-auto p-[2px]">
				{lastRatings.map((rating) => {
					return (
						<BookCardWithComment key={rating.id} author={rating.book.author} bookName={rating.book.name} description={rating.description} created_at={rating.created_at} rate={rating.rate} userName={rating.user.name} bookCoverUrl={rating.book.cover_url} userAvatarUrl={rating.user.avatar_url} />
					);
				})}
			</div>
		</div>
	);
}