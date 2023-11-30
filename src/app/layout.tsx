import "./globals.css";
import SessionProvider from "./providers/NextAuthProvider";
import { getServerSession } from "next-auth";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Book Wise",
	description: "",
};

export default async function RootLayout({ children, }: { children: React.ReactNode}) {
	const session = await getServerSession();

	return (
		<html lang="pt-BR">
			<body className={`${nunito.className} bg-black h-screen w-screen overflow-hidden`}>
				<SessionProvider session={session}>
					<div className="bg-gray-800 w-[90rem] mx-auto h-screen">
						{children}
					</div>
				</SessionProvider>
			</body>
		</html>
	);
}
