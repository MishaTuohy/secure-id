import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PermissionService } from '../service/permission.service';

@Controller('permissions')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Post()
  createPermission(@Body() permissionData: any): Promise<any> {
    return this.permissionService.createPermission(permissionData);
  }

  @Get(':id')
  getPermissionById(@Param('id') id: string): Promise<any> {
    return this.permissionService.getPermissionById(id);
  }

  @Put(':id')
  updatePermission(
    @Param('id') id: string,
    @Body() permissionData: any,
  ): Promise<any> {
    return this.permissionService.updatePermission(id, permissionData);
  }

  @Delete(':id')
  deletePermission(@Param('id') id: string): Promise<any> {
    return this.permissionService.deletePermission(id);
  }
}
