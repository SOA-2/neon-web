import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from "../movie/movie/movie.component";
import { FilterPipe, FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';

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

export type Movies = Array<Movie>

@Component({
    selector: 'lib-movies',
    standalone: true,
    templateUrl: './movies.component.html',
    styleUrl: './movies.component.scss',
    imports: [CommonModule, MovieComponent, FilterPipeModule]
})
export class MoviesComponent {
  @Input({ required: true }) movies!: Movies;
  @Input({ required: true }) filter!: any;
  
  constructor() {
    this.movies = [];
  }
}
