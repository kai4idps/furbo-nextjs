const fallbackPageStyle = (theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px 0px',
  },
  image: {
    width: '600px',
    height: '450px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
    },
  },
  extraPadding: {
    padding: '200px 0px',
  },
});

export default fallbackPageStyle;
