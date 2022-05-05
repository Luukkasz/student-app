import styled from 'styled-components';

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  gap: 24px;
  position: relative;
  padding: 33px 0 26px 12px;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

export const StyledAverageDiv = styled.div`
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value <= 3) return theme.colors.error;
  }};
  border-radius: 50%;
`;

export const StyledInfoDiv = styled.div`
  .user__name {
    display: flex;
    gap: 14px;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  .user__attendance {
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
