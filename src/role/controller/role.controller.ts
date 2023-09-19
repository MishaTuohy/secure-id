import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { RoleService } from 'src/role/service/role.service';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  createRole(@Body() roleData: any): Promise<any> {
    return this.roleService.createRole(roleData);
  }

  @Get(':id')
  getRoleById(@Param('id') id: string): Promise<any> {
    return this.roleService.getRoleById(id);
  }

  @Put(':id')
  updateRole(@Param('id') id: string, @Body() roleData: any): Promise<any> {
    return this.roleService.updateRole(id, roleData);
  }

  @Delete(':id')
  deleteRole(@Param('id') id: string): Promise<any> {
    return this.roleService.deleteRole(id);
  }
}
