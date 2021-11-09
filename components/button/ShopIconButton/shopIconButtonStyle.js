const shopIconButtonStyle = (theme) => ({
  button: {
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '55px',
    height: '55px',
    [theme.breakpoints.down('sm')]: {
      width: '45px',
      height: '45px',
    },
  },
  image: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45px',
    height: '45px',
    [theme.breakpoints.down('sm')]: {
      width: '35px',
      height: '35px',
    },
  },
});

export default shopIconButtonStyle;
