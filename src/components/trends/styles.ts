import { colors, mediaQueries, S_BREAKPOINT } from '../../theme/variables';
import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;

  ${mediaQueries[S_BREAKPOINT]} {
    height: auto;
  }
`;

export const MenuButton = styled.button`
  border: 0;
  border-radius: 0;
  padding: 10px 20px;
  font-size: 14px;
  color: ${colors.gray};
  cursor: pointer;
  background-color: transparent;

  :disabled {
    border-bottom: 1px solid ${colors.lightOrange};
    color: ${colors.lightOrange};
  }

  :hover {
    transform: scale(1.1);
  }
`;

export const TrendsTitle = styled.h2``;

export const ChartsContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  // border-bottom: 1px solid #dedede;

  // ${mediaQueries[S_BREAKPOINT]} {
  //   border-right: 1px solid #dedede;
  //   border-bottom: 0;
  // }
`;
