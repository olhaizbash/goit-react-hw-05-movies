import React, { useState, useEffect } from 'react';
import { getSearchMovie } from 'components/servises/fetchMovies';
import { MovieList } from '../components/MovieList';
import { Loader } from '../components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';

const MovieSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [movieSearch, setMovieSearch] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(0);

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return setMovieSearch([]);

    async function getMovie() {
      try {
        setIsLoading(true);
        setIsError(false);

        const movies = await getSearchMovie(query, page);
        console.log(movies.data);

        if (page === 1) {
          setMovieSearch(movies.data.results);
        } else {
          setMovieSearch(prevMovies => [...prevMovies, ...movies.data.results]);
        }
        setIsLoading(false);
        setTotalPages(movies.data.total_pages);
      } catch {
        setIsError(true);
        setIsLoading(false);
      }
    }

    getMovie();
  }, [searchParams, page, query]);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSubmit = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: e.target.value });
  };

  return (
    <div>
      <div className={css.searchbar}>
        <input
          className={css.searchforminput}
          type="text"
          placeholder="Search movie"
          value={query}
          onChange={handleSubmit}
        />
      </div>
      {isLoading && <Loader />}
      {isError ? (
        <span>Error occurred, try again in few seconds</span>
      ) : (
        movieSearch.length > 0 && <MovieList movies={movieSearch} />
      )}
      {movieSearch.length > 0 && totalPages > page && (
        <button className={css.buttonload} type="button" onClick={onLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default MovieSearch;
