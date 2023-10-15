import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Book Wise",
	description: "",
};

export default function RootLayout({ children, }: { children: React.ReactNode}) {
	return (
		<html lang="pt-BR">
			<body className={`${nunito.className} bg-black h-screen w-screen overflow-hidden`}>
				<div className="bg-gray-800 w-[90rem] mx-auto h-screen">
					{children}
				</div>
			</body>
		</html>
	);
}
