import express, { Router } from 'express';
import { 
    getUserProfile, 
    updateUserProfile,
    deleteUser
} from './user.service';

const userRouter: Router = express.Router();

// Get user profile
userRouter.get('/profile', (req, res) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(400).send("Authorization header missing");
    
    const userProfile = getUserProfile(token);
    res.send(userProfile);
});

// Update user profile
userRouter.put('/profile', (req, res) => {
    const token = req.headers['authorization'];
    const profileData = req.body;

    if (!token) return res.status(400).send("Authorization header missing");

    const updatedProfile = updateUserProfile(token, profileData);
    res.send(updatedProfile);
});

// Delete a user
userRouter.delete('/', (req, res) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(400).send("Authorization header missing");

    const isDeleted = deleteUser(token);
    if (isDeleted) res.send("User deleted successfully");
    else res.send("Not Implemented");
});

export { userRouter };
