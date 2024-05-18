import { Route } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

export const shoppingCartRoutes: Route[] = [
  { path: ':id', component: ShoppingCartComponent },
];
