import { SideBar } from "@/components/SideBar";
import { ReactNode } from "react";

interface BooksLayout {
    children: ReactNode
}

export default function BooksLayout({children}:BooksLayout) {
	return (
		<div className="flex flex-row gap-20">
			<SideBar />
			<main className="pt-[4.5rem] flex flex-row flex-1">
				{children}
			</main>
		</div>
	);
}