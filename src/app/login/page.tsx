import Image from "next/image";
import Link from "next/link";
import { SignInButton } from "../components/SignInButton";

export default function Home() {
	return (
		<div className="flex flex-row justify-start items-center gap-48">
			<aside className="flex relative h-screen w-[39.625rem]">
				<div className="rounded-xl absolute m-5 top-0 left-0 right-0 bottom-0 flex">
					<Image className="h-full w-full object-cover rounded-lg" src="/bg_login.svg" width={0} height={0} alt=""/>
				</div>
				<div className="absolute flex align-middle justify-center left-0 right-0 top-0 bottom-0">
					<Image src="/logo_full.svg" width={232} height={58} alt="" />
				</div>
			</aside>
			<main className="flex flex-col gap-10 pb-32">
				<div>
					<h1 className="text-gray-100 text-2xl font-bold leading-short">Boas vindas!</h1>
					<span className="leading-base text-gray-200 font-normal text-base">Faça seu login ou acesse como visitante.</span>
				</div>
				<menu className="flex flex-col gap-4">
					<SignInButton serviceToConnect="google">
						Entrar com Google
					</SignInButton>
					<SignInButton serviceToConnect="github">
						Entrar com GitHub
					</SignInButton>
					<Link href="/home" className="flex gap-5 text-lg font-bold text-gray-100 leading-base bg-gray-600 rounded-lg px-6 py-5 hover:bg-gray-500">
						<Image src="/guest-icon.svg" width={32} height={32} alt="" />
						Acessar como visitante
					</Link>
				</menu>
			</main>
		</div>
	);
}
