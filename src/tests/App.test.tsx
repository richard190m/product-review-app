import { render, screen } from '@testing-library/react';
import App from '../App';
import React from 'react';

jest.mock('../components/product', () => () => <div>Product Area</div>);
jest.mock('../components/all-reviews', () => () => (
  <div>All reviews and trends Area</div>
));

describe('App', () => {
  test('renders learn react link', () => {
    render(<App />);

    const productArea = screen.getByText('Product Area');
    const reviewsTrendsArea = screen.getByText('All reviews and trends Area');

    expect(productArea).toBeInTheDocument();
    expect(reviewsTrendsArea).toBeInTheDocument();
  });
});
