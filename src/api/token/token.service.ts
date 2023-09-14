import { 
    issueToken, 
    verifyToken, 
    generateRefreshToken, 
    revokeToken as repoRevokeToken 
} from "./token.repository";

export function issueTokenForUser(userId: string): string {
    return issueToken(userId);
}

export function isValidToken(token: string): boolean {
    return verifyToken(token);
}

export function refreshToken(refreshTokenValue: string): string {
    return generateRefreshToken(refreshTokenValue);
}

export function revokeToken(token: string): boolean {
    return repoRevokeToken(token);
}
