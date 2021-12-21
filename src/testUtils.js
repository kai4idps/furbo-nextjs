import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'styles/theme';

const MuiRenderer = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

const customRender = (ui, options) => {
  return render(ui, {
    wrapper: MuiRenderer,
    ...options,
  });
};

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

export const mockNextUseRouter = ({ route, pathname, query, asPath }) => {
  useRouter.mockImplementationOnce(() => ({
    route,
    pathname,
    query,
    asPath,
  }));
};

export * from '@testing-library/react';
export { customRender as render };
