import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const pageRows = searchParams.get("page_rows") ? Number(searchParams.get("page_rows")) : 10;

	const lastratings = await prisma.rating.findMany({
		select: {
			created_at: true,
			rate: true,
			user: {
				select: {
					name: true
				}
			},
			book: {
				select: {
					name: true,
					author: true,
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