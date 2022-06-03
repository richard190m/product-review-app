import { cleanup, fireEvent, render } from '@testing-library/react';
import { ReviewsProvider } from '../../../contexts/reviews';
import Trends from '../Trends';

const renderTrends = () =>
  render(
    <ReviewsProvider>
      <Trends />
    </ReviewsProvider>,
  );

describe('Trends', () => {
  afterEach(cleanup);
  test('should render correctly', () => {
    const { container, getByTestId } = renderTrends();

    expect(container).toMatchSnapshot();
    expect(getByTestId('doughnut-chart')).toBeInTheDocument();
  });

  test('should show line chart when click on menu 6 months chart', () => {
    const { getByTestId } = renderTrends();

    // Click to show 6 months chart
    fireEvent.click(getByTestId('6months-button'));

    expect(getByTestId('line-chart')).toBeInTheDocument();
  });
});
