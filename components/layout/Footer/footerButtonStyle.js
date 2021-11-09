const footerButtonStyle = (theme) => ({
  linkButtonContainer: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  linkButton: {
    textTransform: 'none',
    fontFamily: 'Avenir',
    width: 'auto',
    padding: '0px 3px',
    color: '#ffffff',
    justifyContent: 'flex-start',
    fontWeight: '500',
    fontSize: '16px',
    [theme.breakpoints.down('sm')]: {
      lineHeight: '35px',
    },
  },
});

export default footerButtonStyle;
