"use client";

import { Star } from "@phosphor-icons/react/dist/ssr/Star";
import { useState } from "react";

interface RatingProps {
	onChangeRate: (rate: number) => void
}

export function Rating({ onChangeRate }: RatingProps) {
	const [rate, setRate] = useState(0);

	function handleChangeRate(newRate: number) {
		setRate(newRate);
		onChangeRate(newRate);
	}

	return (
		<div className="flex flex-row gap-1 text-purple-100">
			{Array.from(Array(5).keys()).map(i => {
				const starNumber = i + 1;
				const weight = (Number(rate) >= starNumber) ? "fill" : "regular";

				return (
					<div key={i}>
						<Star className="cursor-pointer" weight={weight} size={16} onClick={ () => handleChangeRate(starNumber) } />
					</div>
				);    
			})}
			
		</div>
	);
}