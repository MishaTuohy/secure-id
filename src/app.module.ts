import { Module } from '@nestjs/common';
import { TokenModule } from './token/token.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PermissionModule } from './permission/permission.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [AuthModule, TokenModule, UserModule, PermissionModule, RoleModule],
})
export class AppModule {}
