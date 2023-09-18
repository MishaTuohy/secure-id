import { Module } from '@nestjs/common';
import { TokenModule } from './token/token.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, TokenModule, UserModule],
})
export class AppModule {}
