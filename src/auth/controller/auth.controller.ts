import { Controller, Post, Body, Put, Delete } from '@nestjs/common';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async loginUserAndGetToken(@Body() loginData: any): Promise<any> {
    return this.authService.loginUserAndGetToken(loginData);
  }

  @Post('/register')
  async registerUser(@Body() registrationData: any): Promise<any> {
    return this.authService.registerUser(registrationData);
  }

  @Post('/logout')
  async logoutUserByToken(@Body() tokenData: any): Promise<any> {
    return this.authService.logoutUserByToken(tokenData);
  }

  @Post('/password-reset/initiate')
  async initiatePasswordReset(@Body() emailData: any): Promise<any> {
    return this.authService.initiatePasswordReset(emailData);
  }

  @Put('/password-reset/complete')
  async completePasswordReset(@Body() resetData: any): Promise<any> {
    return this.authService.completePasswordReset(resetData);
  }

  @Put('/change-password')
  async changePassword(@Body() changeData: any): Promise<any> {
    return this.authService.changePassword(changeData);
  }

  @Put('/2fa/setup')
  async setupTwoFactorAuth(@Body() setupData: any): Promise<any> {
    return this.authService.setupTwoFactorAuth(setupData);
  }

  @Delete('/2fa/disable')
  async disableTwoFactorAuth(@Body() userData: any): Promise<any> {
    return this.authService.disableTwoFactorAuth(userData);
  }

  @Post('/verify-email')
  async verifyEmail(@Body() verificationData: any): Promise<any> {
    return this.authService.verifyEmail(verificationData);
  }
}
