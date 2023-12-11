import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PermissionService {
  isAllowed(permissions: Permission[]) {
    const user = { permission: 'MANAGER' as Permission }; // Use 'as Permission' to assert the type
    return permissions.includes(user.permission);
  }
}

export type Permission = 'ADMIN' | 'USER' | 'MANAGER';
