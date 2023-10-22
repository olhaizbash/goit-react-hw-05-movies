import React from 'react';
import css from './Actors.module.css';

export const Actors = ({ name, profile_path, character }) => {
  const BASE_IMG = 'https://image.tmdb.org/t/p/w500/';
  const defaultImg =
    'https://media.istockphoto.com/id/1396814518/pl/wektor/obraz-ju%C5%BC-wkr%C3%B3tce-brak-zdj%C4%99cia-brak-miniatury-ilustracja-wektorowa.jpg?s=2048x2048&w=is&k=20&c=bUnbketbTn26iM9fYWY5rgDy5BoQrsToBgHUF2SrePA=';
  return (
    <div>
      <img
        className={css.img}
        src={profile_path ? `${BASE_IMG}${profile_path}` : defaultImg}
        alt={name}
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </div>
  );
};
