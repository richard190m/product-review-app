import { createContext, useState } from 'react';
import { ReviewProviderProps } from './types';

export const ReviewsContext = createContext({});

export const ReviewsProvider = ({ children }: ReviewProviderProps) => {
  const [reviews, setReviews] = useState([]);
  
  const handleSubmit = (review: never) => {
    setReviews([...reviews, review])
  }

  return (
    <ReviewsContext.Provider value={{ reviews, submit: handleSubmit}}>
      {children}
    </ReviewsContext.Provider>
  )
}