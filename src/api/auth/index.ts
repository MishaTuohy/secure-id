import express, { Router } from 'express';
import { AuthService } from './auth.service';

const authRouter: Router = express.Router();
const authService: AuthService = new AuthService();

authRouter.post('/login', (req, res) => {
    const { username, password } = req.body;
    const response = authService.loginUserAndGetToken(username, password);
    res.send(response);
});

authRouter.post('/logout', (req, res) => {
    const token = req.headers['authorization'];

    if (!token) return res.status(400).send("Authorization header missing");

    const isLoggedOut = authService.logoutUserByToken(token);
    
    if (isLoggedOut) res.send("Successfully logged out");
    else  res.send("Not Implemented");
});

export { authRouter };
