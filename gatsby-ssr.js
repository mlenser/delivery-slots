import React from 'react';
import ThemeProvider from './src/components/ThemeProvider';

// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
