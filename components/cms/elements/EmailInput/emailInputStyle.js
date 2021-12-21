const emailInputStyle = (theme) => ({
  root: {
    marginTop: '10px',
    height: '30px',
    width: '100%',
    padding: '0px 30px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    backgroundColor: theme.palette.white,
    width: 'calc(100% - 40px)',
    height: '30px',
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
  },
  submitButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 0px 2px 2px', //hard coded align center
    width: '100%',
  },
  submitButtonContainer: {
    margin: 0,
    padding: 0,
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
    width: '32px',
    height: '30px',
    backgroundColor: theme.palette.black,
    display: 'flex',
  },
  triangle: {
    width: '10.5px',
    height: '12.5px',
    filter: 'brightness(0) invert(1)',
  },
});

export default emailInputStyle;
