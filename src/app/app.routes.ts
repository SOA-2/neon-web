import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'backoffice/fare',
    loadChildren: () =>
      import('@neon-web/backoffice-fare').then((m) => m.backofficeFareRoutes),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('@neon-web/shopping-cart').then((m) => m.shoppingCartRoutes),
  },
  {
    path: 'signup',
    loadChildren: () => import('@neon-web/sign-up').then((m) => m.signUpRoutes),
  },
  {
    path: 'login',
    loadChildren: () => import('@neon-web/log-in').then((m) => m.logInRoutes),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('@neon-web/profile').then((m) => m.profileRoutes),
  },
  {
    path: '',
    loadChildren: () => import('@neon-web/home').then((m) => m.homeRoutes),
  },
  // {
  //   path: '404',
  //   component: Page404Component
  // },
  // {
  //   path: '403',
  //   component: Page403Component
  // },
  // {
  //   path: '**',
  //   redirectTo: '404',
  //   pathMatch: 'full'
  // },
];
