import React from 'react';
import { ThemeProvider as ScThemeProvider } from 'styled-components';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalStyle from '../GlobalStyle';
import theme from './theme';
import muiTheme from './muiTheme';

const ThemeProvider: React.FC = ({ children }) => {
  const modifiedTheme = {
    ...theme,
    palette: {
      ...theme.palette,
      primary: {
        ...theme.palette.primary,
      },
      type: 'light',
    },
  };

  const modifiedMuiTheme = createMuiTheme({
    ...muiTheme,
    palette: {
      ...muiTheme.palette,
      primary: {
        ...theme.palette.primary,
      },
      text: {
        ...muiTheme.palette.text,
        primary: 'rgba(0, 0, 0, 0.87)',
      },
      type: 'light',
    },
  });

  return (
    <ScThemeProvider theme={modifiedTheme}>
      <MuiThemeProvider theme={createMuiTheme(modifiedMuiTheme)}>
        <CssBaseline />
        <GlobalStyle />
        {children}
      </MuiThemeProvider>
    </ScThemeProvider>
  );
};

export default ThemeProvider;
