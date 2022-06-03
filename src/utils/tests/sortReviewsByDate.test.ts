import MockReviews from '../../mocks/MockReviews';
import sortReviewsByDate from '../sortReviewsByDate';

describe('sortReviewsByDate', () => {
  test('should return latest reviews first', () => {
    const reviews = [...MockReviews];
    sortReviewsByDate(reviews);

    expect(reviews[0]).toEqual(MockReviews[2]);
  });
});
