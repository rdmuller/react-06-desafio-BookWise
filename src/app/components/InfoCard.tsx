import { BookmarkSimple } from "@phosphor-icons/react/dist/ssr/BookmarkSimple";
import { BookOpen } from "@phosphor-icons/react/dist/ssr/BookOpen";

interface InfoCardProps {
    title: string,
    description?: string,
    icon: "book-open" | "bookmark"
}

export function InfoCard({ description, icon, title }:InfoCardProps) {
	return (
		<div className="flex flex-row gap-4 flex-1 items-center">
			{(icon === "book-open") && <BookOpen className="text-green-100" size={24} />}
			{(icon === "bookmark") && <BookmarkSimple className="text-green-100" size={24} />}

			<div className="flex flex-col">
				<span className="text-gray-300 text-sm leading-base">{title}</span>
				<span className="text-gray-200 font-bold text-base leading-short">{description}</span>
			</div>
		</div>
	);
}