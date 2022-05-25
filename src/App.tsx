import './App.css';
import React from 'react';
import { ReviewsProvider } from './contexts/reviews';

function App() {
  return (
    <div className="App">
      <ReviewsProvider>
        <h1>Product review</h1>
      </ReviewsProvider>
    </div>
  );
}

export default App;
