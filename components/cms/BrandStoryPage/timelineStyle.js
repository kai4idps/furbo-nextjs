const timelineStyle = (theme) => ({
  root: {
    position: 'relative',
    margin: '20px 0px 40px',
    maxWidth: '960px',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    padding: '20px 0px 20px',
    fontFamily: 'FuturaPT',
    fontSize: '32px',
  },
  slide: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '400px',
    width: '100%',
    padding: '0px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      height: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  slideImage: {
    width: 'auto',
    height: '400px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
    },
  },
  slideText: {
    backgroundColor: '#F0F0F0',
    padding: '20px',
    height: '100%',
    width: '300px',
    fontFamily: 'Avenir',
    fontSize: '16px',
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '50px',
      width: '100%',
      height: '370px',
    },
  },
  indicatorContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      bottom: '320px',
    },
  },
  buttonContainer: {
    width: 'auto',
    height: 'auto',
    padding: '10px',
  },
  button: {
    width: '16px',
    height: '16px',
    border: '1px solid #888888',
    borderRadius: '8px',
    zIndex: 2,
    padding: '0px',
    margin: '5px',
  },
});

export default timelineStyle;
