import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PermissionsService {
  isAdmin(isAdmin: boolean) {
    return isAdmin;
  }
}
