const bannerStyle = (theme) => ({
  root: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 15px',
    },
  },
  leftImg: {
    marginRight: '100px',
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      margin: '0px 10px',
      width: '45px',
      height: '45px',
    },
    '@media (max-width: 350px)': {
      width: '40px',
      height: '40px',
    },
  },
  rightImg: {
    marginLeft: '100px',
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      margin: '0px 10px',
      width: '45px',
      height: '45px',
    },
    '@media (max-width: 350px)': {
      width: '40px',
      height: '40px',
    },
  },
  leftImgCountdown: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0px 20px 0px 10px',
    width: '40px',
    height: '40px',
    '@media (max-width: 350px)': {
      margin: '0px 10px 0px 10px',
      width: '35px',
      height: '35px',
    },
  },
  rightImgCountdown: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0px 10px 0px 20px',
    width: '40px',
    height: '40px',
    '@media (max-width: 350px)': {
      margin: '0px 10px 0px 10px',
      width: '35px',
      height: '35px',
    },
  },
  bannerContent: {
    fontSize: '18px',
    lineHeight: 'normal',
    height: 'auto',
    display: 'flex',
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '80px',
    fontFamily: 'Avenir',
    fontColor: '#434343',
    fontWeight: '500',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '5px',
      height: '60px',
    },
  },
  time: {
    width: '50px',
    height: '45px',
    fontFamily: 'Avenir',
    lineHeight: 'normal',
    backgroundColor: 'white',
    borderRadius: '3px',
    opacity: '0.9',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeDigit: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    color: '#434343',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: '18px',
    fontSize: '18px',
    paddingTop: '5px',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
  },
  timeWord: {
    width: '40px',
    height: 'auto',
    fontSize: '10px',
    color: '#d0021b',
  },
  colon: {
    padding: '0px 5px',
    lineHeight: '30px',
    textAlign: 'center',
    height: '30px',
    fontSize: '24px',
    fontFamily: 'Avenir',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  units: {
    width: '32px',
    height: '40px',
    margin: '0px 5px 1px',
    backgroundColor: 'white',
    borderRadius: '3px',
    opacity: '0.9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '28px',
      height: '38px',
    },
  },
  unitsDigit: {
    fontSize: '20px',
    lineHeight: '20px',
    paddingTop: '2px',
    height: 'auto',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
  },
});

export default bannerStyle;
