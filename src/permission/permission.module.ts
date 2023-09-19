import { Module } from '@nestjs/common';
import { PermissionService } from './service/permission.service';
import { PermissionController } from './controller/permission.controller';

@Module({
  providers: [PermissionService],
  controllers: [PermissionController],
})
export class PermissionModule {}
