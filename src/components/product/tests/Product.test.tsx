import { fireEvent, render } from '@testing-library/react';
import { BreakpointProvider } from '../../../contexts/breakpoint';
import Product from '../Product';
import { ReviewsProvider } from '../../../contexts/reviews';

const resizeWindow = (width: number, height: number) => {
  global.window.innerWidth = width;
  global.window.innerHeight = height;
  global.window.dispatchEvent(new Event('resize'));
};

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

  test('should show plus and minus icon when breakpoint e small or medium', async () => {
    // Set window width and height to render as mobile
    resizeWindow(800, 300);

    const { getByTestId } = render(
      <BreakpointProvider>
        <ReviewsProvider>
          <Product />
        </ReviewsProvider>
      </BreakpointProvider>,
    );

    expect(getByTestId('plus-minus-description')).toBeInTheDocument();
    expect(getByTestId('plus-minus-review')).toBeInTheDocument();
  });

  test('should show/hide menus when click plus-minus button', async () => {
    // Set window width and height to render as mobile
    resizeWindow(800, 300);

    const { getByTestId, queryByTestId } = render(
      <BreakpointProvider>
        <ReviewsProvider>
          <Product />
        </ReviewsProvider>
      </BreakpointProvider>,
    );

    const buttonDescription = getByTestId('plus-minus-description');
    const buttonReview = getByTestId('plus-minus-review');
    const description = queryByTestId('description');
    const ReviewForm = queryByTestId('review-form');

    // Show Description
    fireEvent.click(buttonDescription);
    expect(description).toBeDefined();
    // Hide Description
    fireEvent.click(buttonDescription);
    expect(description).toBeNull;

    // Show Review Form
    fireEvent.click(buttonReview);
    expect(ReviewForm).toBeDefined();
    // Hide Review Form
    fireEvent.click(buttonReview);
    expect(ReviewForm).not.toBeNull;
  });
});
