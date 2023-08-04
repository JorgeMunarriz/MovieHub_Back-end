import express from 'express'
import { UserRouter, MoviesRouter, GenresRouter } from './routes';
import morgan from 'morgan';

const app = express()
app
    .use(express.json())
    .use(morgan("dev"))
    .use("/users", UserRouter)
    .use("/movies", MoviesRouter)
    .use("/genres", GenresRouter)

 export default app;