import { Routes } from '@angular/router';
import { Movies } from '../components/movies/movies';
import { About } from '../components/about/about';
import { ContactUs } from '../components/contact-us/contact-us';
import { Login } from '../components/login/login';
import { HomePage } from '../components/home-page/home-page';
import { Products } from '../components/products/products';
import { PageNotFound } from '../components/page-not-found/page-not-found';
import { MovieDetails } from '../components/movie-details/movie-details';

export const routes: Routes = [
  { path: '', redirectTo: 'homePage', pathMatch: 'full' },
  { path: 'homePage', component: HomePage },
  { path: 'movies', component: Movies },
  { path: 'about', component: About },
  { path: 'contact', component: ContactUs },
  { path: 'login', component: Login },
  { path: 'product', component: Products },
  { path: 'movieDetails/:id', component: MovieDetails },
  { path: '**', component: PageNotFound },

];
