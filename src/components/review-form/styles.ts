import { M_BREAKPOINT, mediaQueries } from '../../theme/variables';
import styled, { css } from 'styled-components';
import { ReviewContainerProps } from './types';
import { Star as StarSolid } from '@styled-icons/boxicons-solid';

const buttonStyles = css`
  width: 50%;
  padding: 10px 20px;
  font-size: 16px;
  flex: 1;
`;

export const Container = styled.div<ReviewContainerProps>`
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

export const StarFilled = styled(StarSolid)`
  width: 30px;
  color: #febd09;
`;

export const StarStyled = styled(StarSolid)`
  width: 30px;
  color: #ededed;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Error = styled.p`
  color: red;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;

  ${mediaQueries[M_BREAKPOINT]} {
    max-width: 500px;
  }
`;

export const SubmitButton = styled.input`
  ${buttonStyles}
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const ClearButton = styled.button`
  ${buttonStyles}
  background-color: white;
  color: black;
  margin-left: 20px;
  cursor: pointer;
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

export const InputStyled = styled.input`
  margin-top: 5px;
  padding: 10px;
  width: 50%;
`;

export const Textarea = styled.textarea`
  width: 90%;
  margin-top: 5px;
  padding: 10px;
`;
