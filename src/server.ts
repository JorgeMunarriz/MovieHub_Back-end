import express, {Request, Response} from 'express'
import userRouter from './routes/user.routes';
import config from './config/config'
import MoviesRouter from './routes/movies.routes';
import morgan from 'morgan';
import GenreRouter from './routes/genre.routes';

const app = express()
app.use(express.json())
app.use(morgan("dev"))
app.use("/users", userRouter)
app.use("/movies", MoviesRouter)
app.use("/genres", GenreRouter)

 export default app;