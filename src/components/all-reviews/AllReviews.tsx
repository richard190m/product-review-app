import {
  AllContainer,
  Reviews,
  ReviewsContainer,
  TrendsStyled,
} from './styles';
import React, { useContext } from 'react';
import Review from './Review/Review';
import { ReviewsContext } from '../../contexts/reviews';
import sortReviewsByDate from '../../utils/sortReviewsByDate';

const AllReviews = () => {
  const reviewsContext = useContext(ReviewsContext);
  const reviews = sortReviewsByDate(reviewsContext?.reviews);

  return (
    <AllContainer>
      <Reviews>
        <h2>Reviews</h2>
        <ReviewsContainer>
          {reviews.map((review, index) => (
            <Review data={review} key={index} />
          ))}
        </ReviewsContainer>
      </Reviews>
      <TrendsStyled />
    </AllContainer>
  );
};

export default AllReviews;
