import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '@neon-web/shared';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MovieService } from '../../data-access/movie/movie.service';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ShowService } from '../../data-access/show/show.service';

export interface MovieGenre {
  id: string
  name: string
}

export interface Movie {
  id: string
  name: string
  realName: string
  clasification: string
  image: string
  genre: MovieGenre
  releaseDate: string
  duration: number
  context: string
  trailer: string
  director: string
}

@Component({
  selector: 'lib-movie-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MatExpansionModule, MatChipsModule, RouterModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
})
export class MovieDetailComponent {
  @Input() id = '';

  trailer: any;
  movie!: Movie;
  shows!: Array<any>;
  theaters!: Array<any>;
  dates!: Array<any>;
  dateSelected: any;

  constructor(
    private movieService: MovieService,
    private showService: ShowService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getMovie(this.id);
    this.getShows(this.id);
  }

  public getMovie(id: string): void {
    this.movieService.getMovie(id).subscribe((res: any) => {
      this.movie = res;
      this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer);
    })
  }

  public getShows(id: string): void {
    this.showService.getShowsByMovieId(id).subscribe((res: any) => {
      this.shows = res;
      this.formatDates();
      this.formatShows();
    })
  }

  public filterTheaters(date: any): void {
    this.dateSelected = date.key;
    this.theaters = this.shows.reduce((r: any, show: any) => {
      if (show.date === date.key) {
        r[show.theatre.name] = [...r[show.theatre.name] || [], show];
      }
      return r;
    }, {})
  }

  formatDates() {
    this.dates =  this.shows.reduce((r: any, show: any) => {
      r[show.date] = [...r[show.date] || [], {
        ...show,
        month: new Date(show.date).toLocaleString('default', { month: 'long' }),
        day: new Date(show.date).toLocaleString('default', { day: '2-digit' })
      }];
      return r;
    }, {})
  }

  formatShows() {
    this.theaters = this.shows.reduce((r: any, show: any) => {
      r[show.theatre.name] = [...r[show.theatre.name] || [], show];
      return r;
    }, {})
  }
}
