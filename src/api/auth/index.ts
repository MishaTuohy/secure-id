import express, { Router } from 'express';
import { 
    loginUserAndGetToken, 
    logoutUserByToken, 
    registerUser 
} from './auth.service';

const authRouter: Router = express.Router();

// Login and get token
authRouter.post('/login', (req, res) => {
    const { username, password } = req.body;
    const response = loginUserAndGetToken(username, password);
    res.send(response);
});

// Register a new user
authRouter.post('/register', (req, res) => {
    const { username, password } = req.body;
    const response = registerUser(username, password);
    res.send(response);
});

// Logout
authRouter.post('/logout', (req, res) => {
    const token = req.headers['authorization'];

    if (!token) return res.status(400).send("Authorization header missing");

    const isLoggedOut = logoutUserByToken(token);
    
    if (isLoggedOut) res.send("Successfully logged out");
    else res.send("Not Implemented");
});

export { authRouter };
