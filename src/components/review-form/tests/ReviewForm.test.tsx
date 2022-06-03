import { fireEvent, render } from '@testing-library/react';
import ReviewForm from '../ReviewForm';
import { ReviewsProvider } from '../../../contexts/reviews';

describe('ReviewsForm', () => {
  it('should render correctly', () => {
    const { container } = render(
      <ReviewsProvider>
        <ReviewForm />
      </ReviewsProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render error message when email or ranking not valid', () => {
    const { getByTestId, getByLabelText } = render(
      <ReviewsProvider>
        <ReviewForm />
      </ReviewsProvider>,
    );

    const form = getByTestId('form');

    fireEvent.change(getByLabelText('Email:'), {
      target: { value: 'test' },
    });
    fireEvent.submit(form);

    expect(getByTestId('error-msg')).toHaveTextContent('Email is not valid!');

    // Set valid email to trigger ranking error
    fireEvent.change(getByLabelText('Email:'), {
      target: { value: 'test@test.com' },
    });
    fireEvent.submit(form);

    expect(getByTestId('error-msg')).toHaveTextContent('Ranking is required!');

    // Set ranking to trigger error clean
    fireEvent.click(getByTestId('ranking-3'));
    fireEvent.submit(form);

    expect(getByTestId('error-msg')).toHaveTextContent('');
  });

  it('should submit form when all inputs with content', () => {
    const { getByTestId, getByLabelText } = render(
      <ReviewsProvider>
        <ReviewForm />
      </ReviewsProvider>,
    );

    const form = getByTestId('form');
    const inputName = getByLabelText('Name:');
    const inputEmail = getByLabelText('Email:');
    const inputTitle = getByLabelText('Title:');
    const inputComment = getByLabelText('Comment:');

    fireEvent.change(inputName, {
      target: { value: 'test' },
    });
    fireEvent.change(inputEmail, {
      target: { value: 'test@test.com' },
    });
    fireEvent.click(getByTestId('ranking-3'));
    fireEvent.change(inputTitle, {
      target: { value: 'review' },
    });
    fireEvent.change(inputComment, {
      target: { value: 'review comment' },
    });

    fireEvent.submit(form);

    // If valid, form submited and all inputs cleared
    expect(inputName).toHaveTextContent('');
    expect(inputEmail).toHaveTextContent('');
    expect(inputTitle).toHaveTextContent('');
    expect(inputComment).toHaveTextContent('');
  });
});
