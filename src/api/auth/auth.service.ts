import { AuthRepository } from './auth.repository';

export class AuthService {
    private authRepo: AuthRepository;

    constructor() {
        this.authRepo = new AuthRepository();
    }

    loginUserAndGetToken(username: string, password: string): string {
        return this.authRepo.loginUser(username, password);
    }

    logoutUserByToken(token: string): boolean {
        return this.authRepo.logoutUser(token);
    }
}
