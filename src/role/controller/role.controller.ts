import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { RoleService } from '../service/role.service';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  async createRole(@Body() roleData: any): Promise<any> {
    return this.roleService.createRole(roleData);
  }

  @Get(':id')
  async getRoleById(@Param('id') id: string): Promise<any> {
    return this.roleService.getRoleById(id);
  }

  @Put(':id')
  async updateRoleById(
    @Param('id') id: string,
    @Body() updateData: any,
  ): Promise<any> {
    return this.roleService.updateRoleById(id, updateData);
  }

  @Delete(':id')
  async deleteRoleById(@Param('id') id: string): Promise<any> {
    return this.roleService.deleteRoleById(id);
  }

  @Get(':id/users')
  async getUsersWithRole(@Param('id') id: string): Promise<any> {
    return this.roleService.getUsersWithRole(id);
  }

  @Put(':id/assign-user')
  async assignUserToRole(
    @Param('id') id: string,
    @Body() userData: any,
  ): Promise<any> {
    return this.roleService.assignUserToRole(id, userData);
  }

  @Delete(':id/remove-user')
  async removeUserFromRole(
    @Param('id') id: string,
    @Body() userData: any,
  ): Promise<any> {
    return this.roleService.removeUserFromRole(id, userData);
  }
}
