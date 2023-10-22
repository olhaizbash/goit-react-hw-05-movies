import React from 'react';
import { MovieItem } from 'components/MovieItem';
import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  return (
    <ul className={css.movielist}>
      {movies.map(({ id, poster_path, title, name }) => (
        <MovieItem
          key={id}
          id={id}
          poster_path={poster_path}
          title={name ?? title}
        />
      ))}
    </ul>
  );
};
