import express, { Router } from 'express';
import { 
    issueTokenForUser, 
    isValidToken, 
    refreshToken, 
    revokeToken 
} from './token.service';

const tokenRouter: Router = express.Router();

tokenRouter.post('/issue', (req, res) => {
    const userId = req.body.userId || "someUserId";
    const response = issueTokenForUser(userId);
    res.send(response);
});

tokenRouter.post('/validate', (req, res) => {
    const token = req.body.token;
    const isValid = isValidToken(token);
    if (isValid) {
        res.send("Token is valid");
    } else {
        res.send("Token is invalid");
    }
});

tokenRouter.post('/refresh', (req, res) => {
    const refreshTokenValue = req.body.refreshToken;
    const newToken = refreshToken(refreshTokenValue);
    res.send(newToken);
});

tokenRouter.post('/revoke', (req, res) => {
    const tokenToRevoke = req.body.token;
    const isRevoked = revokeToken(tokenToRevoke);
    if (isRevoked) {
        res.send("Token revoked successfully");
    } else {
        res.send("Token revocation failed");
    }
});

export { tokenRouter };
