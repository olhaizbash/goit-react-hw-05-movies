import { useState, useEffect } from 'react';
import { getMovieTrends } from 'components/servises/fetchMovies';
import { MovieList } from 'components/MovieList';
import { Loader } from '../components/Loader/Loader';
import css from './Home.module.css';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const movies = await getMovieTrends();
        setIsLoading(false);
        setTrendMovies(movies.data.results);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    }

    getMovies();
  }, []);
  return (
    <div>
      <h2 className={css.category}>Trending today</h2>
      {isLoading && <Loader />}
      <MovieList movies={trendMovies} />
    </div>
  );
};

export default Home;
