import {
  buttonStyles,
  colors,
  L_BREAKPOINT,
  M_BREAKPOINT,
  mediaQueries,
  S_BREAKPOINT,
} from '../../theme/variables';
import { Star } from '@styled-icons/boxicons-solid';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 600px;

  ${mediaQueries[S_BREAKPOINT]} {
    height: fit-content;
    min-height: 600px;
    flex-direction: row;

    & > div {
      width: 50%;
    }
  }

  ${mediaQueries[L_BREAKPOINT]} {
    height: 600px;
  }

  ${mediaQueries[L_BREAKPOINT]} {
    height: 800px;
  }
`;

export const ProductName = styled.h1`
  font-size: 50px;
  margin-bottom: 10px;
`;

export const ProductDesciptionReview = styled.div`
  width: 90%;
  align-self: center;
  position: absolute;
  z-index: 1;

  ${mediaQueries[S_BREAKPOINT]} {
    position: relative;
    margin: 30px;
  }

  ${mediaQueries[M_BREAKPOINT]} {
    margin: 0;
  }
`;

export const ProductDesciption = styled.p`
  font-weight: 300;
  padding-bottom: 20px;
`;

export const ProductBrand = styled.p`
  font-weight: 300;
  color: ${colors.gray};
`;
export const DescriptionContainer = styled.div`
  padding: 30px 0;
`;

export const PlusMinusIcon = styled.span`
  font-size: 20px;
  padding-left: 20px;
  cursor: pointer;
`;

export const InRating = styled.span`
  font-weight: 300;
  color: gray;
  font-size: 12px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

export const StarMain = styled(Star)`
  width: 30px;
  color: ${colors.yellow};
  padding-right: 5px;
`;

export const ReviewButton = styled.a`
  ${buttonStyles}
  background-color: ${colors.lightOrange};
  color: white;
`;
