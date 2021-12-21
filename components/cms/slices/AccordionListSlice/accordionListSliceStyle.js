const accordionListSliceStyle = (theme) => ({
  root: {
    height: 'auto',
    width: '100%',
  },
  header: {
    backgroundColor: theme.palette.yellow,
    height: '70px',
    fontFamily: 'FuturaPT',
    fontSize: '32px',
    lineHeight: '32px',
    borderTop: `1px solid ${theme.palette.white}`,
    borderBottom: `1px solid ${theme.palette.white}`,
    paddingTop: '5px', // centering workaround
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
      lineHeight: '24px',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 20px 0px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 5px 0px',
    },
  },
  accordionItem: {
    width: '800px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
    },
  },
  itemHeader: {
    height: '40px',
    lineHeight: '40px',
    borderBottom: '1px solid #e2e2e2',
    color: theme.palette.black,
    [theme.breakpoints.down('xs')]: {
      lineHeight: '20px',
    },
  },
  itemContent: {
    fontSize: '15px',
    lineHeight: 'auto',
    color: theme.palette.black,
    padding: '5px 30px 10px 20px',
    fontFamily: 'Avenir',
  },
});

export default accordionListSliceStyle;
