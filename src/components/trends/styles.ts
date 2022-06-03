import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
`;

export const MenuButton = styled.button`
  border: 0;
  border-radius: 0;
  padding: 10px 20px;
  font-size: 14px;
  background-color: white;
  color: black;
  cursor: pointer;

  :disabled {
    border-bottom: 2px solid black;
    color: black;
  }

  :hover {
    transform: scale(1.1);
  }
`;

export const TrendsTitle = styled.h2`
  text-align: right;
`;

export const ChartsContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;
