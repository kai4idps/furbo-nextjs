const specStyle = (theme) => ({
  root: {
    height: 'auto',
    width: '100%',
  },
  header: {
    backgroundColor: '#f7cd3d',
    height: '70px',
    fontFamily: 'FuturaPT',
    fontSize: '32px',
    borderTop: '1px solid white',
    borderBottom: '1px solid white',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 'auto',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      padding: '20px 0px 20px',
      fontSize: '22px',
    },
  },
  specImg: {
    width: '800px',
    height: '800px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
    },
  },
  table: {
    width: '100%',
    maxWidth: '800px',
  },
  row: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '10px 10px 10px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  columnLeft: {
    display: 'flex',
    justifyContent: 'center',
    flexBasis: '25%',
    color: '#434343',
    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%',
      padding: '15px 0px 15px',
      alignItems: 'flex-start',
    },
  },
  columnRight: {
    fontSize: '16px',
    lineHeight: '30px',
    flexBasis: '75%',
    paddingLeft: '20px',
    color: '#434343',
    [theme.breakpoints.down('sm')]: {
      padding: '0px',
      flexBasis: '100%',
      fontSize: '14px',
    },
  },
});

export default specStyle;
