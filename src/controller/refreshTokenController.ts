import { Request, Response } from "express";
import User from "../model/userModel";
import jwt, { JwtPayload, VerifyErrors } from "jsonwebtoken";
import { config } from "dotenv";
config();

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

export const handleRefreshToken = async (req: Request, res: Response) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) {return res.sendStatus(401);}
  console.log(cookies.jwt);

  const refreshToken = cookies.jwt;

  try {
    const existingUser = await User.findOne({ refreshToken });
    if (!existingUser) {return res.sendStatus(403);}
    jwt.verify(refreshToken,refreshTokenSecret!,
      (error: VerifyErrors | null, decodedToken: JwtPayload | string | undefined) => {
         const tokenObject = decodedToken as JwtPayload 
        if (error || existingUser._id !== tokenObject!["userId"]) {return res.sendStatus(403);}
        const accessToken = jwt.sign({ userId: existingUser._id }, accessTokenSecret!,{ expiresIn: "15m" });
        res.json({accessToken:accessToken})
      });
  } catch (error) {
   return res.json({error: "error logging in user."});
  }
};

export default handleRefreshToken




