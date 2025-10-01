import { Component, OnInit } from '@angular/core';
import { MoviesServices } from '../../services/movies-services';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-movies',
  imports: [RouterLink],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies implements OnInit {
  allMovies: any[] = [];
  constructor(private movieServ: MoviesServices) {}
  ngOnInit(): void {
    this.movieServ.getAllMovies().subscribe({
      next:(data)=>{
        this.allMovies=data.results
        
      },
      error:(err)=>{
        console.log(err)
      }
    });
  }
}
