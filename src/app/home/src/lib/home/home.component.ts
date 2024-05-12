import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MovieService } from '../data-access/movie/movie.service';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  value = '';

  constructor(
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.getMovies();
  }

  public getMovies(): void {
    this.movieService.getMovies().subscribe((res: any) => {
      this.value = res;
    })
  }
}
