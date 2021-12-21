const snackbarStyle = (theme) => ({
  root: {
    display: 'flex',
    padding: '0px 10px',
    width: 'calc(100% - 16px)',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 5px',
    },
  },
  snackbar: {
    backgroundColor: '#111111',
    color: theme.palette.white,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    flexWrap: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  message: {
    padding: '0px',
    [theme.breakpoints.down('sm')]: {
      padding: '5px 10px 0px',
    },
  },
  button: {
    backgroundColor: theme.palette.yellow,
    fontFamily: 'Avenir',
    textTransform: 'none',
    lineHeight: 'normal',
    padding: '4px 10px',
    fontSize: '14px',
    '&,&:hover,&:focus': {
      backgroundColor: theme.palette.yellow,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  action: {
    margin: 0,
    padding: '0px 0px 0px 10px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: '5px',
    },
  },
});

export default snackbarStyle;
