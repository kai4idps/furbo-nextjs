const savingLivesKeyVisualStyle = (theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    height: 'auto',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    borderRadius: '5px',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: 'bottom',
      backgroundSize: '100% auto',
      minHeight: '800px',
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '540px',
    },
  },
  text: {
    padding: '0px 50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '0px',
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  },
  title: {
    color: '#434343',
    height: 'auto',
    padding: '5px',
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      textAlign: 'center',
    },
  },
  subtitle: {
    color: '#434343',
    width: 'auto',
    height: 'auto',
    padding: '5px',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: '100%',
      padding: '10px 0px 10px',
      textAlign: 'center',
    },
  },
  counterContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  counter: {
    display: 'flex',
    justifyContent: 'center',
  },
  counterBox: {
    fontFamily: 'FuturaPT',
    textAlign: 'center',
    border: '1px solid #d0d0d0',
    color: '#434343',
    backgroundColor: 'white',
    height: '55px',
    width: '50px',
    borderRadius: '3px',
    lineHeight: '58px',
    margin: '2.5px',
    fontSize: '32px',
    [theme.breakpoints.down('sm')]: {
      margin: '1px',
      height: '50px',
      width: '40px',
      lineHeight: '53px',
      fontSize: '24px',
    },
  },
  counterText: {
    textAlign: 'center',
    paddingLeft: '5px',
    fontFamily: 'FuturaPT',
    color: '#616161',
    fontSize: '28px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '22px',
    },
  },
});

export default savingLivesKeyVisualStyle;
