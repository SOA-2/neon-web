import { Route } from '@angular/router';

import { BackofficeFareComponent } from './backoffice-fare/backoffice-fare.component';
import { FareListComponent } from './feature/fare-list/fare-list.component';
import { FareFormComponent } from './feature/fare-form/fare-form.component';

export const backofficeFareRoutes: Route[] = [
  { 
    path: '',
    component: BackofficeFareComponent,
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
