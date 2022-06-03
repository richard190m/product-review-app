import AllReviews from '../AllReviews';
import { render } from '@testing-library/react';
import { ReviewsProvider } from '../../../contexts/reviews';

jest.mock('../../trends', () => () => <div>Trends</div>);

describe('AllReviews', () => {
  test('should render correctly', () => {
    const { container } = render(
      <ReviewsProvider>
        <AllReviews />
      </ReviewsProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
