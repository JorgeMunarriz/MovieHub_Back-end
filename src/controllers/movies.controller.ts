import { Request, Response } from "express";
import MoviesModel from "../model/movies.model";
import UserModel from "../model/user.model";

export const createMovie = async (req: Request, res: Response) => {
  const { name, year, score } = req.body;
  const { userID } = req.params;

  console.log(userID);
  try {
    const newMovie = await MoviesModel.create({
      name,
      year,
      score,
    });

    await UserModel.findByIdAndUpdate(
      { _id: userID },
      {
        $push: { movies: newMovie._id },
      }
    );

    res.status(201).send(newMovie);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const getMovieByID = async (req: Request, res: Response) => {
  const { userID } = req.params;
  try {
    const movie = await UserModel.findById({ _id: userID });
    res.status(200).send(movie);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
  res.status(200).send(" Get all users");
};

export const getAllMovies = async (req: Request, res: Response) => {
  
  try {
    const movies = await MoviesModel.find({})
    res.status(200).send(movies);
  } catch (error) {
    
  }
};

export const updateMovieByID = async (req: Request, res: Response) => {
  const { movieID } = req.params;
  const { name, score, year } = req.body;
  try {
    const movie = await UserModel.findByIdAndUpdate(
      { _id: movieID },
      {
        $set: { name, score, year },
      },
      { new: true }
    );
    res.status(200).send(movie);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export const deleteMovieByID = async (req: Request, res: Response) => {
  const { movieID } = req.params;
  const { name, score, year } = req.body;
  if (!name || !score || !year) {
    res.status(404).send({ msg: "Movie not found" });
    return;
  }
  try {
    await UserModel.findByIdAndDelete({ _id: movieID });
    res.status(200).send("Deleted movie by ID");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
