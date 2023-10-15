import { Icon } from "@phosphor-icons/react";
import * as PhosphorIcons  from "@phosphor-icons/react";

interface HeaderTitleProps {
    title: string,
    iconName: keyof typeof PhosphorIcons 
}
//, className: "text-green-100"
export function HeaderTitle({ iconName, title }: HeaderTitleProps) {
	return (
		<header className="flex gap-3">

			<span className="font-bold text-gray-100 text-2xl leading-short">{title}</span>
		</header>
	);
}