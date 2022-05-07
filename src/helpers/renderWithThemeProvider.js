import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { UsersProvider } from '../providers/UsersProvider';

//Dzięki temu podczas testow mamy dostep do Providerow
//Uzywamy tej funkcji zamiast render z testing library
export const renderWithProviders = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      <UsersProvider>{children}</UsersProvider>
    </ThemeProvider>
  );
};
