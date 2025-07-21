import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const canActivateAuthGuard: CanActivateFn = () => {
  return inject(Router).createUrlTree(['/login']);
};
