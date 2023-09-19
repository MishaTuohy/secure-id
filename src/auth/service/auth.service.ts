/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  async loginUserAndGetToken(loginData: any): Promise<any> {
    throw new NotImplementedException();
  }

  async registerUser(registrationData: any): Promise<any> {
    throw new NotImplementedException();
  }

  async logoutUserByToken(tokenData: any): Promise<any> {
    throw new NotImplementedException();
  }

  async initiatePasswordReset(emailData: any): Promise<any> {
    throw new NotImplementedException();
  }

  async completePasswordReset(resetData: any): Promise<any> {
    throw new NotImplementedException();
  }

  async changePassword(changeData: any): Promise<any> {
    throw new NotImplementedException();
  }

  async setupTwoFactorAuth(setupData: any): Promise<any> {
    throw new NotImplementedException();
  }

  async disableTwoFactorAuth(userData: any): Promise<any> {
    throw new NotImplementedException();
  }

  async verifyEmail(verificationData: any): Promise<any> {
    throw new NotImplementedException();
  }
}
