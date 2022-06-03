import { Review } from '../contexts/types';

/**
 * Sort Reviews by date to show the latests first
 *
 * @param reviews - reviews to sort
 * @returns Array of reviews sorted
 */
const sortReviewsByDate = (reviews: Review[] = []) =>
  reviews.sort((a, b) => b.date.getTime() - a.date.getTime());

export default sortReviewsByDate;
