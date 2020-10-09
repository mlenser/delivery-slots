import theme from './theme';

const muiTheme = {
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
    MuiCardActions: {
      root: {
        paddingTop: 0,
      },
    },
    MuiCardContent: {
      root: {
        '&:last-child': {
          paddingBottom: 16,
        },
      },
    },
    MuiTableCell: {
      head: {
        fontWeight: 'bold',
      },
      root: {
        fontSize: 'inherit',
      },
    },
    MuiToolbar: {
      gutters: {
        paddingLeft: '0.75rem',
        paddingRight: '0.75rem',
      },
    },
  },
  palette: {
    contrastThreshold: 3, // Maximize the contrast between the background and the text.
    error: theme.palette.error,
    primary: theme.palette.primary,
    tonalOffset: 0.2,
    type: 'dark',
  },
  typography: {
    fontFamily: "'ScalySans', sans-serif",
    fontSize: 16,
    useNextVariants: true,
  },
};

export default muiTheme;
