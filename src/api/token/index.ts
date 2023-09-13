import express, { Router } from 'express';
import { isValidToken, issueTokenForUser } from './token.service';

const tokenRouter: Router = express.Router();

tokenRouter.post('/issue', (req, res) => {
    const response = issueTokenForUser("someUserId");
    res.send(response);
});

tokenRouter.get('/verify/:token', (req, res) => {
    const token = req.params.token;
    const isValid = isValidToken(token);
    if (isValid) {
        res.send("Token is valid");
    } else {
        res.send("Not Implemented");
    }
});

export { tokenRouter };
