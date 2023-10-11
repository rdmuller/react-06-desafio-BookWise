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
			<body className={`${nunito.className} bg-gray-800`}>
				{children}
			</body>
		</html>
	);
}
