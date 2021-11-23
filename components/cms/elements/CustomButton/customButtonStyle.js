const customButtonStyle = (theme) => ({
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
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: '500',
    textTransform: 'none',
    borderRadius: '100px',
    fontFamily: 'FuturaPT',
  },
});

export default customButtonStyle;
