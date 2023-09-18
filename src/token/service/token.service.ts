/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class TokenService {
  issueTokenForUser(userId: string): any {
    throw new NotImplementedException();
  }

  isValidToken(token: string): boolean {
    throw new NotImplementedException();
  }

  refreshToken(token: string): any {
    throw new NotImplementedException();
  }

  revokeToken(token: string): any {
    throw new NotImplementedException();
  }
}
