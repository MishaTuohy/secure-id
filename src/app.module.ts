import { Module } from '@nestjs/common';
import { TokenModule } from './token/token.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PermissionModule } from './permission/permission.module';
import { RoleModule } from './role/role.module';
import { DynamoDBModule } from './dynamodb/dynamodb.module';

@Module({
  imports: [
    AuthModule,
    TokenModule,
    UserModule,
    PermissionModule,
    RoleModule,
    DynamoDBModule,
  ],
})
export class AppModule {}
