const learnButtonStyle = (theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  button: {
    zIndex: 1000,
    width: '200px',
    height: '40px',
    color: theme.palette.white,
    fontSize: '20px',
    lineHeight: '20px',
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: '100px',
    fontFamily: 'FuturaPT',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      lineHeight: '18px',
    },
  },
});

export default learnButtonStyle;
