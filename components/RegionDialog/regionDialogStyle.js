const regionDialogStyle = (theme) => ({
  gridContainer: {
    maxWidth: '960px',
    maxHeight: '310px',
    margin: '20px 0px 35px',
    width: '100%',
  },
  underLine: {
    width: '100%',
    display: 'block',
    borderTop: '1px solid #434343',
    margin: '10px auto',
  },
  button: {
    width: '100%',
    justifyContent: 'flex-start',
    padding: '10px 5px',
    '&:hover': {
      backgroundColor: 'inherit',
      textDecoration: 'inherit',
    },
  },
  closeIcon: {
    color: '#434343',
  },
  dialogContent: {
    backgroundColor: '#f7f7f7',
    padding: '30px',
    '&:first-child': {
      paddingTop: '40px',
    },
  },
  dialogContentHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: '20px',
    fontWeight: '500',
    fontFamily: 'Avenir',
    color: '#434343',
  },
  blockTitle: {
    padding: '10px 5px',
    fontSize: '20px',
    fontWeight: '500',
    fontFamily: 'Avenir',
    color: '#434343',
  },
  blockContainer: {
    flexDirection: 'column',
    maxHeight: '240px', //48 button height * 5
    [theme.breakpoints.down('sm')]: {
      maxHeight: 'none',
    },
  },
});

export default regionDialogStyle;
