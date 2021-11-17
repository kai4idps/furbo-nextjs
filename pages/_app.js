import { useEffect } from 'react';
import Head from 'next/head';
import {
  ThemeProvider,
  makeStyles,
  MuiThemeProvider,
  createTheme,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Redirect from 'components/Redirect/Redirect';
import { Provider } from 'react-redux';
import { store } from 'redux/configureStore';
import theme from 'styles/theme';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'styles/globals.css';
import styles from '../styles/mainStyle';
import parser from 'ua-parser-js';
import mediaQuery from 'css-mediaquery';
import { GTM_DELAY_TIME } from 'config/common';

const useStyles = makeStyles(styles);

const MyApp = ({ Component, pageProps }) => {
  const classes = useStyles();
  const mobileSsrMatchMedia = (query) => ({
    matches: mediaQuery.match(query, {
      // The estimated CSS width of the browser.
      width: '0px',
    }),
  });
  const desktopSsrMatchMedia = (query) => ({
    matches: mediaQuery.match(query, {
      // The estimated CSS width of the browser.
      width: '1024px',
    }),
  });

  const mobileMuiTheme = createTheme({
    props: {
      // Change the default options of useMediaQuery
      MuiUseMediaQuery: { ssrMatchMedia: mobileSsrMatchMedia },
    },
  });
  const desktopMuiTheme = createTheme({
    props: {
      // Change the default options of useMediaQuery
      MuiUseMediaQuery: { ssrMatchMedia: desktopSsrMatchMedia },
    },
  });
  useEffect(() => {
    const initGtmOnEvent = (event) => {
      initGtm();
      event.currentTarget.removeEventListener(event.type, initGtmOnEvent);
    };
    const initGtm = () => {
      if (window.gtmDidInit) {
        return;
      }
      window.gtmDidInit = true;
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'gtm.js',
          'gtm.start': new Date().getTime(),
          'gtm.uniqueEventId': 0,
        });
      };
      script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-N37W29C';
      document.head.appendChild(script);
    };
    document.addEventListener('DOMContentLoaded', () => {
      document.addEventListener('scroll', initGtmOnEvent);
      document.addEventListener('mousemove', initGtmOnEvent);
      document.addEventListener('touchstart', initGtmOnEvent);
      setTimeout(initGtm, GTM_DELAY_TIME);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Furbo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MuiThemeProvider
        theme={
          pageProps.deviceType === 'mobile' ? mobileMuiTheme : desktopMuiTheme
        }
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Provider store={store}>
            <Redirect />
            <div className={classes.root}>
              <Component {...pageProps} />
            </div>
          </Provider>
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  );
};

MyApp.getInitialProps = async (ctx) => {
  // OP's edit: The ctx that we really want is inside the function parameter "ctx"
  const deviceType =
    parser(ctx.ctx.req.headers['user-agent']).device.type || 'desktop';
  // I'm guessing on the pageProps key here based on a couple examples
  return { pageProps: { deviceType } };
};

export default MyApp;
