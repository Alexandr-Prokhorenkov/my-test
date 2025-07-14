import { CanActivateFn } from '@angular/router';

export const canActivateAuthGuard: CanActivateFn = () => {
  return true;
};
