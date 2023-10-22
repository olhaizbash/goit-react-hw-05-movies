import { useState, useEffect, useRef, Suspense } from 'react';
import { getMovieDetails } from './servises/fetchMovies';
import { Loader } from './Loader/Loader';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetailsData, setMovieDetailsData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const BASE_IMG = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();
  const linkBack = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoading(true);
        const data = await getMovieDetails(movieId);
        setMovieDetailsData(data.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    }
    getMovie();
  }, [movieId]);
  return (
    <div>
      <div className={css.container}>
        <Link to={linkBack.current}>
          <button className={css.buttonback}>Go back</button>
        </Link>
        {isLoading && <Loader />}
        {isError && <span>Something went wrong, please, try again later</span>}
        {movieDetailsData && (
          <div>
            <div className={css.infomovie}>
              <div>
                <img
                  src={`${BASE_IMG}${movieDetailsData.poster_path}`}
                  alt={movieDetailsData.title}
                />
              </div>

              <div className={css.infotext}>
                <div>
                  <h3>Overview:</h3>
                  <p>{movieDetailsData.overview}</p>
                </div>
                <div>
                  <h3>Genres:</h3>
                  {movieDetailsData.genres.map(({ id, name }) => (
                    <p key={id}>{name}</p>
                  ))}
                </div>
                <div>
                  <h3>Avarage:</h3>
                  <p>{movieDetailsData.vote_average}</p>
                </div>
                <div>
                  <h3>Release Date: </h3>
                  <p>{movieDetailsData.release_date}</p>
                </div>
              </div>
            </div>
            <div className={css.addisec}>
              <h2>Additional information</h2>
              <ul>
                <li>
                  <Link className={css.additional} to={'cast'}>
                    Cast
                  </Link>
                </li>
                <li>
                  <Link className={css.additional} to={'reviews'}>
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;
