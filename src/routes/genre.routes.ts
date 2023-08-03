import {Router} from 'express'
import { check } from '../middleware/check.middleware';
import { createGenre, deleteGenreByID, getAllGenre, getGenreByID, updateGenreByID } from '../controllers/genre.controller';

const GenreRouter = Router();

GenreRouter
    .get('/:genreID', getGenreByID)
    .get('/', getAllGenre)
    .post('/', check, createGenre)
    .delete('/:genreID', deleteGenreByID)
    .put('/:genreID', updateGenreByID);

export default GenreRouter;