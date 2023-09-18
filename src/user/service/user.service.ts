/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class UserService {
  createUser(userData: any): any {
    throw new NotImplementedException();
  }

  getUserById(id: string): any {
    throw new NotImplementedException();
  }

  updateUserById(id: string, updateData: any): any {
    throw new NotImplementedException();
  }

  deleteUserById(id: string): any {
    throw new NotImplementedException();
  }

  getUserRolesById(id: string): any {
    throw new NotImplementedException();
  }

  assignRoleToUser(id: string, roleData: any): any {
    throw new NotImplementedException();
  }

  removeRoleFromUser(id: string, roleData: any): any {
    throw new NotImplementedException();
  }
}
