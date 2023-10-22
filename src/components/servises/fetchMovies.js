import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '01d38afe4cc535c84f509923ce573618';

axios.defaults.params = {
  api_key: API_KEY,
};

export async function getMovieTrends() {
  return await axios(`${BASE_URL}/trending/all/day`);
}

export async function getMovieDetails(movieId) {
  return await axios(`${BASE_URL}/movie/${movieId}`);
}

export async function getMovieCats(movieId) {
  return await axios(`${BASE_URL}/movie/${movieId}/credits`);
}

export async function getMovieReviews(movieId) {
  return await axios(`${BASE_URL}/movie/${movieId}/reviews`);
}

export async function getSearchMovie(query, page) {
  return await axios(`${BASE_URL}/search/movie?query=${query}&page=${page}`);
}
