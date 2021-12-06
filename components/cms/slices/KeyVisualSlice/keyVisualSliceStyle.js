const keyVisualSliceStyle = (theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    height: 'auto',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    borderRadius: '5px',
    margin: '10px 0px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px',
      backgroundPosition: 'bottom',
      backgroundSize: '100% auto',
      minHeight: '800px',
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '500px',
    },
  },
  container: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  text: {
    padding: '0px 50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '0px',
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  },
  title: {
    color: '#434343',
    height: 'auto',
    padding: '5px',
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    color: '#434343',
    width: 'auto',
    height: 'auto',
    padding: '5px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: '100%',
      padding: '10px 0px 10px',
    },
  },
  bannerImageContainer: {
    width: '100%',
    paddingBottom: '10px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  bannerImage: {
    heigh: '45px',
    width: 'auto',
  },
});

export default keyVisualSliceStyle;
