import { issueToken, verifyToken } from "./token.repository";

export function issueTokenForUser(userId: string): string {
    return issueToken(userId);
}

export function isValidToken(token: string): boolean {
    return verifyToken(token);
}
