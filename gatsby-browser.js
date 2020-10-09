import React from 'react';
import ThemeProvider from './src/components/ThemeProvider';

export const onServiceWorkerUpdateReady = () => {
  console.log('reloading page');
  window.location.reload();
};

export const wrapPageElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
