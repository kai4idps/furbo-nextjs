const twoCardsSliceStyle = (theme) => ({
  root: {
    height: 'auto',
    width: '100%',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      padding: '0px',
    },
  },
  title: {
    padding: '10px 0px 0px',
    width: '100%',
    color: '#434343',
    textAlign: 'center',
  },
  container: {
    [theme.breakpoints.down('xs')]: {
      paddingTop: '20px',
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
  cardContent: {
    position: 'relative',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    color: '#434343',
    flexGrow: 1,
    padding: '15px',
    '&:last-child': {
      paddingBottom: '15px',
    },
  },
  cardMedia: {
    height: 'auto',
    width: '100%',
  },
  cardMediaSmall: {
    padding: '15px 0px 0px',
    height: 'auto',
    width: '120px',
  },
  text: {
    color: '#434343',
  },
  slice: {
    padding: '10px 0px 0px',
    marginTop: 'auto',
  },
});

export default twoCardsSliceStyle;
