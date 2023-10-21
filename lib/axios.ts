import axios from "axios";

export const api = axios.create({
	baseURL: `${process.env.NEXT_URL}/api`
	//baseURL: "http://localhost:3000/api"
});