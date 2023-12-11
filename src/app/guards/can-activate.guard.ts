import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { PermissionsService } from '../services/permission-service.service';

// export const canActivateGuard: CanActivateFn = (route, state) => {
//   return true;
// };

export const canActivate = (
  isAdmin: boolean,
  permissionService = inject(PermissionsService)
) => permissionService.isAdmin(isAdmin);
