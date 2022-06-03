import { Happy, Meh, Sad } from '@styled-icons/boxicons-regular';
import { Star as StarSolid } from '@styled-icons/boxicons-solid';
import styled from 'styled-components';

export const ReviewStyled = styled.div`
  display: flex;
`;

export const Author = styled.div`
  width: 60px;
  margin: 20px;
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
  color: #febd09;
`;

export const StarStyled = styled(StarSolid)`
  width: 30px;
  color: #ededed;
`;

export const CommentArea = styled.div`
  background-color: #dedede;
  padding: 20px;
  border-radius: 10px;
`;

export const Comment = styled.p`
  font-size: 14px;
  font-weight: 300;
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
