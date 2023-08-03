import express, {Request, Response} from 'express'
import userRouter from './routes/user.routes';
import config from './config/config'
import MoviesRouter from './routes/movies.routes';
import morgan from 'morgan';

const app = express()
app.use(express.json())
app.use(morgan("dev"))
app.use("/users", userRouter)
app.use("/movies", MoviesRouter)

 export default app;