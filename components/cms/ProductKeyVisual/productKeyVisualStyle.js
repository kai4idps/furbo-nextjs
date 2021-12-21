const productKeyVisualStyle = (theme) => ({
  root: {
    height: 'auto',
    width: '100%',
    marginBottom: '10px',
  },
  leftGrid: {},
  rightGrid: {
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  title: {
    color: theme.palette.black,
    [theme.breakpoints.down('sm')]: {
      padding: '0px',
    },
  },
  subtitle: {
    paddingBottom: '20px',
    color: theme.palette.black,
    [theme.breakpoints.down('sm')]: {
      padding: '10px 0px',
    },
  },
  colorText: {
    paddingTop: '20px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 0px',
    },
  },
  shopButton: {
    margin: '10px 0px',
  },
  shopButton: {
    margin: '10px 0px',
  },
});

export default productKeyVisualStyle;
