import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
  palette: {
    yellow: '#f7cd3d',
  },
});

export default theme;
