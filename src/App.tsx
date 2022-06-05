import './App.css';
import AllReviews from './components/all-reviews';
import { BreakpointProvider } from './contexts/breakpoint';
import Product from './components/product';
import React from 'react';
import ReviewForm from './components/review-form';
import { ReviewsProvider } from './contexts/reviews';

const App = () => {
  return (
    <div>
      <BreakpointProvider>
        <ReviewsProvider>
          <Product />
          <div className="otherColorContainer">
            <ReviewForm />
          </div>
          <AllReviews />
        </ReviewsProvider>
      </BreakpointProvider>
    </div>
  );
};

export default App;
