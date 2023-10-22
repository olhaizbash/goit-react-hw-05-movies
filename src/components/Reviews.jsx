import React, { useState, useEffect } from 'react';
import { getMovieReviews } from './servises/fetchMovies';
import { useParams } from 'react-router-dom';
import { ReviewItem } from './ReviewItem';

export const Reviews = () => {
  const [reviews, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getReviews() {
      try {
        const reviews = await getMovieReviews(movieId);
        setReview(reviews.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getReviews();
  }, [movieId, reviews]);

  return (
    <ul>
      {reviews.length < 1 && <div>We don't have any review to this movie.</div>}
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <ReviewItem author={author} content={content} />
        </li>
      ))}
    </ul>
  );
};
