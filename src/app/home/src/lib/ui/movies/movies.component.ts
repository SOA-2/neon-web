import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from "../movie/movie/movie.component";

export interface Movie {
  name: string;
  img: string;
  year: string;
  genre: string;
}

@Component({
    selector: 'lib-movies',
    standalone: true,
    templateUrl: './movies.component.html',
    styleUrl: './movies.component.scss',
    imports: [CommonModule, MovieComponent]
})
export class MoviesComponent {
  movies: Movie[] = [
    {
      name: 'Cartelera',
      img: 'https://www.procinal.com/uploads/PELICULAS/Img_movies/Img_360x500/360%20X%20500%20saralafuerzadelmar.jpg',
      year: 'string',
      genre: 'string'
    },
    {
      name: 'Cartelera',
      img: 'https://www.procinal.com/uploads/PELICULAS/Img_movies/Img_360x500/360%20X%20500%20furiosanuevo.jpg',
      year: 'string',
      genre: 'string'
    },
    {
      name: 'Cartelera',
      img: 'https://www.procinal.com/uploads/PELICULAS/Img_movies/Img_360x500/360%20X%20500%20elplanetadelossimios.jpg',
      year: 'string',
      genre: 'string'
    },
    {
      name: 'Cartelera',
      img: 'https://www.procinal.com/uploads/PELICULAS/Img_movies/Img_360x500/360%20X%20500%20garfield%20nuevo.jpg',
      year: 'string',
      genre: 'string'
    },
    {
      name: 'Cartelera',
      img: 'https://www.procinal.com/uploads/PELICULAS/Img_movies/Img_360x500/360%20X%20500%20LAMALDICIONDELABRUJA.jpg',
      year: 'string',
      genre: 'string'
    }
  ];
}
