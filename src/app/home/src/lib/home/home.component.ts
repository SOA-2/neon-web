import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { HeaderComponent } from '@neon-web/shared';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MovieService } from '../data-access/movie/movie.service';
import { MatChipsModule } from '@angular/material/chips';

import { MoviesComponent } from "../ui/movies/movies.component";

export interface Filter {
  name: string;
}

export type Filters = Array<Filter>

@Component({
    selector: 'lib-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, RouterLink, MatChipsModule, MoviesComponent, MatIconModule, HeaderComponent]
})
export class HomeComponent implements OnInit {
  value = '';
  movies = [];

  filers: Filters = [
    { name: 'Cartelera' },
    { name: 'Próximamente' },
    { name: 'Cineco Alternativo' }
  ];

  constructor(
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.getMovies();
  }

  public getMovies(): void {
    this.movieService.getMovies().subscribe((res: any) => {
      this.movies = res;
    })
  }
}
