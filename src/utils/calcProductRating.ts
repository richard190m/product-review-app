import { Review } from '../contexts/types';

const calcProductRating = (reviews: Review[] = []) => {
  const productSumRatings =
    reviews.reduce((partialSum, review) => partialSum + review.rating, 0) || 0;

  return Math.round((productSumRatings / (reviews.length || 1)) * 10) / 10;
};

export default calcProductRating;
