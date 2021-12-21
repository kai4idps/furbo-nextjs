const footerStyle = (theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    backgroundColor: theme.palette.black,
    fontFamily: 'Avenir',
    color: theme.palette.white,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '40px 65px 0px',
    [theme.breakpoints.down('sm')]: {
      padding: '30px 30px 0px',
    },
  },
  gridContainer: {
    width: '100%',
    height: 'auto',
  },
  gridItem: {
    flexWrap: 'wrap',
  },
  gridTitle: {
    fontSize: '18px',
    fontWeight: '800',
    paddingBottom: '25px',
    fontFamily: 'Avenir',
    height: '55px',
    width: '100%',
  },
  gridItemContainer: {
    width: '100%',
    height: 'auto',
    maxHeight: '140px',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
  },
  socialLinkContainer: {
    width: '100%',
    height: '55px',
    paddingBottom: '25px',
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
      paddingTop: '25px',
      paddingBottom: '0px',
    },
  },
  emailText: {
    fontWeight: 'bold',
    fontSize: '18px',
  },
  emailContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 0px 30px',
    },
  },
  divider: {
    backgroundColor: 'rgba(255, 255, 255, 0.6);',
    height: '1px',
    margin: '30px 0px 20px',
    [theme.breakpoints.down('sm')]: {
      margin: '30px 0px 15px',
    },
  },
  bottomGrid: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '30px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  termsLinkContainer: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '10px',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
  },
  termsLinkButtonContainer: {
    width: 'auto',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  termsLinkText: {
    fontSize: '15px',
    fontWeight: '500',
    fontFamily: 'Avenir',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '5px',
    },
  },
  termsLinkButton: {
    padding: '0px 5px',
    textTransform: 'none',
    color: theme.palette.white,
  },
  flagButton: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '10px',
    width: 'auto',
  },
  flag: {
    display: 'flex',
    width: '40px',
    height: '26px',
  },
  flagText: {
    color: theme.palette.white,
    fontFamily: 'Avenir',
    textTransform: 'none',
    paddingLeft: '15px',
    fontSize: '16px',
    fontWeight: '500',
  },
  accordionContainer: {
    position: 'absolute',
    width: '100vw',
    left: 'calc((100% - 100vw)/2)',
  },
  accordionDetails: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
    color: theme.palette.black,
    fontFamily: 'Avenir',
  },
  accordionTitle: {
    backgroundColor: theme.palette.yellow,
    fontSize: '16px',
    fontWeight: '500',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  hide: {
    display: 'none',
  },
});

export default footerStyle;
