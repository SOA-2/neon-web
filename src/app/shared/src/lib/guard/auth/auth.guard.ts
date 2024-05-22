import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from 'src/app/log-in/src/lib/data-access/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const currentUser = authService.currentUser;

    if (currentUser && authService.isAuthenticated()) {
      // check if route is restricted by role
      if (route.data['roles'] && currentUser.realm_access.roles.indexOf(route.data['roles'][0]) === -1) {
        // role not authorised so redirect to not-authorized page
        router.navigate(['/']);
        return false;
      }
      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    router.navigate(['/login']);
    return false;
};
