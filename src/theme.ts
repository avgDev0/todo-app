import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: '#ebebe7',
          borderRadius: '2px',
          height: '95%',
          minWidth: '30%',
          margin: theme.spacing(1),
        }),
      },
      defaultProps: {
        elevation: 3,
      },
    },
  }
});

export default theme;
