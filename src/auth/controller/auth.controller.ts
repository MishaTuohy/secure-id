import { Controller, Post, Body } from '@nestjs/common';
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
}
