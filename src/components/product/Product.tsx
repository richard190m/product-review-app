import {
  Container,
  DescriptionContainer,
  InRating,
  PlusMinusIcon,
  ProductCard,
  ProductDesciption,
  ProductDesciptionReview,
  Rating,
  ReviewTitleContainer,
  StarMain,
} from './styles';
import {
  L_BREAKPOINT,
  M_BREAKPOINT,
  S_BREAKPOINT,
} from '../../theme/variables';
import React, { useContext, useEffect, useState } from 'react';
import { BreakpointContext } from '../../contexts/breakpoint';
import ImageCard from './image-card';
import MockProduct from '../../mocks/MockProductInfo';
import ReviewForm from '../review-form';
import { ReviewsContext } from '../../contexts/reviews';

const MENUS = ['descripion', 'review'];

const Product = () => {
  const breakpointContext = useContext(BreakpointContext);
  const reviewsContext = useContext(ReviewsContext);
  const [showDescription, setShowDescription] = useState(true);
  const [showReview, setShowReview] = useState(true);
  const { brand, name, description, price } = MockProduct;
  const breakpoint = breakpointContext?.breakpoint || L_BREAKPOINT;
  const productSumRatings =
    reviewsContext?.reviews.reduce(
      (partialSum, review) => partialSum + review.rating,
      0,
    ) || 0;
  const productRating =
    Math.round(
      (productSumRatings / (reviewsContext?.reviews.length || 1)) * 10,
    ) / 10;

  useEffect(() => {
    if (breakpoint === S_BREAKPOINT || breakpoint === M_BREAKPOINT) {
      setShowDescription(false);
      setShowReview(true);
    } else {
      setShowDescription(true);
      setShowReview(true);
    }
  }, [breakpoint]);

  const handleShowMenu = (menu: string) => {
    switch (menu) {
      case MENUS[0]: {
        if (showDescription) {
          setShowDescription(false);
        } else {
          setShowDescription(true);
          setShowReview(false);
        }
        break;
      }
      case MENUS[1]: {
        if (showReview) {
          setShowReview(false);
        } else {
          setShowDescription(false);
          setShowReview(true);
        }
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <Container>
      <ImageCard brand={brand.toUpperCase()} alt={name} />
      <ProductCard>
        <ProductDesciptionReview>
          <h1>{name.toUpperCase()}</h1>
          <Rating>
            <StarMain />
            {productRating}
            <InRating>{' /5 starts'}</InRating>
          </Rating>
          {(breakpoint === S_BREAKPOINT || breakpoint === M_BREAKPOINT) && (
            <DescriptionContainer>
              <h3>DESCRIPTION</h3>
              <PlusMinusIcon
                data-testid="plus-minus-description"
                onClick={() => handleShowMenu(MENUS[0])}
              >
                {showDescription ? '-' : '+'}
              </PlusMinusIcon>
            </DescriptionContainer>
          )}
          {showDescription && (
            <div data-testid="description">
              <ProductDesciption>{description}</ProductDesciption>
              <p>{price}</p>
            </div>
          )}
          <ReviewTitleContainer>
            <h3>MAKE A REVIEW</h3>
            {(breakpoint === S_BREAKPOINT || breakpoint === M_BREAKPOINT) && (
              <PlusMinusIcon
                data-testid="plus-minus-review"
                onClick={() => handleShowMenu(MENUS[1])}
              >
                {showReview ? '-' : '+'}
              </PlusMinusIcon>
            )}
          </ReviewTitleContainer>
          <ReviewForm visible={showReview} />
        </ProductDesciptionReview>
      </ProductCard>
    </Container>
  );
};

export default Product;
