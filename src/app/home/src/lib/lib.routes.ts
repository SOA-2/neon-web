import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './ui/movie-detail/movie-detail/movie-detail.component';

export const homeRoutes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'movies/:name', component: MovieDetailComponent }
];
