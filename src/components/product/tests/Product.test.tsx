import { BreakpointProvider } from '../../../contexts/breakpoint';
import Product from '../Product';
import { render } from '@testing-library/react';
import { ReviewsProvider } from '../../../contexts/reviews';

describe('Product', () => {
  test('should render correctly', () => {
    const { container } = render(
      <BreakpointProvider>
        <ReviewsProvider>
          <Product />
        </ReviewsProvider>
      </BreakpointProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
