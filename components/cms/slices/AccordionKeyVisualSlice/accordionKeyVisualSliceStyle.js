const accordionKeyVisualSliceStyle = (theme) => ({
  root: {
    height: 'auto',
    width: '100%',
  },
  header: {
    backgroundColor: theme.palette.yellow,
    height: '70px',
    fontFamily: 'FuturaPT',
    fontSize: '32px',
    lineHeight: '32px',
    borderTop: `1px solid ${theme.palette.white}`,
    borderBottom: `1px solid ${theme.palette.white}`,
    paddingTop: '5px', // centering workaround
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
      lineHeight: '24px',
    },
  },
  content: {
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
      backgroundPosition: 'bottom',
      backgroundSize: '100% auto',
      minHeight: '600px',
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '450px',
    },
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingLeft: '50px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '10px',
      textAlign: 'center',
    },
  },
  subtitle: {
    width: '100%',
    padding: '10px 0px',
    color: theme.palette.black,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  textContent: {
    color: theme.palette.black,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
});

export default accordionKeyVisualSliceStyle;
