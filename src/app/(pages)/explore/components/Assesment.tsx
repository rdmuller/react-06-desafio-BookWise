import { HeaderComment } from "@/app/components/HeaderComment";
import { X } from "@phosphor-icons/react/dist/ssr/X";
import { Check } from "@phosphor-icons/react/dist/ssr/Check";
import { useSession } from "next-auth/react";
import { useEffect, useRef } from "react";

interface AssesmentProps {
	onCloseAssesment: () => void
}

export function Assesment({onCloseAssesment}:AssesmentProps) {
	const { data: session } = useSession();
	const assesmentTextRef = useRef(null);

	useEffect(() => {
		assesmentTextRef.current?.focus();
	}, []);

	function handleCloseAssesment() {
		onCloseAssesment();
	}
    
	return (
		<div className="base-card">
			<HeaderComment userName={String(session?.user?.name)} userAvatarUrl={String(session?.user?.image)} userNameBold />

			<form className="flex flex-col gap-3">

				<textarea 
					className="text-gray-400 text-sm font-normal leading-base bg-gray-800 py-[0.875rem] px-5 h-40 rounded resize-none border-solid border border-gray-500 focus:outline-0" 
					placeholder="Escreva sua avaliação" 
					ref={assesmentTextRef}
				/>

				<div className="flex flex-row justify-end gap-2">

					<button type="button" onClick={handleCloseAssesment} className="text-purple-100 btn">
						<X size={24} />
					</button>

					<button type="submit" className="text-green-100 btn">
						<Check size={24} />
					</button>
				</div>
			</form>
		</div>
	);
}

//<Avatar src={String(session?.user?.image)} />
//<span>{session?.user?.email}</span>
