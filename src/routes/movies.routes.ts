import {Router, Request, Response} from 'express'
import { createMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } from '../controllers/movies.controller';
import { check } from '../middleware/check.middleware';

const MoviesRouter = Router();

MoviesRouter
    .get('/', getAllMovies)
    .get('/:', getMovieById)
    .post('/:UserID', check, createMovie)
    .delete('/:MoviesID', deleteMovie)
    .put('/:MoviesID', updateMovie);

export default MoviesRouter;