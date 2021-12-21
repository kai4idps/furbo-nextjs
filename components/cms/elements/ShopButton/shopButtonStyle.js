const shopButtonStyle = (theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'flex-start',
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
    backgroundColor: theme.palette.orange,
    textTransform: 'none',
    borderRadius: '100px',
    fontFamily: 'FuturaPT',
    '&,&:hover,&:focus': {
      backgroundColor: theme.palette.orange,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      lineHeight: '18px',
    },
  },
});

export default shopButtonStyle;
