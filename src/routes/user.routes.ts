import {Router} from "express";
import {createUser, deleteUserByID, getAllUsers, getUserByID, updateUserName} from "../controllers/user.controller";

const UserRouter = Router()

UserRouter
    .post("/", createUser)
    .get("/", getAllUsers)
    .get("/:userID", getUserByID)
    .put("/:userID", updateUserName)
    .delete("/:userID", deleteUserByID)


export default UserRouter
