import Image from "next/image";
import Link from "next/link";
import { SignIn } from "@phosphor-icons/react/dist/ssr/SignIn";
import { ButtonLink } from "./components/ButtonLink";
import { getServerSession } from "next-auth";
import { Avatar } from "../Avatar";
import { SignOutButton } from "../SignOutButton";

export async function SideBar() {
	const session = await getServerSession();
	const classButtonSignInOut = "flex font-bold text-gray-200 gap-3 px-2 py-1 items-center align-middle rounded hover:bg-slate-200 hover:bg-opacity-10";

	return (
		<aside className="h-screen flex relative max-h-[61.75rem]">
			<div className="rounded-xl absolute m-5 top-0 left-0 right-0 bottom-0 flex w-[14.5rem]">
				<Image className="h-full w-full object-cover rounded-lg" src="/bg_menu.svg" width={0} height={0} alt="" />
			</div>
			
			<div className="m-5 flex flex-col relative justify-between items-center w-[14.5rem]">
				<div className="flex mt-10 flex-col gap-16">
					<Image src="/logo_full.svg" width={128} height={48} alt="" />

					<div className="flex flex-col gap-4">
						<ButtonLink title="Início" url="/home" />
						<ButtonLink title="Explorar" url="/explore" />
						<ButtonLink title="Perfil" url="/profile" />
					</div>
				</div>

				<div className="flex flex-row gap-3 mb-5 items-center justify-center">
					{session?.user?.image ? (
						<>
							<Avatar src={session?.user?.image} />
							<SignOutButton className={classButtonSignInOut} />
						</>
					) : (
						<Link href="/" className={classButtonSignInOut}>
							Fazer login
							<SignIn size={20} />
						</Link>

					) }
				</div>

			</div>
		</aside>
	);
}