import { Happy, Meh, Sad } from '@styled-icons/boxicons-regular';
import { colors } from '../../theme/variables';
import { Star as StarSolid } from '@styled-icons/boxicons-solid';
import styled from 'styled-components';

export const ReviewStyled = styled.div`
  display: flex;
`;

export const Author = styled.div`
  width: 60px;
  margin: 20px;
  word-break: break-all;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const IconSad = styled(Sad)`
  width: 30px;
`;

export const IconMeh = styled(Meh)`
  width: 30px;
`;

export const IconHappy = styled(Happy)`
  width: 30px;
`;

export const InfoReview = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: 100%;
`;

export const StarFilled = styled(StarSolid)`
  width: 30px;
  color: ${colors.yellow};
`;

export const StarStyled = styled(StarSolid)`
  width: 30px;
  color: ${colors.lightGray};
`;

export const CommentArea = styled.div`
  background-color: ${colors.darkBlue};
  color: ${colors.blue};
  padding: 10px 20px;
  border-radius: 30px;
`;

export const Comment = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: ${colors.gray};
`;

export const DateStyled = styled.span`
  font-size: 14px;
  font-weight: 300;
  padding-left: 10px;
  color: gray;
`;

export const Rating = styled.p`
  display: flex;
  align-items: center;
`;
