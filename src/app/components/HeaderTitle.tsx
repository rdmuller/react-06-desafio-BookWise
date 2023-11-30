import { ChartLineUp } from "@phosphor-icons/react/dist/ssr/ChartLineUp";
import { Binoculars } from "@phosphor-icons/react/dist/ssr/Binoculars";
import { User } from "@phosphor-icons/react/dist/ssr/User";

interface HeaderTitleProps {
    title: string,
    icon: "CharLineUp" | "Binoculars" | "User"
}
//, className: "text-green-100"
export function HeaderTitle({ icon, title }: HeaderTitleProps) {
	return (
		<header className="flex gap-3">
			{icon === "CharLineUp" && <ChartLineUp size={32} className="text-green-100" />}
			{icon === "Binoculars" && <Binoculars size={32} className="text-green-100" />}
			{icon === "User" && <User size={32} className="text-green-100" />}
			<span className="font-bold text-gray-100 text-2xl leading-short">{title}</span>
		</header>
	);
}