const videoButtonStyle = (theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '5px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  playButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '22px',
    lineHeight: '22px',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      lineHeight: '18px',
    },
  },
  playIcon: {
    display: 'flex',
    width: '35px',
    height: '35px',
    paddingRight: '5px',
    [theme.breakpoints.down('sm')]: {
      width: '30px',
      height: '30px',
    },
  },
  playText: {
    fontFamily: 'Avenir',
    lineHeight: '35px',
    height: '35px',
    [theme.breakpoints.down('sm')]: {
      lineHeight: '30px',
      height: '30px',
    },
  },
});

export default videoButtonStyle;
