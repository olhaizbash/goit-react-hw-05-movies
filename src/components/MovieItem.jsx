import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieItem.module.css';

export const MovieItem = ({ id, poster_path, title }) => {
  const location = useLocation();
  const BASE_IMG = 'https://image.tmdb.org/t/p/w500';

  return (
    <li className={css.movieitem}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img
          className={css.movieimg}
          src={`${BASE_IMG}${poster_path}`}
          alt={title}
        />
        <p className={css.movietitle}>{title}</p>
      </Link>
    </li>
  );
};
