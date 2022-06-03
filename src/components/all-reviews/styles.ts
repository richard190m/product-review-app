import {
  L_BREAKPOINT,
  M_BREAKPOINT,
  mediaQueries,
  S_BREAKPOINT,
} from '../../theme/variables';
import styled from 'styled-components';
import Trends from '../trends';

export const AllContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 30px;
  padding: 10px;
  margin-top: 10px;

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

export const Reviews = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dedede;

  ${mediaQueries[S_BREAKPOINT]} {
    border-right: 1px solid #dedede;
    border-bottom: 0;
  }
`;

export const TrendsStyled = styled(Trends)`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

export const ReviewsContainer = styled.div`
  overflow: auto;
  max-height: 800px;

  ${mediaQueries[S_BREAKPOINT]} {
    height: auto;
    max-height: 100%;
  }
`;
