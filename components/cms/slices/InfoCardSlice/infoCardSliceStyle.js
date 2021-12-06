const infoCardSliceStyle = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '5px',
    color: '#434343',
    padding: '20px 150px',
    textAlign: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '10px',
    },
  },
  image: {
    width: 60,
    height: 60,
    padding: '0px 10px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 0px 10px',
    },
  },
});

export default infoCardSliceStyle;
