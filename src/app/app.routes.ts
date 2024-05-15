import { Route } from '@angular/router';

export const appRoutes: Route[] = [
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
];
