import { BookCard } from "@/components/Card";
import { api } from "../../../../../lib/axios";

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

export const revalidate = 60;

export default async function LastRatings() {
	const lastRatings: Rating[] = await api.get("/books/last-ratings", {
		params: {
			page_rows: 2
		}
	}).then(res => res.data.lastratings);

	return (
		<div className="flex flex-col gap-3 w-[38rem]">
			<span className="text-sm leading-base font-normal">Avaliações mais recentes</span>
			<div className="flex flex-col overflow-auto gap-3">
				{lastRatings.map((rating) => {
					return (
						<BookCard key={rating.id} author={rating.book.author} bookName={rating.book.name} description={rating.description} created_at={rating.created_at} rate={rating.rate} userName={rating.user.name} bookCoverUrl={rating.book.cover_url} userAvatarUrl={rating.user.avatar_url} />
					);
				})}
			</div>
		</div>
	);
}