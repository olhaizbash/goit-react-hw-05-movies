import React from 'react';
import css from './Actors.module.css';

export const Actors = ({ name, profile_path, character }) => {
  const BASE_IMG = 'https://image.tmdb.org/t/p/w500';
  return (
    <div>
      <img className={css.img} src={`${BASE_IMG}${profile_path}`} alt={name} />
      <p>{name}</p>
      <p>Character: {character}</p>
    </div>
  );
};
