import { Request, Response, NextFunction } from "express";


export const check = (req : Request, res : Response, next : NextFunction)=>{
    console.log('Check Middleware')
 const {name} = req.body;
 if (name.length < 4){
    res.status(404).send({error: 'Name must be least 4 characters'});
    return
    };
next()
 }
