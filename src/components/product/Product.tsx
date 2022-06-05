import {
  Container,
  DescriptionContainer,
  InRating,
  ProductBrand,
  ProductDesciption,
  ProductDesciptionReview,
  ProductName,
  Rating,
  ReviewButton,
  StarMain,
} from './styles';
import React, { useContext } from 'react';
import calcProductRating from '../../utils/calcProductRating';
import ImageCard from '../image-card';
import MockProduct from '../../mocks/MockProductInfo';
import { ReviewsContext } from '../../contexts/reviews';

const Product = () => {
  const reviewsContext = useContext(ReviewsContext);
  const { brand, name, description, price } = MockProduct;
  const productRating = calcProductRating(reviewsContext?.reviews);

  return (
    <Container>
      <ProductDesciptionReview>
        <ProductName>{name.toUpperCase()}</ProductName>
        <ProductBrand>{brand.toUpperCase()}</ProductBrand>
        <Rating>
          <StarMain />
          {productRating}
          <InRating>{' /5 starts'}</InRating>
        </Rating>
        <DescriptionContainer data-testid="description">
          <ProductDesciption>{description}</ProductDesciption>
          <p>{price}</p>
        </DescriptionContainer>
        <ReviewButton href="#review-form">Review Product</ReviewButton>
      </ProductDesciptionReview>
      <ImageCard />
    </Container>
  );
};

export default Product;
