import {Router, Request, Response} from 'express'
import { check } from '../middleware/check.middleware';
import { createMovie, deleteMovieByID, getAllMovies, getMovieByID, updateMovieByID } from '../controllers/movies.controller';

const MoviesRouter = Router();

MoviesRouter
    .get('/', getAllMovies)
    .get('/:userID', getMovieByID)
    .post('/:userID', check, createMovie)
    .delete('/:movieID', deleteMovieByID)
    .put('/:movieID', updateMovieByID);

export default MoviesRouter;