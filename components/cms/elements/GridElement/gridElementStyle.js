const gridElementStyle = (theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontSize: '18px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
    },
  },
  image: {
    width: '60px',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '50px',
      height: 'auto',
    },
  },
  imageLarge: {
    width: '100px',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '75px',
      height: 'auto',
    },
  },
});

export default gridElementStyle;
