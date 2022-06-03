import {
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

  ${mediaQueries[S_BREAKPOINT]} {
    height: 500px;
    flex-direction: row;

    & > div {
      width: 50%;
    }
  }

  ${mediaQueries[M_BREAKPOINT]} {
    height: 700px;
  }

  ${mediaQueries[L_BREAKPOINT]} {
    height: 1000px;
  }
`;

export const ProductDesciptionReview = styled.div`
  width: 100%;
  padding: 30px;
  overflow: auto;
  background-color: white;
  border-radius: 30px;

  ${mediaQueries[S_BREAKPOINT]} {
    border-radius: 30px 0 0 30px;
  }
`;

export const ProductDesciption = styled.p`
  font-weight: 300;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PlusMinusIcon = styled.span`
  font-size: 20px;
  padding-left: 20px;
  cursor: pointer;
`;

export const ReviewTitleContainer = styled.span`
  display: flex;
  align-items: center;
`;

export const ProductCard = styled.div`
  display: flex;
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
  color: #febd09;
  padding-right: 5px;
`;
