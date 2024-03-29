const flagButtonStyle = () => ({
  button: {
    width: '100%',
    justifyContent: 'flex-start',
    padding: '10px 5px',
    '&:hover': {
      backgroundColor: 'inherit',
      textDecoration: 'inherit',
    },
  },
  image: {
    position: 'relative',
    width: '40px',
    height: '26px',
  },
  text: {
    fontSize: '16px',
    fontFamily: 'Avenir',
    color: '#434343',
    paddingLeft: '20px',
    textTransform: 'none',
  },
});

export default flagButtonStyle;
