import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCats } from './servises/fetchMovies';
import { Actors } from 'components/Actors';
import css from './Cats.module.css';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        const cast = await getMovieCats(movieId);
        setCast(cast.data.cast);
      } catch (error) {
        console.log(error.message);
      }
    }

    getMovie();
  }, [movieId]);

  return (
    <div>
      <h2>Cast:</h2>
      <ul className={css.catslist}>
        {cast.map(({ id, name, profile_path, character }) => (
          <li key={id} className={css.catsitem}>
            <Actors
              name={name}
              profile_path={profile_path}
              character={character}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
