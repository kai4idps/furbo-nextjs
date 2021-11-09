import { arrow } from 'styles/carousel';

const logoSliderSliceStyle = (theme) => ({
  root: {
    height: 'auto',
    width: '100%',
    padding: '30px 0px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 0px',
    },
  },
  carouselContainer: {
    width: '100%',
    height: '100%',
    padding: '0px 35px 0px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px',
    },
  },
  slide: {
    height: '100%',
    padding: '30px 15px 30px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px',
    },
  },
  quoteContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    width: 'auto',
  },
  quotationMarkLeft: {
    position: 'relative',
    fontSize: '36px',
    fontFamily: 'PingFang TC',
    fontWeight: 'bold',
    color: '#f7cd3d',
    top: '-15px',
    left: '-10px',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: '10px',
      left: '25px',
    },
  },
  quotationMarkRight: {
    position: 'relative',
    fontSize: '36px',
    fontFamily: 'PingFang TC',
    fontWeight: 'bold',
    color: '#f7cd3d',
    bottom: '-25px',
    right: '-10px',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      bottom: '35px',
      right: '25px',
    },
  },
  quote: {
    fontFamily: 'Avenir',
    color: '#434343',
    height: 'auto',
    width: 'auto',
    fontSize: '24px',
    [theme.breakpoints.down('sm')]: {
      height: '100%',
      paddingTop: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      fontSize: '16px',
      width: '260px',
    },
  },
  arrow,
  indicatorContainer: {
    backgroundColor: 'transparent',
    height: 'auto',
    width: '100%',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '15px',
    },
  },
  button: {
    backgroundColor: 'transparent',
    margin: '5px',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#f7cd3d',
      width: '15px',
      height: '15px',
      '&,&:hover,&:focus': {
        backgroundColor: '#f7cd3d',
      },
    },
  },
  buttonIcon: {
    width: 'auto',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    borderRadius: '5px',
    margin: '5px',
    width: '100%',
    height: '140px',
    display: 'flex',
    paddingBottom: '10px',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
  },
});

export default logoSliderSliceStyle;
