import express, {Request, Response} from 'express'
import userRouter from './routes/user.routes';
import config from './config/config'

const app = express()
app.use(express.json())
app.use("/users", userRouter)

 export default app;