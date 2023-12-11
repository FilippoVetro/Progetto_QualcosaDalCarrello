import { inject } from '@angular/core';
import {
  Permission,
  PermissionService,
} from '../services/permission-service.service';

export const canMatch = (
  permissions: Permission[],
  permissionService = inject(PermissionService)
) => permissionService.isAllowed(permissions);
