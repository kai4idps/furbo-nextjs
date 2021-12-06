import { useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import TagManager from 'react-gtm-module-defer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { store } from 'redux/configureStore';
import theme from 'styles/theme';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'styles/global.css';
import styles from 'styles/mainStyle';
import { GTM_DELAY_TIME, GTM_ID } from 'config/common';

const useStyles = makeStyles(styles);

const MyApp = ({ Component, pageProps }) => {
  const classes = useStyles();
  useEffect(() => {
    const initGtm = () => {
      TagManager.initialize({ gtmId: GTM_ID });
    };
    const initGtmOnEvent = (event) => {
      initGtm();
      event.currentTarget.removeEventListener(event.type, initGtmOnEvent);
    };
    document.addEventListener('scroll', initGtmOnEvent);
    document.addEventListener('mousemove', initGtmOnEvent);
    document.addEventListener('touchstart', initGtmOnEvent);
    setTimeout(initGtm, GTM_DELAY_TIME);
  }, []);

  return (
    <>
      <Head>
        <title>Furbo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <div className={classes.root}>
            <Component {...pageProps} />
          </div>
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
