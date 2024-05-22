import { Route } from '@angular/router';

import { BackofficeFareComponent } from './backoffice-fare/backoffice-fare.component';
import { FareListComponent } from './feature/fare-list/fare-list.component';
import { FareFormComponent } from './feature/fare-form/fare-form.component';

import { authGuard } from 'src/app/shared/src/lib/guard/auth/auth.guard';

export const backofficeFareRoutes: Route[] = [
  { 
    path: '',
    component: BackofficeFareComponent,
    data: {
      roles: ['admin']
    },
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: FareListComponent
      },
      {
        path: 'form',
        component: FareFormComponent
      },
      {
        path: 'form/:id',
        component: FareFormComponent
      }
    ]
  }
];
