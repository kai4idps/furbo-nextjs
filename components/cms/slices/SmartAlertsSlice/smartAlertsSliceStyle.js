const smartAlertsSliceStyle = (theme) => ({
  root: {
    position: 'relative',
    height: 'auto',
    width: 'auto',
  },
  indicatorContainer: {
    position: 'relative',
    padding: '10px 0px',
    height: 'auto',
    width: 'auto',
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  button: {
    margin: '5px',
    [theme.breakpoints.down('xs')]: {
      margin: '0px',
    },
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '70px',
    height: '115px',
    [theme.breakpoints.down('xs')]: {
      width: '60px',
    },
  },
  buttonIcon: {
    width: '60px',
    [theme.breakpoints.down('xs')]: {
      width: '50px',
    },
  },
  buttonText: {
    fontFamily: 'FuturaPT',
    fontSize: '14px',
    width: '60px',
    textTransform: 'none',
    lineHeight: 'normal',
    color: '#434343',
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },
  },
  slide: {
    position: 'relative',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    height: 'auto',
    width: '100%',
    flexWrap: 'wrap',
    backgroundSize: 'auto 100%',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    borderRadius: '5px',
    margin: '10px 0px',
    [theme.breakpoints.down('sm')]: {
      backgroundSize: '100%',
      backgroundPosition: 'bottom',
      minHeight: '900px',
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '750px',
    },
    '@media (max-width: 550px)': {
      minHeight: '680px',
    },
    '@media (max-width: 450px)': {
      minHeight: '610px',
    },
    '@media (max-width: 350px)': {
      minHeight: '550px',
    },
  },
  contentContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    padding: '0px 50px 0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 20px 0px',
      alignItems: 'flex-start',
    },
  },
  title: {
    fontSize: '32px',
    color: '#434343',
    height: 'auto',
    lineHeight: '32px',
    padding: '15% 25px 0px',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 0px 0px',
      textAlign: 'center',
      justifyContent: 'center',
    },
  },
  subtitle: {
    fontSize: '24px',
    fontWeight: 'lighter',
    color: '#434343',
    lineHeight: 'normal',
    padding: '10px 25px 0px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '10px 0px 10px',
      textAlign: 'center',
      fontSize: '18px',
    },
  },
  textContent: {
    fontFamily: 'Avenir',
    color: '#434343',
    width: '100%',
    height: 'auto',
    fontSize: '24px',
    padding: '10px 25px 0px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      padding: '10px 0px 10px',
      fontSize: '16px',
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

export default smartAlertsSliceStyle;
