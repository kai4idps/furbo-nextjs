const shopButtonStyle = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  button: {
    zIndex: 1000,
    width: '120px',
    height: '35px',
    color: '#ffffff',
    fontSize: '16px',
    lineHeight: '16px',
    fontFamily: 'FuturaPT',
    fontWeight: 500,
    backgroundColor: '#f16849',
    textTransform: 'none',
    borderRadius: '100px',
    '&,&:hover,&:focus': {
      backgroundColor: '#f16849',
    },
  },
});

export default shopButtonStyle;
