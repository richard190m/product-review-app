import {
  AllContainer,
  Reviews,
  ReviewsContainer,
  TrendsStyled,
} from './styles';
import React, { useContext } from 'react';
import Review from './Review/Review';
import { ReviewsContext } from '../../contexts/reviews';

const AllReviews = () => {
  const reviewsContext = useContext(ReviewsContext);

  return (
    <AllContainer>
      <Reviews>
        <h2>Reviews</h2>
        <ReviewsContainer>
          {reviewsContext?.reviews.map((review, index) => (
            <Review data={review} key={index} />
          ))}
        </ReviewsContainer>
      </Reviews>
      <TrendsStyled />
    </AllContainer>
  );
};

export default AllReviews;
