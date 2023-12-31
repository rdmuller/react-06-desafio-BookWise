import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;
	const searchText = String(searchParams.get("searchText"));
	const tagsConcatenated = searchParams.get("tags"); //String(searchParams.get("tags"));

	const tagsQuery = (tagsConcatenated?.toLowerCase() !== "all" && tagsConcatenated !== "") ? { 
		categories: {
			some: {
				categoryId: {
					in: tagsConcatenated?.split(",")
				}
			}
		}
	} : {};

	const searchTextQuery = [
		{ author: { contains: searchText } },
		{ name: { contains: searchText } },
	];

	const books = await prisma.book.findMany({
		select: {
			name: true, 
			id: true, 
			author: true, 
			cover_url: true,
		},
		where: {
			OR: searchTextQuery, 
			AND: tagsQuery
		},
		orderBy: {
			name: "asc"
		}
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