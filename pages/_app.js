import { useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Redirect from 'components/Redirect/Redirect';
import { wrapper } from 'redux/configureStore';
import theme from 'styles/theme';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'styles/globals.css';
import styles from '../styles/mainStyle';

const useStyles = makeStyles(styles);

const MyApp = ({ Component, pageProps }) => {
  const classes = useStyles();

  useEffect(() => {
    const initGtmOnEvent = (event) => {
      initGtm();
      event.currentTarget.removeEventListener(event.type, initGtmOnEvent); // remove the event listener that got triggered
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
      setTimeout(initGtm, 4500);
    });
    document.addEventListener('scroll', initGtmOnEvent);
    document.addEventListener('mousemove', initGtmOnEvent);
    document.addEventListener('touchstart', initGtmOnEvent);
  }, []);

  return (
    <>
      <Head>
        <title>Furbo</title>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
      </Head>
      <Redirect />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
};

export default wrapper.withRedux(MyApp);
