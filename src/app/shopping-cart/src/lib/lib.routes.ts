import { Route } from '@angular/router';

import { authGuard } from 'src/app/shared/src/lib/guard/auth/auth.guard';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './feature/checkout/checkout.component';
import { SuccessComponent } from './ui/success/success.component';

export const shoppingCartRoutes: Route[] = [
  { path: ':id', component: ShoppingCartComponent, canActivate: [authGuard] },
  { path: 'checkout/payment', component: CheckoutComponent, canActivate: [authGuard] },
  { path: 'checkout/success/:id', component: SuccessComponent, canActivate: [authGuard] }
];
