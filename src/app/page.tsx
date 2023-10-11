/* eslint-disable react/react-in-jsx-scope */
import { Button } from "@/components/Button";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-row justify-between w-[90rem] max-w-screen-xl mx-auto pr-56">
			<aside>
				<Image src="/bg_login.svg" width={100} height={20} alt=""/>
				<Image src="/logo_full.svg" width={100} height={20} alt="" />
			</aside>
			<main className="flex flex-col">
				<div>
					<h1 className="text-gray-100 text-2xl">Boas vindas!</h1>
					<span>Faça seu login ou acesse como visitante.</span>
				</div>
				<menu className="flex flex-col gap-4">
					<Button icon="google">
						Entrar com Google
					</Button>
					<Button icon="github">
						Entrar com GitHub
					</Button>
					<Button icon="guest">
						Acessar como visitante
					</Button>
				</menu>
			</main>
		</div>
	);
}
