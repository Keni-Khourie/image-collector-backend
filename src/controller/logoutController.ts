import { Request, Response } from "express";
import User from "../model/userModel";
import jwt, { JwtPayload, VerifyErrors } from "jsonwebtoken";
import { config } from "dotenv";
config();

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

export const handleLogout = async (req: Request, res: Response) => {
  const cookies = req.cookies;
  //get JWT from cookie
  if (!cookies?.jwt) {return res.sendStatus(204);}
  console.log(cookies.jwt);

  const refreshToken = cookies.jwt;
    //get user using unique refresh token property
  try {
    const existingUser = await User.findOne({ refreshToken });
    if (!existingUser) {
        res.clearCookie('jwt', {httpOnly:true, maxAge:24* 60 * 60* 1000})
        return res.sendStatus(204)
    }

    //Delete refresh token
    await User.updateOne(
        { _id:existingUser._id},
        {refreshToken:""}
    )
    
  } catch (error) {
   return res.json({error: "error logging out user."});
  }
};

export default handleLogout





