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
    position: 'relative',
    width: '60px',
    height: '60px',
    [theme.breakpoints.down('sm')]: {
      width: '50px',
      height: '50px',
    },
  },
});

export default gridElementStyle;
