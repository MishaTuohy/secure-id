import { TokenRepository } from './token.repository';

export class TokenService {
    private tokenRepo: TokenRepository;

    constructor() {
        this.tokenRepo = new TokenRepository();
    }

    issueTokenForUser(userId: string): string {
        return this.tokenRepo.issueToken(userId);
    }

    isValidToken(token: string): boolean {
        return this.tokenRepo.verifyToken(token);
    }
}
