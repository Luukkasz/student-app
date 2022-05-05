import styled from 'styled-components';

export const WrapperDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 500px;
  padding: 27px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

export const StyledListUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
