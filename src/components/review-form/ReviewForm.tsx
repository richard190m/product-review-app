import React, { useContext } from 'react'
import { ReviewsContext } from '../../contexts/reviews';

const ReviewForm = () => {
  const { submit } = useContext(ReviewsContext)

  const handleFormSubmit = ev => {
    ev.preventDefaul();

    submit({});
  }

  return (
    <>
      <h3>Write a review</h3>
      <form onSubmit={handleFormSubmit}>
        <div>ReviewForm</div>
      </form>
    </>
  )
}

export default ReviewForm;