import { NextApiResponse } from "next";
import { getServerSession } from "next-auth";

export default async function authenticateMiddleware(req:Request, res: NextApiResponse, next: () => void) {
	try {
		const session = await getServerSession();

		if (!session) {
			
			res.status(401);
			return res.end(); //Response.json({Error: "not authorized"}, {status: 401});
		}

		return next();
	} catch (error) {
		console.error("Error in authentication middleare: ", error);
		return Response.json({error: "Internal server error"}, { status: 500 });
	}
}