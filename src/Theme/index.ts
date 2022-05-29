import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C2DED1', //TODO: this affects EVERYTHING
    },
    secondary: {
      main: '#ECE5C7',
    },
    text: {
      secondary: '#354259',
    },
  },
  content: '#CDC2AE',
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#354259',
          color: 'white',
          fontWeight: 'bold',
        }
      },
    },
  },
});

export default theme;


declare module '@mui/material/styles' {
  interface Theme {
    content: string;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    content?: string;
  }
}