const accordionListSliceStyle = (theme) => ({
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
    paddingTop: '5px', // centering workaround
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
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
    color: '#434343',
    [theme.breakpoints.down('xs')]: {
      lineHeight: '20px',
    },
  },
  itemContent: {
    fontSize: '15px',
    lineHeight: 'auto',
    color: '#434343',
    padding: '5px 30px 10px 20px',
    fontFamily: 'Avenir',
  },
});

export default accordionListSliceStyle;
