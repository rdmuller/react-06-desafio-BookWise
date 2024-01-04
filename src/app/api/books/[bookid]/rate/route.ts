import prisma from "@/lib/prisma";
import { getUserIdFromEmail } from "@/lib/user";
import { getServerSession } from "next-auth";

interface BookProps {
    params: {
        bookid: string
    }
}

export async function POST(req: Request, { params }:BookProps) {
	//await authenticateMiddleware(req, res, () => {});
	const session = await getServerSession();

	if (!session?.user.email) {
		return Response.json({}, { status: 401 });
	}

	const userId = await getUserIdFromEmail(session.user.email);
	if (!userId) {
		return Response.json({}, { status: 401 });
	}

	const bookId = params.bookid ?? "";
	const { rate, description } = await req.json();
	
	if (!rate || rate === 0) {
		return Response.json({ display_message: "Nota não informada"}, { status: 403 });
	}

	const book = await prisma.book.findUnique({ select: {id: true }, where: { id: bookId }});
	if (!book) {
		return Response.json({ display_message: "Livro não cadastrado" }, { status: 403 });
	}
	await prisma.rating.create({
		data: {
			description: description,
			rate: rate,
			book_id: bookId,
			user_id: userId
		}
	});

	return Response.json({}, { status: 201 });
}

export async function GET(req: Request, { params }: BookProps) {
	//await authenticateMiddleware(req, res, () => {});
	const session = await getServerSession();

	if (!session) {
		return Response.json({}, { status: 401 });
	}

	const bookId = params.bookid ?? "";
	const rating = await prisma.rating.findFirst({
		select: { description: true, rate: true },
		where: {
			user: {
				email: session.user.email
			}, 
			book_id: bookId
		}
	});

	if (!rating) {
		return Response.json({ message: "not found" }, { status: 204 });
	}

	return Response.json({ description: rating?.description, rate: rating?.rate }, {status: 200});
}