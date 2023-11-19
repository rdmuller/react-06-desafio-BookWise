import { Star } from "@phosphor-icons/react/dist/ssr/Star";
import { StarHalf } from "@phosphor-icons/react/dist/ssr/StarHalf";

interface ViewRateProps {
    rate?: number
}

export function ViewRate({ rate }: ViewRateProps) {
	return (
		<div className="flex flex-row gap-1 text-purple-100">
			{Array.from(Array(5).keys()).map(i => {
				const numStar = i + 1;
				const weight = (Number(rate) >= numStar) ? "fill" : "regular";
				const isHalfStar = (Number(rate) < numStar && Number(rate) >= (numStar-0.5));

				return (
					<div key={i}>
						{!isHalfStar && <Star weight={weight} size={16} />}
						{isHalfStar && <StarHalf size={16} weight="fill" />}
					</div>
				);    
			})}
			
		</div>
	);
}