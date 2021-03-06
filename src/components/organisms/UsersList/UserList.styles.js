import styled from 'styled-components';

export const WrapperDiv = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 25px;
  padding: 27px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
