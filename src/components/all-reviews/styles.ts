import {
  L_BREAKPOINT,
  M_BREAKPOINT,
  mediaQueries,
  S_BREAKPOINT,
} from '../../theme/variables';
import styled from 'styled-components';

export const AllContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 30px;

  ${mediaQueries[S_BREAKPOINT]} {
    height: 600px;
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

export const Reviews = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewsTitle = styled.h2`
  text-align: right;
`;

export const ReviewsContainer = styled.div`
  overflow: auto;
  max-height: 800px;

  ${mediaQueries[S_BREAKPOINT]} {
    height: auto;
    max-height: 100%;
  }
`;
