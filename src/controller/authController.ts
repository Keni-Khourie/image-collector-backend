import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../model/userModel";
import jwt from "jsonwebtoken";
import {config} from 'dotenv';

config();

const accessTokenSecret= process.env.ACCESS_TOKEN_SECRET
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET

export const createUser = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    res.json({
      error: "register form incomplete",
    });
  }

  const existingUser = await User.exists({ email });
  if (existingUser) {
    res.json({
      error: "user already exists",
    });
    return;
  }

  //code to hash password

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    res.json({
      success: "user created",
    });
  } catch (error) {
    res.json({
      error: "error creating user",
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.json({
      error: "login form incomplete",
    });
    return;
  }

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      res.json({
        error: "user does not exist",
      });
      return;
    }
    const match: boolean = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (match) {
      const accessToken = jwt.sign(
        {"userId":existingUser._id},
        accessTokenSecret!,
        {expiresIn:"15m"}
      )
      const refreshToken = jwt.sign(
        {"userId":existingUser._id},
        refreshTokenSecret!,
        {expiresIn:"7d"}
      )
      existingUser.refreshToken = refreshToken
      await existingUser.save()
      

      res.json({accessToken:accessToken})
      res.cookie('jwt', refreshToken, {httpOnly:true, maxAge:24* 60 * 60* 1000})
    } else{
      res.json({
        error:"incorrect password"
      })
      return
    }
  } catch (error) {
    res.json({
      error: "error logging in user.",
    });
    return
  }
};
