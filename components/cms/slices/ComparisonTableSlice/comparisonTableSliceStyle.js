const comparisonTableStyle = (theme) => ({
  tableContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    padding: '20px 0px',
  },
  header: {
    display: 'flex',
    width: '600px',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  headerBoxItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      width: '200px',
    },
  },
  itemName: {
    padding: '10px 0px',
  },
  vs: {
    width: '180px',
    [theme.breakpoints.down('xs')]: {
      flexGrow: 1,
    },
  },
  table: {
    width: '600px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  tableCellCenter: {
    border: 'none',
    position: 'relative',
    width: '200px',
    textAlign: 'center',
    padding: '6px 0px',
    [theme.breakpoints.down('sm')]: {
      width: '180px',
    },
  },
  tableCell: {
    border: 'none',
    position: 'relative',
    width: '200px',
    textAlign: 'center',
    padding: '6px 0px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  tableBody: {
    padding: '0px',
    '& tr:nth-child(odd)': {
      backgroundColor: '#f5f5f5',
    },
  },
  itemImage: {
    height: '150px',
    width: '150px',
    [theme.breakpoints.down('xs')]: {
      height: '100px',
      width: '100px',
    },
  },
  icon: {
    height: '30px',
    width: '30px',
  },
  newIcon: {
    position: 'absolute',
    left: '-40px',
    top: '-10px',
  },
});

export default comparisonTableStyle;
