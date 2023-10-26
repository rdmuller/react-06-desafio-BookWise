"use client";

import { useState } from "react";

interface CommentProps {
    comment: string,
    lenghtComment: number,
}

export function Comment({comment, lenghtComment}:CommentProps) {
	const IsMoreThanLenght = (comment.length > lenghtComment);
	const [viewMore, setViewMore] = useState(false);

	function handleViewMore() {
		setViewMore(true);
	}

	if (IsMoreThanLenght && !viewMore) {
		return (
			<p>
				{comment.substring(0, lenghtComment)}...
				<span onClick={handleViewMore} className="text-purple-100 font-bold text-sm cursor-pointer">ver mais</span>
			</p>
		);
	}

	return (
		<p>{comment}</p>
	);
}