import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(req: NextRequest) {
	const pageRows = req.nextUrl.searchParams.get("page_rows") ? Number(req.nextUrl.searchParams.get("page_rows")) : 10;

	const lastratings = await prisma.rating.findMany({
		select: {
			id: true,
			created_at: true,
			rate: true,
			user: {
				select: {
					name: true,
					image: true
				}
			},
			book: {
				select: {
					name: true,
					author: true,
					cover_url: true
				}
			},
			description: true,
		},
		orderBy: {
			created_at: "desc"
		},
		take: pageRows
	});

	return NextResponse.json({lastratings}, { status: 200 });
}