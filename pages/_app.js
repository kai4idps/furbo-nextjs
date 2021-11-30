import { useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { store } from 'redux/configureStore';
import theme from 'styles/theme';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'styles/global.css';
import styles from 'styles/mainStyle';
// import { GTM_DELAY_TIME } from 'config/common';
// import { GTM_ID } from 'config/gtm';
// import TagManager from 'react-gtm-module';

const useStyles = makeStyles(styles);

const MyApp = ({ Component, pageProps }) => {
  const classes = useStyles();
  // const tagManagerArgs = {
  //   id: GTM_ID,
  // };
  // useEffect(() => {
  //   TagManager.initialize(tagManagerArgs);
  // }, []);
  // useEffect(() => {
  //   const initGtmOnEvent = (event) => {
  //     initGtm();
  //     event.currentTarget.removeEventListener(event.type, initGtmOnEvent);
  //   };
  //   const initGtm = () => {
  //     if (window.gtmDidInit) {
  //       return;
  //     }
  //     window.gtmDidInit = true;
  //     const script = document.createElement('script');
  //     script.type = 'text/javascript';
  //     script.async = true;
  //     script.onload = () => {
  //       window.dataLayer = window.dataLayer || [];
  //       window.dataLayer.push({
  //         event: 'gtm.js',
  //         'gtm.start': new Date().getTime(),
  //         'gtm.uniqueEventId': 0,
  //       });
  //     };
  //     script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-N37W29C';
  //     document.head.appendChild(script);
  //   };
  //   document.addEventListener('DOMContentLoaded', () => {
  //     document.addEventListener('scroll', initGtmOnEvent);
  //     document.addEventListener('mousemove', initGtmOnEvent);
  //     document.addEventListener('touchstart', initGtmOnEvent);
  //     setTimeout(initGtm, GTM_DELAY_TIME);
  //   });
  // }, []);

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
