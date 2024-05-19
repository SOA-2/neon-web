import { Route } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './feature/checkout/checkout.component';

export const shoppingCartRoutes: Route[] = [
  { path: ':id', component: ShoppingCartComponent },
  { path: 'checkout/payment', component: CheckoutComponent }
];
