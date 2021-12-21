const accordionCardsStyle = (theme) => ({
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
    [theme.breakpoints.down('xs')]: {
      fontSize: '24px',
      lineHeight: '24px',
    },
  },
  gridTitle: {
    textAlign: 'center',
    display: 'flex',
    padding: '10px 20px 0px',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  gridContainer: {
    maxWidth: '950px',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 10px 0px',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 5px 0px',
    },
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
    },
  },
});

export default accordionCardsStyle;
