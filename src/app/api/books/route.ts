import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET() {
	const books = await prisma.book.findMany({
		select: {
			name: true, 
			id: true, 
			author: true, 
			cover_url: true,
		},
		take: 999999,
		skip: 0
	});

	const booksId = books.map(book => book.id);

	const ratings = await prisma.rating.groupBy({
		by: ["book_id"],
		_count: {
			_all: true
		},
		_sum: {
			rate: true
		},
		where: {
			book_id: {
				in: booksId
			}
		}
	});

	const booksWithAvgRate = books.map(book => {
		const rate = ratings.find(bookRate => bookRate.book_id === book.id);
		const AvgRate = rate ? rate._sum.rate! / rate._count._all : 0;

		return {
			book_id: book.id, 
			name: book.name,
			cover_url: book.cover_url,
			author: book.author,
			avg_rate: AvgRate
		};
	});

	return NextResponse.json({ books: booksWithAvgRate }, { status: 200 });
}