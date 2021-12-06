const productKeyVisualStyle = (theme) => ({
  root: {
    height: 'auto',
    width: '100%',
    marginBottom: '10px',
  },
  leftGrid: {
    backgroundColor: 'transparent',
  },
  rightGrid: {
    backgroundColor: 'transparent',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      padding: '0px',
    },
  },
  title: {
    color: '#434343',
  },
  subtitle: {
    paddingTop: '20px',
    color: '#434343',
  },
  colorText: {
    paddingBottom: '20px',
  },
  shopButton: {
    margin: '10px 0px',
  },
});

export default productKeyVisualStyle;
