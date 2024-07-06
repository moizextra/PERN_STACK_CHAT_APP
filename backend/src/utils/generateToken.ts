import jwt from "jsonwebtoken";
import { Response } from "express";

const generateToken = (userId: string, res: Response) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
		expiresIn: "15d",
	});


	res.cookie("jwt", token, 
		{
			domain: "localhost",       // Domain where the cookie is accessible
			path: "/api",          // Path within the domain where the cookie is accessible
			httpOnly: true,           // Limit the cookie to be accessible only through HTTP
	}

);

	return token;
};

export default generateToken;