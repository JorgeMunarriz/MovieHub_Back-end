import { Request, Response } from "express";
import UserModel from "../model/user.model";
import MoviesModel from "../model/movies.model";

export const getAllMovies = async (req: Request, res: Response) => {
  
  try {
    const allUsers = await UserModel.find();
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
  res.status(200).send(" Get all users");
};
export const getMovieById = async (req: Request, res: Response) => {
  const {userId} = req.params
  try {
    const user = await UserModel.findById({_id: userId});
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
  res.status(200).send(" Get all users");
};
export const createMovie = async (req: Request, res: Response) => {
  const {name, year} = await req.body;
  const {userId} = req.params
  if (!name || year) {
    res.status(404).send({error: "Missing name or year"});
    return;
  }
  try {
    const newMovie = await MoviesModel.create({name, year});
    res.status(201).send(newMovie);

    
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
  
};
export const updateMovie = async (req: Request, res: Response) => {
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
export const deleteMovie = async (req: Request, res: Response) => {
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

