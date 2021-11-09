const homeButtonStyle = (theme) => ({
  button: {
    height: 'calc(100% - 20px)',
    width: '130px',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      width: '100px',
      height: 'calc(100% - 10px)',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },
  image: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30px',
    width: '100%',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      height: '20px',
    },
  },
});

export default homeButtonStyle;
