import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '@neon-web/shared';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'lib-shopping-cart',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MatCardModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {}
