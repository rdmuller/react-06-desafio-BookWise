import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const pageRows = searchParams.get("page_rows") ? Number(searchParams.get("page_rows")) : 5;

	const mostPopularBooks = await prisma.$queryRaw`
        SELECT pop.book_id, b.name, b.author, b.cover_url, avg_rate
        FROM (SELECT book_id, COUNT(*) AS quantity, AVG(rate) AS avg_rate FROM ratings GROUP BY book_id) pop
          INNER JOIN books b ON (b.id = pop.book_id)
        ORDER BY quantity DESC
        LIMIT ${pageRows}
    `;

	return NextResponse.json({ most_popular_books: mostPopularBooks }, { status: 200 });
}