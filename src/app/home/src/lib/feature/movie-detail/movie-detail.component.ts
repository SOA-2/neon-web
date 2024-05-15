import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '@neon-web/shared';

import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'lib-movie-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MatExpansionModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
})
export class MovieDetailComponent {}
