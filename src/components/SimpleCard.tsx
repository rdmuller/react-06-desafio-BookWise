import Image from "next/image";

interface BookSimpleCardProps {
	name: string,
    author: string, 
    coverUrl: string,
    avgRate: number
}

export function BookSimpleCard({author, name, avgRate, coverUrl}: BookSimpleCardProps) {
	return (
		<div className="flex flex-col gap-8 p-6 rounded-lg bg-gray-700 hover:shadow-card border-gray-500">
			<div className="flex flex-row gap-5">
				<Image src={coverUrl} width={108} height={152} alt="" />
				<div className="flex flex-col gap-5">
					<div className="flex flex-col">
						<span className="leading-short font-bold text-base">{name}</span>
						<span className="text-gray-400">{author}</span>
					</div>
				</div>
			</div>
		</div>
	);
}