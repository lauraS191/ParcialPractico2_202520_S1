import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../Movie';

@Component({
  selector: 'app-movie-detail',
  standalone: false,
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent implements OnInit {

  movie!: Movie;
  durationFormatted: string = "";


  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}


  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.movieService.getMovie(id).subscribe(movie => {
      this.movie = movie;
      this.formatDuration(movie.duration);
    });
  }

  formatDuration(duration: number) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    this.durationFormatted = `${hours}h ${minutes}m`;
  }
}
