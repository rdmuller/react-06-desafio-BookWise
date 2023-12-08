import { HeaderComment } from "@/app/components/HeaderComment";
import { X } from "@phosphor-icons/react/dist/ssr/X";
import { Check } from "@phosphor-icons/react/dist/ssr/Check";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { Rating } from "@/app/components/Rating";

interface AssesmentProps {
	onCloseAssesment: () => void
}

export function Assesment({onCloseAssesment}:AssesmentProps) {
	const { data: session } = useSession();
	const [rate, setRate] = useState(0);
	const assesmentTextRef = useRef<HTMLTextAreaElement | null>(null);

	useEffect(() => {
		assesmentTextRef.current!.focus()!;
	}, []);

	function handleCloseAssesment() {
		onCloseAssesment();
	}

	function handleChangeRate(newRate: number) {
		setRate(newRate);
	}
    
	return (
		<div className="base-card">
			<div className="flex flex-row justify-between items-center">
				<HeaderComment userName={String(session?.user?.name)} userAvatarUrl={String(session?.user?.image)} userNameBold />
				<Rating onChangeRate={handleChangeRate} />
			</div>
			<form className="flex flex-col gap-3">
				<textarea 
					className="text-gray-400 text-sm font-normal leading-base bg-gray-800 py-[0.875rem] px-5 h-40 rounded resize-none border-solid border border-gray-500 focus:outline-0" 
					placeholder="Escreva sua avaliação" 
					maxLength={500}
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