import './App.css';
import AllReviews from './components/all-reviews';
import { BreakpointProvider } from './contexts/breakpoint';
import Product from './components/product';
import React from 'react';
import { ReviewsProvider } from './contexts/reviews';

const App = () => {
  return (
    <div className="App">
      <BreakpointProvider>
        <ReviewsProvider>
          <Product />
          <AllReviews />
        </ReviewsProvider>
      </BreakpointProvider>
    </div>
  );
};

export default App;
