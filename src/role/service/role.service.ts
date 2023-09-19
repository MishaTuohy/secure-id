/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';

@Injectable()
export class RoleService {
  async createRole(roleData: any): Promise<any> {
    throw new Error('Not implemented.');
  }

  async getRoleById(id: string): Promise<any> {
    throw new Error('Not implemented.');
  }

  async updateRoleById(id: string, updateData: any): Promise<any> {
    throw new Error('Not implemented.');
  }

  async deleteRoleById(id: string): Promise<any> {
    throw new Error('Not implemented.');
  }

  async getUsersWithRole(id: string): Promise<any> {
    throw new Error('Not implemented.');
  }

  async assignUserToRole(id: string, userData: any): Promise<any> {
    throw new Error('Not implemented.');
  }

  async removeUserFromRole(id: string, userData: any): Promise<any> {
    throw new Error('Not implemented.');
  }
}
