import { ReactNode } from 'react';

// Reviews
export interface ReviewProviderProps {
  children: ReactNode;
}

export interface Review {
  name: string;
  email: string;
  rating: number;
  title: string;
  comment: string;
  date: Date;
}

export interface HandleSubmit {
  // eslint-disable-next-line no-unused-vars
  (review: Review): void;
}

export interface ReviewsContextInterface {
  reviews: Review[];
  submit: HandleSubmit;
}

// Breakpoint
export interface BreakpointProviderProps {
  children: ReactNode;
}

export interface BreakpointContextInterface {
  breakpoint: string;
}
