import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieItem.module.css';

export const MovieItem = ({ id, poster_path, title }) => {
  const location = useLocation();
  const BASE_IMG = 'https://image.tmdb.org/t/p/w500/';
  const defaultImg =
    'https://media.istockphoto.com/id/1396814518/pl/wektor/obraz-ju%C5%BC-wkr%C3%B3tce-brak-zdj%C4%99cia-brak-miniatury-ilustracja-wektorowa.jpg?s=2048x2048&w=is&k=20&c=bUnbketbTn26iM9fYWY5rgDy5BoQrsToBgHUF2SrePA=';

  return (
    <li className={css.movieitem}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img
          className={css.movieimg}
          src={poster_path ? `${BASE_IMG}${poster_path}` : defaultImg}
          alt={title}
        />
        <p className={css.movietitle}>{title}</p>
      </Link>
    </li>
  );
};
