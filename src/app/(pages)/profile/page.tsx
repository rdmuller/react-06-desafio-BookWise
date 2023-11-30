import { HeaderTitle } from "../../components/HeaderTitle";
import { getServerSession } from "next-auth";

export default async function Profile() {
	const session = await getServerSession();

	return (
		<div className="flex flex-col gap-10">
			<HeaderTitle icon="User" title="Perfil" />
			{session?.user?.email ? `E-mail do usuário logado é ${session.user.email}` : "Não foi encontrada sessão" }
		</div>
	);
}