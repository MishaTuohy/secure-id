import { 
    loginUser, 
    logoutUser, 
    registerUser as repoRegisterUser 
} from './auth.repository';

export function loginUserAndGetToken(username: string, password: string): string {
    return loginUser(username, password);
}

export function registerUser(username: string, password: string): string {
    return repoRegisterUser(username, password);
}

export function logoutUserByToken(token: string): boolean {
    return logoutUser(token);
}
