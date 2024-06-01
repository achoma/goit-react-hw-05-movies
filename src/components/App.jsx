import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header/header';
import Home from './home/home';

// Zmienione importy na dynamiczne ładowanie
const Movies = lazy(() => import('./movies/movies'));
const MovieDetails = lazy(() => import('./movies/movieid'));
const Cast = lazy(() => import('./cast/cast'));
const Reviews = lazy(() => import('./reviews/reviews'));

export const App = () => {
  return (
    <BrowserRouter basename="goit-react-hw-05-movies">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
