import express, {Request, Response} from 'express'
import userRouter from './routes/user.routes';
import config from './config/config'
import MoviesRouter from './routes/movies.routes';

const app = express()
app.use(express.json())
app.use("/users", userRouter)
app.use("/movies", MoviesRouter)

 export default app;