const brandStoryPageStyle = (theme) => ({
  keyVisual: {
    display: 'flex',
    justifyContent: 'center',
    height: '450px',
    width: '100%',
    flexWrap: 'wrap',
    backgroundSize: 'auto 100%',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    borderRadius: '5px',
    [theme.breakpoints.down('sm')]: {
      backgroundSize: '100%',
      backgroundPosition: 'bottom',
      height: '600px',
    },
    [theme.breakpoints.down('xs')]: {
      height: '380px',
    },
  },
  keyVisualTitle: {
    height: 'auto',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '40px',
      textAlign: 'center',
      alignItems: 'flex-start',
    },
  },
  ourStory: {
    height: 'auto',
    width: '100%',
    padding: '30px 10px 0px',
  },
  ourStoryTitle: {
    fontFamily: 'FuturaPT',
    fontSize: '32px',
    height: 'auto',
    padding: '20px 0px 15px',
    width: '100%',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    },
  },
  text: {
    fontFamily: 'Avenir',
    fontSize: '18px',
    lineHeight: 'normal',
    padding: '0px 20px 10px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 5px 10px',
    },
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'relative',
    maxWidth: '100%',
    width: 'auto',
    height: '100%',
    display: 'flex',
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
    },
  },
  quote: {
    padding: '15px 15px 15px',
    margin: '15px 0px 15px',
    borderLeft: '2px solid green',
    fontFamily: 'Avenir',
    fontSize: '22px',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    flexDirection: 'column',
  },
});

export default brandStoryPageStyle;
