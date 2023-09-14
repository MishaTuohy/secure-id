import { 
    fetchUserProfile, 
    changeUserProfile, 
    removeUser 
} from './user.repository';

export function getUserProfile(token: string): any {
    return fetchUserProfile(token);
}

export function updateUserProfile(token: string, profileData: any): any {
    return changeUserProfile(token, profileData);
}

export function deleteUser(token: string): boolean {
    return removeUser(token);
}
