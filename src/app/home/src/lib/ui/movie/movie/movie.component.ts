import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Movie {
  id: string
  name: string
  realName: string
  clasification: string
  image: string
  genre: string
  releaseDate: string
  duration: number
  context: string
  trailer: string
  director: string
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
