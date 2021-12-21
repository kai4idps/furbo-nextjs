const emailInputStyle = (theme) => ({
  root: {
    marginTop: '10px',
    height: '30px',
    width: '100%',
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    backgroundColor: '#c6c6c6',
    width: 'calc(100% - 40px)',
    height: '30px',
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
  },
  submitButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonContainer: {
    margin: 0,
    padding: 0,
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
    width: '32px',
    height: '30px',
    backgroundColor: theme.palette.yellow,
    display: 'flex',
  },
  blackTriangle: {
    width: '10.5px',
    height: '12.5px',
  },
});

export default emailInputStyle;
