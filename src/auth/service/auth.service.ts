/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  loginUserAndGetToken(loginData: any): any {
    throw new NotImplementedException();
  }

  registerUser(registrationData: any): any {
    throw new NotImplementedException();
  }

  logoutUserByToken(tokenData: any): any {
    throw new NotImplementedException();
  }
}
