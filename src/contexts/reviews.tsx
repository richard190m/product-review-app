import { createContext, useEffect, useState } from 'react';
import {
  HandleSubmit,
  Review,
  ReviewProviderProps,
  ReviewsContextInterface,
} from './types';
import MockReviews from '../mocks/MockReviews';

export const ReviewsContext = createContext<ReviewsContextInterface | null>(
  null,
);

export const ReviewsProvider = ({ children }: ReviewProviderProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const handleSubmit: HandleSubmit = review => {
    setReviews([...reviews, review]);
  };

  useEffect(() => {
    // Load Reviews (mocks)
    setReviews(MockReviews);
  }, []);

  return (
    <ReviewsContext.Provider value={{ reviews, submit: handleSubmit }}>
      {children}
    </ReviewsContext.Provider>
  );
};
