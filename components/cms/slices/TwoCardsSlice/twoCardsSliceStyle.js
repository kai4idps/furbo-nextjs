const twoCardsSliceStyle = (theme) => ({
  root: {
    height: 'auto',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      padding: '0px',
    },
  },
  title: {
    padding: '10px 0px',
    width: '100%',
    color: theme.palette.black,
    textAlign: 'center',
  },
  container: {
    [theme.breakpoints.down('xs')]: {
      paddingTop: '10px',
    },
  },
  cardContainer: {
    height: 'auto',
    width: '100%',
    padding: '15px',
    [theme.breakpoints.down('xs')]: {
      padding: '10px 0px',
    },
  },
  card: {
    width: '100%',
    height: '100%',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  extraPadding: {
    padding: '30px 40px',
    [theme.breakpoints.down('xs')]: {
      padding: '20px 30px',
    },
  },
  cardContent: {
    position: 'relative',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.black,
    flexGrow: 1,
    padding: '0px 15px',
    '&:last-child': {
      paddingBottom: '15px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0px',
    },
  },
  cardMedia: {
    height: 'auto',
    width: '100%',
    marginBottom: '15px',
  },
  cardMediaSmall: {
    padding: '15px 0px 15px',
    height: 'auto',
    width: '120px',
  },
  text: {
    color: theme.palette.black,
  },
  slice: {
    padding: '20px 0px 0px',
  },
  backgroundImageCard: {
    height: '600px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    [theme.breakpoints.down('xs')]: {
      height: '500px',
    },
  },
});

export default twoCardsSliceStyle;
