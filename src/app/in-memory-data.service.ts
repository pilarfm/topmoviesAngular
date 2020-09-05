import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      { id: 1, title: 'Jackie Brown' },
      { id: 2, title: 'Pulp Fiction' },
      { id: 3, title: 'Once upon a time in Hollywood' },
      { id: 4, title: 'Inglourious Basterds' },
      { id: 5, title: 'Django Unchained' },
      { id: 6, title: 'Kill Bill: Volume 1' },
      { id: 7, title: 'Kill Bill: Volume 2' },
      { id: 8, title: 'The Hateful Eight' },
      { id: 9, title: 'Natural Born Killers' },
    ];
    return {movies};
  }

  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 11;
  }
} 