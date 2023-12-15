import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

interface BookProps {
	params: {
		bookid: string
	}
}

export async function GET(req: Request, { params }: BookProps) {
	const bookId = params.bookid;
	const book = await prisma.book.findUniqueOrThrow({
		select: {
			name: true, 
			author: true,
			total_pages: true,
			cover_url: true,
			ratings: {
				select: {
					id: true,
					user: {
						select: {
							name: true,
							avatar_url: true
						}
					},
					created_at: true,
					rate: true,
					description: true,
				},
				orderBy: {
					created_at: "desc"
				}
			},
			categories: {
				select: {
					category: {
						select: {
							name: true,
						}
					}
				}
			},
		}, 
		where: {
			id: bookId
		},
	});

	const rateCount = book.ratings.length;
	const rateSum = book.ratings.reduce((accumulator, rate) => accumulator + rate.rate, 0);
	const rateAvg = (rateCount) > 0 ? rateSum / rateCount : 0;

	return NextResponse.json({ 
		name: book.name ,
		author: book.author,
		cover_url: book.cover_url,
		rate_count: rateCount,
		rate_avg: rateAvg,
		total_pages: book.total_pages,
		categories: book.categories.map(category => {
			return category.category.name;
		}),
		ratings: book.ratings.map(rating => {
			return ({
				id: rating.id,
				user_name: rating.user.name,
				user_avatar_url: rating.user.avatar_url,
				rate: rating.rate,
				created_at: rating.created_at,
				description: rating.description
			});
		}),
	}, { status: 200 });
}