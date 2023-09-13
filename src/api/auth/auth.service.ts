import { loginUser , logoutUser } from './auth.repository';

export function loginUserAndGetToken(username: string, password: string): string {
    return loginUser(username, password);
}

export function logoutUserByToken(token: string): boolean {
    return logoutUser(token);
}
