import { Component, OnInit } from '@angular/core';
import { MoviesServices } from '../../services/movies-services';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {  NgClass } from '@angular/common';  

@Component({
  selector: 'app-home-page',
  standalone: true,   
  imports: [RouterLink, FormsModule, NgClass], 
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  categories = ['Action', 'Comedy', 'Drama', 'Sci-Fi'];
  allMovies!: any[];
  movies!: any[];
  searchText: string = '';

  constructor(private movieServ: MoviesServices) {}

  ngOnInit(): void {
    this.allMovies = this.movieServ.allMovies;
    this.movies = [...this.allMovies];
  }

  searchMovies() {
    if (this.searchText.trim()) {
      this.movies = this.movieServ.allMovies.filter(movie =>
        movie.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.movies = [...this.allMovies];
    }
  }
}
