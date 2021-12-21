const headerStyle = (theme) => ({
  appBar: {
    display: 'flex',
    border: '0',
    color: '#666666',
    width: '100%',
    height: 'auto',
    padding: '0px 0px 0px',
    borderBottom: `solid 3px ${theme.palette.yellow}`,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    zIndex: 1100,
    [theme.breakpoints.down('sm')]: {
      borderBottom: 'none',
    },
  },
  outerContainer: {
    padding: '0px 50px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 15px 10px',
    },
  },
  toolbar: {
    minHeight: '50px',
    flex: '1',
    margin: '0px',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'nowrap',
    padding: '0px',
    height: '75px',
    [theme.breakpoints.down('sm')]: {
      height: '55px',
    },
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35px',
    height: '35px',
  },
  leftContainer: {
    width: 'auto',
    height: '75px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      height: '55px',
    },
  },
  rightContainer: {
    width: 'auto',
    height: '75px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      height: '55px',
    },
  },
  headerSpacing: {
    paddingLeft: '24px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0px',
    },
  },
  drawerPaper: {
    display: 'block',
    position: 'fixed',
    backgroundColor: '#f7f7f7',
    border: 'none',
    height: 'calc(100vh - 145px)',
    width: '350px',
    right: 'auto',
    top: '145px',
    left: '0',
    overflowY: 'auto',
    borderTop: 'none',
    textAlign: 'left',
    paddingRight: '0px',
    paddingLeft: '0px',
    '@media (max-width: 350px)': {
      width: '330px',
    },
    '@media (max-width: 320px)': {
      width: '300px',
    },
  },
  extraPadding: {
    top: '165px',
    height: 'calc(100vh - 165px)',
  },
  drawerContainer: {
    width: '100%',
    height: 'calc(100% + 150px)',
  },
  shopIconButton: {},
  shopButton: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: '24px',
    },
  },
  pageLinks: {
    position: 'relative',
    display: 'flex',
    height: 'auto',
  },
  button: {
    padding: 6,
    [theme.breakpoints.down('sm')]: {
      padding: 5,
    },
  },
  image: {
    width: '35px',
    height: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default headerStyle;
