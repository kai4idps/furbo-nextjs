const featureBlockSliceStyle = (theme) => ({
  root: {
    position: 'relative',
    height: '540px',
    width: '100%',
    padding: '10px 0px',
    marginBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
    '& video, & span, & img': {
      width: '100%',
    },
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: '0px 50px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 20px',
      justifyContent: 'flex-start',
    },
  },
  media: {
    [theme.breakpoints.down('sm')]: {
      padding: '15px 10px',
    },
  },
  title: {
    color: theme.palette.black,
    width: '100%',
    height: 'auto',
    padding: '0px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      justifyContent: 'center',
    },
  },
  subtitle: {
    fontFamily: 'FuturaPT',
    color: theme.palette.black,
    width: '100%',
    height: 'auto',
    padding: '10px 0px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  textContent: {
    fontFamily: 'Avenir',
    color: theme.palette.black,
    width: '100%',
    height: 'auto',
    padding: '0px',
    fontSize: '24px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: '16px',
    },
  },
  centerImageContainer: {
    position: 'absolute',
    zIndex: 900,
    height: '100%',
    width: 'auto',
    left: '375px',
    '@media (max-width: 1200px)': {
      left: '50%',
    },
  },
  icon: {
    width: '50px',
    height: '50px',
    [theme.breakpoints.down('sm')]: {
      width: '35px',
      height: '35px',
    },
  },
});

export default featureBlockSliceStyle;
