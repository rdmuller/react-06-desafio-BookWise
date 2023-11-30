import Image from "next/image";
import { ViewRate } from "./ViewRate";

interface BookSimpleCardProps {
	id: string,
	name: string,
    author: string, 
    coverUrl: string,
    avgRate: number,
	onClickCard?: (bookId: string) => void;
}

export function BookSimpleCard({id, author, name, avgRate, coverUrl, onClickCard}: BookSimpleCardProps) {
	function Card() {
		return (
			<div className="flex flex-row gap-5">
				<Image className="rounded-s w-[4rem] h-[5.875rem]" src={coverUrl} width={64} height={94} alt="" />
				<div className="flex flex-col gap-5 justify-between">
					<div className="flex flex-col">
						<span className="leading-short font-bold text-base line-clamp-2">{name}</span>
						<span className="text-gray-400">{author}</span>
					</div>
					<ViewRate key={id} rate={avgRate} />
				</div>
			</div>
		);
	}

	if (onClickCard) {
		return (
			<div className="cursor-pointer flex flex-col flex-1 gap-8 p-6 rounded-lg bg-gray-700 hover:shadow-card border-gray-500" onClick={() => onClickCard(id)}>
				<Card />
			</div>
		);
	}

	return (
		<div className="flex flex-col flex-1 gap-8 p-6 rounded-lg bg-gray-700 hover:shadow-card border-gray-500">
			<Card />
		</div>
	);
}