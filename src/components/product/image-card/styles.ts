import { mediaQueries, S_BREAKPOINT } from '../../../theme/variables';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  position: relative;

  ${mediaQueries[S_BREAKPOINT]} {
    padding-top: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  border-radius: 0 0 30px 30px;
  background-color: gray;

  ${mediaQueries[S_BREAKPOINT]} {
    position: relative;
    border-radius: 0 30px 30px 0;
  }
`;

export const Brand = styled.span`
  position: absolute;
  color: white;
  right: 0;
  bottom: 0;
  padding: 20px 30px;

  &:after {
    content: '________';
    width: 100px;
    padding-left: 10px;
  }
`;
