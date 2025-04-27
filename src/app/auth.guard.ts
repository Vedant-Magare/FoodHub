import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService); // 👈 add type here

  if (authService.isLoggedIn()) {
    return true;
  } else {
    return false;
  }
};
