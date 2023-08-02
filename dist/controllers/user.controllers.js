"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getAllUsers = void 0;
const getAllUsers = (req, res) => {
    res.status(200).send(" Get all users");
};
exports.getAllUsers = getAllUsers;
const createUser = (req, res) => {
    res.status(200).send(" Created user");
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    res.status(200).send(" User updated");
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    res.status(200).send(" User deleted");
};
exports.deleteUser = deleteUser;
