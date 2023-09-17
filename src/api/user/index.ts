import express, { Router } from 'express';
import { 
    getUserById, 
    createUser, 
    updateUserById,
    deleteUserById,
    getUserRolesById,
    assignRoleToUser,
    removeRoleFromUser,
    getAllUsers
} from './user.service';
import { validate } from '../../middleware/validate';
import { createUserSchema, updateUserSchema } from './user.validation';

const userRouter: Router = express.Router();

userRouter.post('/', validate(createUserSchema), (req, res) => {
    const userData = req.body;
    const newUser = createUser(userData);
    res.send(newUser);
});

userRouter.get('/', (req, res) => {
    const users = getAllUsers();
    res.send(users);
});

userRouter.get('/:userId', (req, res) => {
    const userId = Number(req.params.userId);
    const userProfile = getUserById(userId);
    res.send(userProfile);
});

userRouter.put('/:userId', validate(updateUserSchema), (req, res) => {
    const userId = req.params.userId;
    const profileData = req.body;
    const updatedProfile = updateUserById(userId, profileData);
    res.send(updatedProfile);
});

userRouter.delete('/:userId', (req, res) => {
    const userId = req.params.userId;
    const isDeleted = deleteUserById(userId);
    if (isDeleted) res.send("User deleted successfully");
    else res.send("Not Implemented");
});

userRouter.get('/:userId/roles', (req, res) => {
    const userId = req.params.userId;
    const roles = getUserRolesById(userId);
    res.send(roles);
});

userRouter.post('/:userId/roles', validate(updateUserSchema), (req, res) => {
    const userId = req.params.userId;
    const roles = req.body.roles;
    const assignmentStatus = assignRoleToUser(userId, roles);
    res.send(assignmentStatus);
});

userRouter.delete('/:userId/roles/:roleId', (req, res) => {
    const userId = req.params.userId;
    const roleId = req.params.roleId;
    const removalStatus = removeRoleFromUser(userId, roleId);
    res.send(removalStatus);
});

export { userRouter };