const signInButtonStyle = (theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0px',
    [theme.breakpoints.down('sm')]: {
      padding: '5px 0px',
    },
  },
  button: {
    zIndex: 1000,
    width: '200px',
    height: '40px',
    color: theme.palette.white,
    fontSize: '18px',
    fontWeight: '500',
    backgroundColor: theme.palette.blue,
    textTransform: 'none',
    borderRadius: '100px',
    fontFamily: 'FuturaPT',
    '&,&:hover,&:focus': {
      backgroundColor: theme.palette.blue,
      height: '35px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '150px',
    },
  },
});

export default signInButtonStyle;
