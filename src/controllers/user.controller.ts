import {Request, Response} from 'express';
import UserModel from "../model/user.model";

export const createUser = async (req: Request, res: Response) => {
    const {name, email, password} = req.body;

    try {

        if (!name || !email || !password) {
            res.status(400).json({error: "Missing required fields"});
            return;
        }

        const newUser = await UserModel.create({
            name,
            email,
            password
        })

        res.status(201).json(newUser);

    } catch (error) {
        res.status(500).json(error);
    }
}

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const allUsers = await UserModel.find().populate("movies")
        res.status(201).json(allUsers);

    } catch (error) {
        res.status(500).json(error);
    }
}

export const getUserByID = async (req: Request, res: Response) => {
    const {userID} = req.params;
    try {
        const userById = await UserModel.findById(userID).populate("movies").populate("movies.genres.genre")
        res.status(201).json(userById);

    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateUserName = async (req: Request, res: Response) => {
    const {userID} = req.params;
    const {name, email} = req.body;
    try {

        const user = await UserModel.findByIdAndUpdate(userID, 
        { $set: {name: name, email: email} }, {new: true})

        res.status(201).json(user);

    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteUserByID = async (req: Request, res: Response) => {
    const {userID} = req.params;
    try {

        await UserModel.findByIdAndDelete(userID)
        res.status(204).json();
    } catch (error) {
        res.status(500).json(error);
    }
}
