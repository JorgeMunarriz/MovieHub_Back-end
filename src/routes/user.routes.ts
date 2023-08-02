import {Router, Request, Response} from 'express'
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/user.controllers'

const UserRouter = Router();

UserRouter.get('/', getAllUsers)
UserRouter.get('/:', getUserById)
UserRouter.post('/', createUser)
UserRouter.delete('/:userID', deleteUser)
UserRouter.put('/:userID', updateUser);

export default UserRouter;