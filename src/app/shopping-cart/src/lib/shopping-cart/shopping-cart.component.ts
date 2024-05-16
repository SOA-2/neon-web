import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '@neon-web/shared';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

export interface Seat {
  id: string;
  letter: string;
  number: string;
  screen_id: string;
  selected: boolean;
  taken?: boolean;
}

export type Seats = Array<Seat>

@Component({
  selector: 'lib-shopping-cart',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MatCardModule, MatButtonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  seats: Seats[] = [
    [
      {
        id: '1acb67a5-73ab-44e5-b8a2-0b65b06b674c',
        letter: 'A',
        number: '1',
        screen_id: '12cb67a5-73ab-44e5-b8a2-0b65b06b674e',
        selected: false,
        taken: true
      },
      {
        id: '1acb67a5-733b-44e5-b8a2-0b5b06bs674c',
        letter: 'A',
        number: '2',
        screen_id: '12cb67a5-73ab-44de5-b8a2-0b65b06674e',
        selected: false,
        taken: true
      },
      {
        id: '1acb67as-73ab-44e5-b8a2-0b65b06b674c',
        letter: 'A',
        number: '3',
        screen_id: '12cby7a5-73ab-44e5-b8a2-0365b06b674e',
        selected: false
      },
      {
        id: '1acb67e5-73hb-44e5-b8a2-0b65b06b674c',
        letter: 'A',
        number: '4',
        screen_id: '12cb67b5-73ab-44e5-b8a2-0b65b06b674e',
        selected: false
      },
      {
        id: '1acb37a5-7hab-44e5-b8a2-0b65b06b674c',
        letter: 'A',
        number: '5',
        screen_id: '12cb67a5-73ab-44e5-b8a2-0b65b06b674e',
        selected: false
      },
      {
        id: '1acb67a5-73hb-44e5-b8a2-0b65b06b674c',
        letter: 'A',
        number: '6',
        screen_id: '12cb67a5-73ab-44e5-b8a2-0b65b06b674e',
        selected: false
      },
      {
        id: '1acb67a5-73ab-44e5-b8a2-0b6hb06b674c',
        letter: 'A',
        number: '7',
        screen_id: '12cb67a5-73ab-44e5-b8a2-0b65b06b674e',
        selected: false
      },
      {
        id: '1acb67a5-73ab-44e5-b8a2-0b65b06b674h',
        letter: 'A',
        number: '8',
        screen_id: '12cb67a5-73ab-44e5-b8a2-0b65b06b674e',
        selected: false
      },
      {
        id: '1acb6ba5-73ab-44e5-b8a2-0bh5b06h674c',
        letter: 'A',
        number: '9',
        screen_id: '12cb67a5-73ab-44e5-b8a2-0b65h06b674e',
        selected: false
      }
    ],
    [
      {
        id: '1acb67a5-73ab-44e5-b8a2-0b65b06b674c',
        letter: 'B',
        number: '1',
        screen_id: '12cb67a5-73ab-44e5-b8a2-0b65b06b674e',
        selected: false
      },
      {
        id: '1acb67a5-733b-44e5-b8a2-0b5b06bs674c',
        letter: 'B',
        number: '2',
        screen_id: '12cb67a5-73ab-44de5-b8a2-0b65b06674e',
        selected: false
      },
      {
        id: '1acb67as-73ab-44e5-b8a2-0b65b06b674c',
        letter: 'B',
        number: '3',
        screen_id: '12cby7a5-73ab-44e5-b8a2-0365b06b674e',
        selected: false
      },
      {
        id: '1acb67e5-73hb-44e5-b8a2-0b65b06b674c',
        letter: 'B',
        number: '4',
        screen_id: '12cb67b5-73ab-44e5-b8a2-0b65b06b674e',
        selected: false
      },
      {
        id: '1acb37a5-7hab-44e5-b8a2-0b65b06b674c',
        letter: 'B',
        number: '5',
        screen_id: '12cb67a5-73ab-44e5-b8a2-0b65b06b674e',
        selected: false
      },
      {
        id: '1acb67a5-73hb-44e5-b8a2-0b65b06b674c',
        letter: 'B',
        number: '6',
        screen_id: '12cb67a5-73ab-44e5-b8a2-0b65b06b674e',
        selected: false
      },
      {
        id: '1acb67a5-73ab-44e5-b8a2-0b6hb06b674c',
        letter: 'B',
        number: '7',
        screen_id: '12cb67a5-73ab-44e5-b8a2-0b65b06b674e',
        selected: false
      },
      {
        id: '1acb67a5-73ab-44e5-b8a2-0b65b06b674h',
        letter: 'B',
        number: '8',
        screen_id: '12cb67a5-73ab-44e5-b8a2-0b65b06b674e',
        selected: false
      },
      {
        id: '1acb6ba5-73ab-44e5-b8a2-0bh5b06h674c',
        letter: 'B',
        number: '9',
        screen_id: '12cb67a5-73ab-44e5-b8a2-0b65h06b674e',
        selected: false
      }
    ]
  ]
}
