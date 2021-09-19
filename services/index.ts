import axios from 'axios';

const key = process.env.API_KEY;

export type TMovieTypes = 'now_playing' | 'popular' | 'top_rated';
export type TPage = number;

const moviesUrl = (type: TMovieTypes, page: number) =>
  `https://api.themoviedb.org/3/movie/${type}/?api_key=${key}&page=${page}`;

export const getNowPlaying = (page: number = 1) =>
  axios(moviesUrl('now_playing', page));

export const getPopular = (timeWindow?: 'week' | 'day', page: number = 1) =>
  axios(
    `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${key}&page=${page}`
  );

export const getTopRated = (page: number = 1) =>
  axios(moviesUrl('top_rated', page));

export const getGenres = () =>
  axios(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`);

export const getMoviesByGenre = (genre: number, page: number = 1) =>
  axios(
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&page=${page}&with_genres=${genre}`
  );

export const getMovieDetail = (id: number | string) =>
  axios(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=similar,casts,images,videos`
  );

export const getActor = (id: number | string) =>
  axios(
    `https://api.themoviedb.org/3/person/${id}?api_key=${key}&append_to_response=credits`
  );

export const getMovieCasts = (id: number | string) =>
  axios(`https://api.themoviedb.org/3/movie/${id}/casts?api_key=${key}`);

export const getSearchedMovies = (query: string, page: number = 1) =>
  axios(
    `https://api.themoviedb.org/3/search/movie?api_key=ec88e2e0aead7f05f85d68d6d49c7f1b&query=${query}&page=${page}`
  );
