import User from "../model/userModel";
import jwt, {JwtPayload, VerifyErrors} from "jsonwebtoken";
import {config} from 'dotenv';
config();
import { Request, Response, NextFunction } from "express";

const accessTokenSecret= process.env.ACCESS_TOKEN_SECRET
const verifyJWT = (req:Request, res:Response, next:NextFunction)=>{
    const authHeader = req.headers["authorization"];
    if(!authHeader) return res.sendStatus(401)
    console.log(authHeader);
    const token = authHeader.split(" ")[1]
    jwt.verify(token, accessTokenSecret!, (error:VerifyErrors|null, decodedToken:JwtPayload|string|undefined)=>{
        const tokenObject = decodedToken as JwtPayload 
        if(error) return res.sendStatus(403) //403 means invalid token
        req.user = tokenObject!["userId"]
        next()
    })
}


export default verifyJWT



