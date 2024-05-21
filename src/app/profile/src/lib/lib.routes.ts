import { Route } from '@angular/router';

import { authGuard } from 'src/app/shared/src/lib/guard/auth/auth.guard';

import { ProfileComponent } from './profile/profile.component';
import { ReserveDetailComponent } from './feature/reserve-detail/reserve-detail.component';

export const profileRoutes: Route[] = [
  { path: '', component: ProfileComponent, canActivate: [authGuard] },
  
  { path: 'movie/detail/:id', component: ReserveDetailComponent, canActivate: [authGuard] }
];
