const splitLayoutSliceStyle = (theme) => ({
  root: {
    padding: '10px 0px 20px',
    width: '100%',
  },
  image: {
    width: '400px',
    maxWidth: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  title: {
    display: 'flex',
    padding: '5px 10px 5px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      justifyContent: 'center',
    },
  },
  subtitle: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 10px 5px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      textAlign: 'center',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px 10px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      padding: '5px 0px',
    },
  },
  gridItem: {
    padding: '10px',
    [theme.breakpoints.down('sm')]: {
      padding: '5px',
    },
  },
});

export default splitLayoutSliceStyle;
