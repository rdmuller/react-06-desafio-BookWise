import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import Image from "next/image";

interface BookCardProps {
	created_at?: string,
	rate?: number,
	userName?: string,
	userAvatarUrl?: string,
	bookName: string,
	bookCoverUrl: string,
	author: string,
	description: string
}

export function BookCard({author, bookName, description, created_at, bookCoverUrl, userAvatarUrl, rate, userName}: BookCardProps) {
	const createdAtRelativeToNow = formatDistanceToNow(new Date(created_at ? created_at : new Date()), {locale: ptBR, addSuffix: true});

	return (
		<div className="flex flex-col gap-8 p-6 rounded-lg bg-gray-700 hover:shadow-card border-gray-500">
			<div className="flex flex-row gap-4">
				<Image className="rounded-full border-emerald-300 border w-10 h-10" src={String(userAvatarUrl)} width={40} height={40} alt="" />
				<div className="flex flex-col">
					<span className="text-gray-100 text-base">{userName}</span>
					<span className="text-gray-400">{createdAtRelativeToNow}</span>
				</div>
			</div>
			<div className="flex flex-row gap-5">
				<Image src={bookCoverUrl} width={108} height={152} alt="" />
				<div className="flex flex-col gap-5">
					<div className="flex flex-col">
						<span className="leading-short font-bold text-base">{bookName}</span>
						<span className="text-gray-400">{author}</span>
					</div>
					<p>{description}</p>
				</div>
			</div>
			<div className="rating rating-sm gap-2 absolute right-6 top-6">
				<input type="radio" name="rating" className="mask mask-star-2" readOnly />
				<input type="radio" name="rating" className="mask mask-star-2" readOnly />
				<input type="radio" name="rating" className="mask mask-star-2" readOnly />
				<input type="radio" name="rating" className="mask mask-star-2" readOnly />
				<input type="radio" name="rating" className="mask mask-star-2" readOnly />
			</div>	
		</div>
	);
}