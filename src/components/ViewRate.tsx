import { Star } from "@phosphor-icons/react/dist/ssr/Star";
import { StarHalf } from "@phosphor-icons/react/dist/ssr/StarHalf";

interface ViewRateProps {
    rate?: number
}

export function ViewRate({ rate }: ViewRateProps) {
	return (
		<div className="flex flex-row gap-2 text-purple-100">
			<span>{rate}</span>
			{Array.from(Array(5).keys()).map(i => {
				const numStar = i + 1;
				const weight = (Number(rate) >= numStar) ? "fill" : "regular";
				//<StarHalf size={16} weight="fill" />

				return (
					<>
					    <Star key={i} weight={weight} size={16} />
					</>
				);    
			})}
			
		</div>
	);
}