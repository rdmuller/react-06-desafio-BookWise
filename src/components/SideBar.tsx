import Image from "next/image";
import Link from "next/link";
import { ChartLineUp } from "@phosphor-icons/react/dist/ssr/ChartLineUp";
import { SignIn } from "@phosphor-icons/react/dist/ssr/SignIn";
import { Binoculars } from "@phosphor-icons/react/dist/ssr/Binoculars";

export function SideBar() {
	return (
		<aside className="h-screen flex relative">
			<div className="rounded-xl absolute m-5 top-0 left-0 right-0 bottom-0 flex w-[14.5rem]">
				<Image className="h-full w-full object-cover rounded-lg" src="/bg_menu.svg" width={0} height={0} alt="" />
			</div>
			
			<div className="m-5 flex flex-col relative justify-between items-center w-[14.5rem]">
				<div className="flex mt-10 flex-col gap-16">
					<Image src="/logo_full.svg" width={128} height={48} alt="" />
					<div className="flex flex-col gap-4">
						<Link href="/" className="text-gray-400 hover:text-gray-100 flex gap-3 m-2">
							<ChartLineUp size={24} />
							Inicio
						</Link>
						<Link href="/" className="text-gray-400 hover:text-gray-100 flex gap-3 m-2">
							<Binoculars size={24} />
							Explorar
						</Link>
					</div>
				</div>

				<Link href="/" className="flex font-bold text-gray-200 gap-3 align-middle mb-5">
                    Fazer login
					<SignIn size={20} />
				</Link>

			</div>
		</aside>
	);
}