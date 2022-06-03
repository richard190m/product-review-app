import {
  buttonStyles,
  colors,
  mediaQueries,
  S_BREAKPOINT,
} from '../../theme/variables';
import { ReviewContainerProps } from './types';
import { Star as StarSolid } from '@styled-icons/boxicons-solid';
import styled from 'styled-components';

export const Container = styled.section<ReviewContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 30px 30px 50px;
`;

export const Title = styled.h2`
  align-self: left;
  font-size: 30px;
`;

export const StarFilled = styled(StarSolid)`
  width: 30px;
  color: ${colors.yellow};
`;

export const StarStyled = styled(StarSolid)`
  width: 30px;
  color: ${colors.lightGray};
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Error = styled.p`
  color: red;
`;

export const ButtonsContainer = styled.div``;

export const SubmitButton = styled.input`
  ${buttonStyles}
  background-color: ${colors.lightOrange};
  color: ${colors.white};
  cursor: pointer;
  margin-right: 20px;

  ${mediaQueries[S_BREAKPOINT]} {
    width: 200px;
  }
`;

export const ClearButton = styled.button`
  ${buttonStyles}
  background-color: ${colors.white};
  color: black;
  cursor: pointer;

  ${mediaQueries[S_BREAKPOINT]} {
    width: 200px;
  }
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const InputStyled = styled.input`
  margin-top: 5px;
  padding: 10px;

  ${mediaQueries[S_BREAKPOINT]} {
    width: 50%;
  }
`;

export const Textarea = styled.textarea`
  margin-top: 5px;
  padding: 10px;

  ${mediaQueries[S_BREAKPOINT]} {
    width: 60%;
  }
`;
