import { Popover } from "../../../components/Popover";
import { ViewRate } from "../../../components/ViewRate";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HeaderComment } from "../../../components/HeaderComment";
import { InfoCard } from "../../../components/InfoCard";

interface BookDetailsProps {
	bookId: string,
	onCloseDetails: () => void;
}

interface Rating {
	id: string,
	user_name: string,
	user_avatar_url: string,
	rate: number,
	created_at: string,
	description: string,
}

interface Book {
	name: string,
	cover_url: string,
	author: string,
	rate_avg: number,
	rate_count: number,
	total_pages: number,
	categories: string[],
	ratings: Rating[],
}

export function BookDetails({ bookId, onCloseDetails }:BookDetailsProps) {
	const [book, setBook] = useState<Book>();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const bookDetails = await axios.get(`api/books/${bookId}`)
					.then(res => res.data);

				setBook(bookDetails);

			} catch(error) {
				console.error("Erro buscando detalhes ", error);
			}
		};
		fetchData();
	}, [bookId]);
	
	return (
		<Popover onClosePopover={onCloseDetails}>
			<div className="flex flex-col px-8 pt-6 pb-4 bg-gray-700 rounded-xl gap-10">
				<div className="flex flex-row gap-8">
					<Image className="rounded-lg w-44 h-60" src={book?.cover_url ?? ""} width={176} height={240} alt="" />
					<div className="flex flex-col justify-between gap-2">
						<div className="flex flex-col">
							<span className="font-bold text-gray-100 line-clamp-2 text-lg leading-short">{book?.name}</span>
							<span className="text-gray-300 text-base leading-base">{book?.author}</span>
						</div>
						<div className="flex flex-col">
							<ViewRate rate={book?.rate_avg} />
							<span className="text-gray-400 text-sm leading-base">{book?.rate_count} {(book?.rate_count !== 1) ? "avaliações" : "avaliação"}</span>
						</div>
					</div>
				</div>
				<div className="flex flex-row gap-14 py-6 border-t border-gray-600">
					<div className="flex flex-row gap-4 flex-1 items-center">
						<InfoCard icon="bookmark" title="Categoria" description={book?.categories.join(", ")} />
					</div>
					<div className="flex flex-row gap-4 flex-1 items-center">
						<InfoCard icon="book-open" title="Páginas" description={String(book?.total_pages)} />
					</div>
				</div>
			</div>
			<div className="flex flex-row justify-between mt-10 mb-4">
				<span>Avaliações</span>
				<button className="text-purple-100 font-bold text-base leading-base px-2 py-1 rounded hover:bg-gray-600">Avaliar</button>
			</div>
			<div className="flex flex-col gap-3">
				{book?.ratings.map(rating => {
					return (
						<div className="flex flex-col gap-6 p-6 bg-gray-700 rounded-lg" key={rating.id}>
							<HeaderComment userName={rating.user_name} userAvatarUrl={rating.user_avatar_url} rate={rating.rate} createdAt={rating.created_at} />
							<p className="text-gray-300 leading-base text-sm">{rating.description}</p>
						</div>		
					);
				})}
			</div>
		</Popover>
	);
}