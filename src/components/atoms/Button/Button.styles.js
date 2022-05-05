import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey};
  color: white;
  border-radius: 50%;
  border: none;

  svg {
    width: 55%;
    height: 55%;
  }
`;
