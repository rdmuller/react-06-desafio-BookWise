import Image from "next/image";
import { Comment } from "./components/Comment";
import { HeaderComment } from "../HeaderComment";

interface BookCardWithCommentProps {
	created_at?: string,
	rate?: number,
	userName?: string,
	userAvatarUrl?: string,
	bookName: string,
	bookCoverUrl: string,
	author: string,
	description: string
}

export function BookCardWithComment({author, bookName, description, created_at, bookCoverUrl, userAvatarUrl, rate, userName}: BookCardWithCommentProps) {

	return (
		<div className="flex flex-col gap-8 p-6 rounded-lg bg-gray-700 hover:shadow-card border-gray-500 relative">
			<HeaderComment rate={rate} userAvatarUrl={userAvatarUrl} userName={userName} createdAt={created_at} />
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
		</div>
	);
}