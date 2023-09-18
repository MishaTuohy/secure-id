import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TokenService } from '../service/token.service';

@Controller('tokens')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Post()
  async issueTokenForUser(@Body() userData: any): Promise<any> {
    return this.tokenService.issueTokenForUser(userData);
  }

  @Get(':token')
  async isValidToken(@Param('token') token: string): Promise<boolean> {
    return this.tokenService.isValidToken(token);
  }

  @Put(':token')
  async refreshToken(@Param('token') token: string): Promise<any> {
    return this.tokenService.refreshToken(token);
  }

  @Delete(':token')
  async revokeToken(@Param('token') token: string): Promise<any> {
    return this.tokenService.revokeToken(token);
  }
}
