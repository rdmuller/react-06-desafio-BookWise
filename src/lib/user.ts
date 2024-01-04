import prisma from "@/lib/prisma";

export async function getUserIdFromEmail(email: string) {
	const user = await prisma.user.findUnique({ select: { id: true }, where: { email: email } });

	return user?.id ?? "";
}