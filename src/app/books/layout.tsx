import { SideBar } from "@/components/SideBar";
import { ReactNode } from "react";

interface BooksLayout {
    children: ReactNode
}

export default function BooksLayout({children}:BooksLayout) {
	return (
		<div className="flex flex-row gap-24">
			<SideBar />
			<main className="pt-[4.5rem]">
				{children}
			</main>
		</div>
	);
}