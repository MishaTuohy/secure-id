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
}
