import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../model/userModel";



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
