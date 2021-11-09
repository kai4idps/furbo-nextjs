const accountIconButtonStyle = (theme) => ({
  button: {
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 'auto',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      height: 'auto',
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

export default accountIconButtonStyle;
