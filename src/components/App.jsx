import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { SharedLayout } from './SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Movie = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const NotFound = lazy(() => import('./NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
