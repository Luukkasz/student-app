import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 96px;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: bold;
  border: none;
`;
