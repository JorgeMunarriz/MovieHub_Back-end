import { Request, Response } from "express";
import MoviesModel from "../model/movies.model";
import GenreModel from "../model/genre.model";

export const createGenre = async (req: Request, res: Response) => {
  const {  name } = req.body;
  try {
    const newGenre = await GenreModel.create({ name });
    res.status(201).send(newGenre);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getGenreByID = async (req: Request, res: Response) => {
  const { genreID } = req.params;
  try {
    const genre = await GenreModel.findById({ _id: genreID });
    res.status(200).send(genre);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const getAllGenre = async (req: Request, res: Response) => {
  try {
    const genre = await GenreModel.find();
    res.status(200).send(genre);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateGenreByID = async (req: Request, res: Response) => {
  const { genreID } = req.params;
  const { name } = req.body;
  try {
    const genre = await GenreModel.findByIdAndUpdate(
      genreID,
      {
        $set: { name },
      },
      {
        new: true,
      }
    );
    res.status(200).send(genre);
  } catch (error) {}
};

export const deleteGenreByID = async (req: Request, res: Response) => {
  const { genreID } = req.params;
  try {
    const deleteGenre = await GenreModel.findByIdAndDelete({ _id: genreID });
    res.status(200).send(deleteGenre);
  } catch (error) {
    res.status(500).send(error);
  }
};
