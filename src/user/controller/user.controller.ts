import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userData: any): Promise<any> {
    return this.userService.createUser(userData);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<any> {
    return this.userService.getUserById(id);
  }

  @Put(':id')
  async updateUserById(
    @Param('id') id: string,
    @Body() updateData: any,
  ): Promise<any> {
    return this.userService.updateUserById(id, updateData);
  }

  @Delete(':id')
  async deleteUserById(@Param('id') id: string): Promise<any> {
    return this.userService.deleteUserById(id);
  }

  @Get(':id/roles')
  async getUserRolesById(@Param('id') id: string): Promise<any> {
    return this.userService.getUserRolesById(id);
  }

  @Put(':id/roles')
  async assignRoleToUser(
    @Param('id') id: string,
    @Body() roleData: any,
  ): Promise<any> {
    return this.userService.assignRoleToUser(id, roleData);
  }

  @Delete(':id/roles')
  async removeRoleFromUser(
    @Param('id') id: string,
    @Body() roleData: any,
  ): Promise<any> {
    return this.userService.removeRoleFromUser(id, roleData);
  }
}
