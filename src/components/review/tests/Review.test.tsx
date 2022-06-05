import MockReviews from '../../../mocks/MockReviews';
import { render } from '@testing-library/react';
import Review from '../Review';

describe('Review', () => {
  test('should render correctly', () => {
    const { container } = render(<Review data={MockReviews[0]} />);

    expect(container).toMatchSnapshot();
  });
});
