import { arrow } from 'styles/carousel';

const cardsCarouselSliceStyle = (theme) => ({
  root: {
    marginLeft: 'calc((100% - 100vw)/2)',
    height: 'auto',
    width: '100vw',
    margin: '10px 0px',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  headingComponents: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    color: '#434343',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: 'FuturaPT',
    color: '#434343',
    fontSize: '32px',
    textAlign: 'center',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      fontSize: '28px',
    },
  },
  subtitle: {
    fontFamily: 'FuturaPT',
    fontSize: '20px',
    textAlign: 'center',
    color: '#434343',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  },
  path: {
    position: 'absolute',
    top: '72%',
    [theme.breakpoints.down('xs')]: {
      right: '4%',
    },
  },
  pathImageContainer: {
    position: 'relative',
    width: '16px',
    height: '33px',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    width: '100%',
    height: '100%',
    padding: '10px 35px 0px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 15px 0px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '10px 0px 0px',
    },
  },
  slide: {
    backgroundColor: 'transparent',
    height: '100%',
    padding: '0px 10px 30px',
    '& .MuiPaper-rounded': {
      borderRadius: 8,
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0px 10px 20px',
    },
  },
  card: {
    top: 0,
    width: '100%',
    height: '100%',
  },
  cardContent: {
    textAlign: 'center',
    fontFamily: 'Avenir',
    color: '#434343',
    fontSize: '18px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
    },
  },
  cardMedia: {
    height: 'auto',
    width: '100%',
  },
  arrow,
});

export default cardsCarouselSliceStyle;
