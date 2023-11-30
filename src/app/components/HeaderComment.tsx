import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Avatar } from "./Avatar";
import { ViewRate } from "./ViewRate";

interface HeaderCommentProps {
    userAvatarUrl?: string,
    userName?: string,
    rate?: number,
	createdAt?: string,
}

export function HeaderComment({userAvatarUrl, rate, userName, createdAt}:HeaderCommentProps) {
	const createdAtRelativeToNow = formatDistanceToNow(new Date(createdAt ? createdAt : new Date()), {locale: ptBR, addSuffix: true});

	return (
		<div className="flex flex-row justify-between">
			<div className="flex flex-row gap-4">
				<Avatar src={String(userAvatarUrl)} />
				<div className="flex flex-col">
					<span className="text-gray-100 text-base">{userName}</span>
					<span className="text-gray-400">{createdAtRelativeToNow}</span>
				</div>
			</div>
			<ViewRate rate={rate} />
		</div>
	);
}