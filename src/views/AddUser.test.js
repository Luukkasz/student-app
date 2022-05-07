import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithProviders } from '../helpers/renderWithThemeProvider';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { screen, fireEvent } from '@testing-library/react';

describe('Form Field', () => {
  it('Renders the component', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Emil' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Emil');
  });
});
