import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../model/userModel";

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
      res.json({
        success: "User logged in",
      });
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

export const getUserDetails = async (req: Request, res: Response) => {};

export const updateUserDetails = async (req: Request, res: Response) => {

};

export const deleteUser = async (req: Request, res: Response) => {
  const userId:string = req.params.userId;
  if(!userId){
    res.json({
      error: "no user id selected",
    })
    return
  }
  const existingUser = await User.findById(userId);
  if(!existingUser){
    res.json({
      error: "user does not exist",
    })
    return
  }

  try {
    await existingUser.deleteOne();
    res.json({
      success: "user has been deleted"
    })
  } catch (error) {
    console.log(error);
    res.json({
      error: "error deleting user",
    })
    return
  }

};


export const getAllUsers = async (req:Request, res:Response) =>{}
