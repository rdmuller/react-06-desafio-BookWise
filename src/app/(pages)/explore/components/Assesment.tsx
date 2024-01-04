import { HeaderComment } from "@/app/components/HeaderComment";
import { X } from "@phosphor-icons/react/dist/ssr/X";
import { Check } from "@phosphor-icons/react/dist/ssr/Check";
import { useSession } from "next-auth/react";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { Rating } from "@/app/components/Rating";
import { api } from "@/lib/axios";
import axios, { AxiosError } from "axios";

type AssesmentProps = {
	bookId: string,
	onCloseAssesment: () => void
}

type PreviousAssesmet = {
	description: string,
	rate:number
}

export const Assesment: React.FC<AssesmentProps> = ({ bookId, onCloseAssesment }:AssesmentProps) => {
	const { data: session } = useSession();
	const [rate, setRate] = useState<number>(0);
	const [assesmentText, setAssesmentText] = useState<string>("");
	const assesmentTextRef = useRef<HTMLTextAreaElement | null>(null);

	useEffect(() => {
		assesmentTextRef.current!.focus()!;

		const fetchPreviousAssesment = async () => {
			try {
				const previousAssesment: PreviousAssesmet = await axios.get(`api/books/${bookId}/rate`)
					.then(res => res.data);
				
				if (previousAssesment) {
					setRate(previousAssesment.rate);
					setAssesmentText(previousAssesment.description);
				}
			} catch (error) {
				console.error(`Erro buscando avaliação anterior ${error}`);
			}
		};

		fetchPreviousAssesment();
	}, [bookId]);

	function handleCloseAssesment() {
		onCloseAssesment();
	}

	function handleChangeRate(newRate: number) {
		setRate(newRate);
	}

	async function handleSubmit(event: FormEvent) {
		event.preventDefault();

		const res = await api.post(`/books/${bookId}/rate`, {
			rate, 
			description: assesmentText
		})
			.then(res => { return ( { status: res.status, display_message: res.data }); })
			.catch((e: AxiosError) => { return ({ status: e.response?.status, display_message: e.response?.data }); });

		console.log(`fez o submit rate(${rate}) description(${assesmentText}) retorno: ${JSON.stringify(res)} `);
		handleCloseAssesment();
	}
    
	return (
		<div className="base-card">
			<div className="flex flex-row justify-between items-center">
				<HeaderComment userName={session?.user?.name ?? ""} userAvatarUrl={session?.user?.image ?? ""} userNameBold />
				<Rating previousRate={rate} onChangeRate={handleChangeRate} />
			</div>
			<form className="flex flex-col gap-3" onSubmit={handleSubmit}>
				<textarea 
					className="text-gray-400 text-sm font-normal leading-base bg-gray-800 py-[0.875rem] px-5 h-40 rounded resize-none border-solid border border-gray-500 focus:outline-0" 
					placeholder="Escreva sua avaliação" 
					maxLength={500}
					ref={assesmentTextRef}
					value={assesmentText}
					onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setAssesmentText(event.target.value) }
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
};