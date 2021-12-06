const accordionFeatureListSliceStyle = (theme) => ({
  root: {
    height: 'auto',
    width: '100%',
    margin: '10px 0px',
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
  gridLeft: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 20px 0px',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 5px 0px',
    },
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
    },
  },
  gridRight: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 20px 0px',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 5px 0px',
    },
  },
  accordionItem: {
    width: '340px',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
    },
  },
  itemHeader: {
    height: '40px',
    lineHeight: '22px',
    fontFamily: 'Avenir',
    color: '#434343',
    fontSize: '18px',
    fontWeight: 500,
    borderBottom: '1px solid #c3c3c3',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
  itemImage: {
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10px',
  },
  itemTitle: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  itemContent: {
    fontSize: '15px',
    fontFamily: 'Avenir',
    color: '#434343',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '65px',
  },
  expandIcon: {
    color: '#f7cd3d',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default accordionFeatureListSliceStyle;
