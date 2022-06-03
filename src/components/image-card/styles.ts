import { colors, mediaQueries, S_BREAKPOINT } from '../../theme/variables';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${mediaQueries[S_BREAKPOINT]} {
    height: auto;
  }
`;

interface ImgProps {
  url: string;
}

export const Img = styled.div<ImgProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  border-radius: 30px 30px 0 0;
  background-color: ${colors.darkBlue};
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(
      to bottom,
      transparent 0%,
      ${colors.darkBlue} 100%
    ),
    url(${({ url }) => url});

  ${mediaQueries[S_BREAKPOINT]} {
    width: 80%;
    height: 90%;
    position: relative;
    border-radius: 30px 30px 0 0;
    background-position: 100% 100%;
    background-image: linear-gradient(
        to bottom,
        transparent 0%,
        ${colors.default} 100%
      ),
      url(${({ url }) => url});
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
