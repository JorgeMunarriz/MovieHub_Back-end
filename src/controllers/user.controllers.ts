import { Request, Response } from "express";
import UserModel from "../model/user.model";

export const getAllUsers = async (req: Request, res: Response) => {
  console.log(req.body)
  res.status(250).send("Funcionando")
  try {
    const allUsers = await UserModel.find();
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
  res.status(200).send(" Get all users");
};
export const getUserById = async (req: Request, res: Response) => {
  const {userId} = req.params
  try {
    const user = await UserModel.findById({_id: userId});
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
  res.status(200).send(" Get all users");
};
export const createUser = async (req: Request, res: Response) => {
  const {name, email, password} = await req.body;
  if (!name || !email || !password) {
    res.status(404).send({error: "Missing username or password"});
    return;
  }
  try {
    const newUser = await UserModel.create({name, email, password});
    await newUser.save();
    res.status(201).send(newUser);

  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
  
};
export const updateUser = async (req: Request, res: Response) => {
  const {userId} = req.params
  const {name, email}= req.body
  try {
    const user = await UserModel.findByIdAndUpdate({_id: userId}, {
      $set: {name: name, email:email}
    }, {new: true});

  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
  res.status(200).send(" Get all users");
};
export const deleteUser = async (req: Request, res: Response) => {
  const {userId} = req.params
  const {name, email}= req.body
  try {
    const user = await UserModel.findByIdAndDelete({_id: userId});
    res.status(204).send()

  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
};

