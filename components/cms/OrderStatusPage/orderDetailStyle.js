const orderDetailStyle = (theme) => ({
  detailText: {
    fontFamily: 'Avenir',
    fontSize: '12px',
    color: '#444444',
    padding: '10px',
  },
  detailTextTitle: {
    fontFamily: 'Avenir',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  table: {
    borderRadius: '5px',
  },
  tableHeader: {
    backgroundColor: '#cccccc',
  },
  cellRightBottomBorder: {
    fontFamily: 'Avenir',
    fontSize: '16px',
    borderRight: '1px solid black',
    borderBottom: '1px solid black',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },
  cellRightBorder: {
    fontFamily: 'Avenir',
    fontSize: '16px',
    borderRight: '1px solid black',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },
  cellBottomBorder: {
    fontFamily: 'Avenir',
    fontSize: '16px',
    borderBottom: '1px solid black',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },
  cellLeftBottomBorder: {
    fontFamily: 'Avenir',
    borderLeft: '1px black solid',
    borderBottom: '1px solid black',
    fontSize: '16px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },
  productTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Avenir',
    fontSize: '16px',
    padding: '0px 20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },
  flexbox: {
    display: 'flex',
  },
});

export default orderDetailStyle;
