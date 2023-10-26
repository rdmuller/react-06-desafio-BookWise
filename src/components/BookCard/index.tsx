import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import Image from "next/image";
import { ViewRate } from "../ViewRate";
import { Comment } from "./components/Comment";

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
		<div className="flex flex-col gap-8 p-6 rounded-lg bg-gray-700 hover:shadow-card border-gray-500 relative">
			<div className="flex flex-row gap-4">
				<Image className="rounded-full border-emerald-300 border w-10 h-10" src={String(userAvatarUrl)} width={40} height={40} alt="" />
				<div className="flex flex-col">
					<span className="text-gray-100 text-base">{userName}</span>
					<span className="text-gray-400">{createdAtRelativeToNow}</span>
				</div>
			</div>
			<div className="flex flex-row gap-5">
				<Image className="w-[6.75rem] h-[9.5rem] rounded-s" src={bookCoverUrl} width={108} height={152} alt="" />
				<div className="flex flex-col gap-5">
					<div className="flex flex-col">
						<span className="leading-short font-bold text-base">{bookName}</span>
						<span className="text-gray-400">{author}</span>
					</div>
					<Comment comment={description} lenghtComment={230} />
				</div>
			</div>
			
			<div className="absolute right-6 top-6">
				<ViewRate rate={rate} />
			</div>	
		</div>
	);
}