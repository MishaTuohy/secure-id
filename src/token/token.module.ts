import { Module } from '@nestjs/common';
import { TokenService } from './service/token.service';
import { TokenController } from './controller/token.controller';

@Module({
  providers: [TokenService],
  controllers: [TokenController],
})
export class TokenModule {}
