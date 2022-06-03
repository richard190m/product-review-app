import calcProductRating from '../calcProductRating';
import MockReviews from '../../mocks/MockReviews';

describe('calcProductRating', () => {
  test('should return correct rating', () => {
    const rating = calcProductRating(MockReviews);

    expect(rating).toEqual(3.3);
  });
});
