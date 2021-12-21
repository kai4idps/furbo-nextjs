import { createTheme } from '@material-ui/core/styles';

export const palette = {
  red: '#ff0000',
  orange: '#f16849',
  yellow: '#f7cd3d',
  blue: '#1e7baC',
  black: '#434343',
  white: '#ffffff',
};

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
  palette,
});

export default theme;
