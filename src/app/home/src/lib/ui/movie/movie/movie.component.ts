import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Movie {
  name: string;
  img: string;
  year: string;
  genre: string;
}

@Component({
  selector: 'lib-movie',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent {
  @Input({ required: true }) movie!: Movie;
}
