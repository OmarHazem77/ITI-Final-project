import { Component, Input, OnInit } from '@angular/core';
import { MoviesServices } from '../../services/movies-services';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  imports: [RouterLink],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css'
})
export class MovieDetails implements OnInit {
  movie!: any
  allMovies: any[] = [];
  @Input() id!:string
  constructor(private movieServ:MoviesServices){}
  ngOnInit(): void {
      this.movieServ.getMovieById(this.id).subscribe({
        next:(data)=>{
          this.movie=data;
        },
        error:(err)=>{
          console.log(err)
        }
      }),
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
