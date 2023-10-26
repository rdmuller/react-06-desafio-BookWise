import { SideBar } from "@/components/SideBar";
import { ReactNode } from "react";

interface BooksLayout {
    children: ReactNode
}

export default function BooksLayout({children}:BooksLayout) {
	return (
		<div className="flex flex-row gap-20 pr-[6rem]">
			<SideBar />
			<main className="pt-[4.5rem] flex flex-row flex-1 relative">
				{children}
			</main>
		</div>
	);
}