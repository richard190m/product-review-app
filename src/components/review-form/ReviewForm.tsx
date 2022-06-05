import {
  ButtonsContainer,
  ClearButton,
  Container,
  Error,
  FormStyled,
  InputStyled,
  LabelStyled,
  StarFilled,
  StarStyled,
  SubmitButton,
  Textarea,
  Title,
} from './styles';
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Review } from '../../contexts/types';
import { ReviewsContext } from '../../contexts/reviews';

const INITIAL_STATE_REVIEW = {
  name: '',
  email: '',
  rating: 0,
  title: '',
  comment: '',
  date: new Date(),
};
const INITIAL_STATE_RATINGS = new Array(5).fill(false);

const ReviewForm = ({ visible = true }) => {
  const reviewsContext = useContext(ReviewsContext);
  const [ratings, setRatings] = useState(INITIAL_STATE_RATINGS);
  const [values, setValues] = useState<Review>(INITIAL_STATE_REVIEW);
  const [formError, setFormError] = useState('');

  const valideEmail = (email: string) => {
    const regExpEmail = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]*$/);
    return regExpEmail.test(email);
  };

  const valideRanking = () => ratings.some(value => value === true);

  const isFormValid = () => {
    if (!valideEmail(values.email)) {
      setFormError('* Email is not valid!');
      return false;
    }

    if (!valideRanking()) {
      setFormError('* Ranking is required!');
      return false;
    }

    // set form error to initial state
    setFormError('');
    return true;
  };

  const cleanForm = () => {
    setValues(INITIAL_STATE_REVIEW);
    setRatings(INITIAL_STATE_RATINGS);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (isFormValid()) {
      const review = {
        ...values,
        rating: ratings.lastIndexOf(true) + 1,
        date: new Date(),
      };

      reviewsContext?.submit(review);

      // Clean form after submition
      cleanForm();
    }
  };

  const handleClickRating = (value: number) => {
    setRatings(ratings.map((rating, index) => index <= value));
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <Container show={visible} data-testid="review-form" id="review-form">
      <Title>Make a review</Title>
      <FormStyled onSubmit={handleFormSubmit} data-testid="form">
        <LabelStyled>
          Name:
          <InputStyled
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
            placeholder="Name"
            required
          />
        </LabelStyled>
        <LabelStyled>
          Email:
          <InputStyled
            type="email"
            name="email"
            value={values.email}
            onChange={onChange}
            placeholder="Email"
            required
          />
        </LabelStyled>
        <LabelStyled>
          Rating:
          <div>
            {ratings.map((value, index) =>
              value ? (
                <StarFilled
                  key={index}
                  data-testid={`ranking-${index}`}
                  onClick={() => handleClickRating(index)}
                />
              ) : (
                <StarStyled
                  key={index}
                  data-testid={`ranking-${index}`}
                  onClick={() => handleClickRating(index)}
                />
              ),
            )}
          </div>
        </LabelStyled>
        <LabelStyled>
          Title:
          <InputStyled
            type="text"
            name="title"
            value={values.title}
            onChange={onChange}
            placeholder="Comment Title"
            required
          />
        </LabelStyled>
        <LabelStyled>
          Comment:
          <Textarea
            name="comment"
            value={values.comment}
            onChange={onChangeTextArea}
            placeholder="Comment"
            rows={5}
            required
          />
        </LabelStyled>
        <Error data-testid="error-msg">{formError}</Error>
        <ButtonsContainer>
          <SubmitButton type="submit" value="Save review" />
          <ClearButton onClick={cleanForm}>Clear review</ClearButton>
        </ButtonsContainer>
      </FormStyled>
    </Container>
  );
};

ReviewForm.propTypes = {
  visible: PropTypes.bool,
};

export default ReviewForm;
