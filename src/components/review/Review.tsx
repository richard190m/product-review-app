import {
  Author,
  Comment,
  CommentArea,
  DateStyled,
  IconHappy,
  IconMeh,
  IconSad,
  InfoReview,
  Rating,
  ReviewStyled,
  StarFilled,
  StarStyled,
} from './styles';
import React, { useEffect, useState } from 'react';
import formatDate from '../../utils/formatDate';
import PropTypes from 'prop-types';
import { ReviewProps } from './types';

const Review = ({ data }: ReviewProps) => {
  const [ratings, setRatings] = useState(new Array(5).fill(false));
  const { rating, name, title, comment, date } = data;
  const dateFormated = formatDate(date);

  useEffect(() => {
    setRatings(ratings.map((item, index) => index <= rating - 1));
  }, [rating]);

  return (
    <ReviewStyled>
      <Author>
        {rating < 3 ? <IconSad /> : rating > 3 ? <IconHappy /> : <IconMeh />}
        <p>{name}</p>
      </Author>
      <InfoReview>
        <Rating>
          {ratings.map((value, index) =>
            value ? <StarFilled key={index} /> : <StarStyled key={index} />,
          )}
          <DateStyled>{`(${dateFormated})`}</DateStyled>
        </Rating>
        <CommentArea>
          <p>{title}</p>
          <Comment>{comment}</Comment>
        </CommentArea>
      </InfoReview>
    </ReviewStyled>
  );
};

Review.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Review;
