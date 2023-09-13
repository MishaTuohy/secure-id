import express, { Router } from 'express';
import { TokenService } from './token.service';

const tokenRouter: Router = express.Router();
const tokenService: TokenService = new TokenService();

tokenRouter.post('/issue', (req, res) => {
    const response = tokenService.issueTokenForUser("someUserId");
    res.send(response);
});

tokenRouter.get('/verify/:token', (req, res) => {
    const token = req.params.token;
    const isValid = tokenService.isValidToken(token);
    if (isValid) {
        res.send("Token is valid");
    } else {
        res.send("Not Implemented");
    }
});

export { tokenRouter };
