import {
  AllContainer,
  Reviews,
  ReviewsContainer,
  ReviewsTitle,
} from './styles';
import React, { useContext } from 'react';
import Review from '../review';
import { ReviewsContext } from '../../contexts/reviews';
import sortReviewsByDate from '../../utils/sortReviewsByDate';
import Trends from '../trends';

const AllReviews = () => {
  const reviewsContext = useContext(ReviewsContext);
  sortReviewsByDate(reviewsContext?.reviews);

  return (
    <AllContainer>
      <Trends />
      <Reviews>
        <ReviewsTitle>Reviews</ReviewsTitle>
        <ReviewsContainer>
          {reviewsContext?.reviews.map((review, index) => (
            <Review data={review} key={index} />
          ))}
        </ReviewsContainer>
      </Reviews>
    </AllContainer>
  );
};

export default AllReviews;
