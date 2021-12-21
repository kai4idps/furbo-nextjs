const shopButtonStyle = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  button: {
    zIndex: 1000,
    width: '120px',
    height: '35px',
    color: theme.palette.white,
    fontSize: '16px',
    lineHeight: '16px',
    fontFamily: 'FuturaPT',
    fontWeight: 500,
    backgroundColor: theme.palette.orange,
    textTransform: 'none',
    borderRadius: '100px',
    '&,&:hover,&:focus': {
      backgroundColor: theme.palette.orange,
    },
  },
});

export default shopButtonStyle;
