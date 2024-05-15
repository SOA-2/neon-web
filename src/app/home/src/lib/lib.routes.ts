import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './feature/movie-detail/movie-detail.component';

export const homeRoutes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'movies/:name', component: MovieDetailComponent }
];
