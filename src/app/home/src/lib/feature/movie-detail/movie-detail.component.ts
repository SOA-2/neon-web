import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '@neon-web/shared';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'lib-movie-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MatExpansionModule, MatChipsModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
})
export class MovieDetailComponent {
  theaters = [
    {
      name: 'Molinos',
      shows: [
        { time: '12:00 PM' },
        { time: '2:00 PM' },
        { time: '2:40 PM' },
        { time: '3:30 PM' }
      ]
    },
    {
      name: 'Oviedo',
      shows: [
        { time: '12:00 PM' },
        { time: '2:00 PM' },
        { time: '2:40 PM' },
        { time: '3:30 PM' }
      ]
    },
    {
      name: 'Santafe',
      shows: [
        { time: '12:00 PM' },
        { time: '2:00 PM' },
        { time: '2:40 PM' },
        { time: '3:30 PM' }
      ]
    },
    {
      name: 'Viva Envigado',
      shows: [
        { time: '12:00 PM' },
        { time: '2:00 PM' },
        { time: '2:40 PM' },
        { time: '3:30 PM' }
      ]
    }
  ]
}
