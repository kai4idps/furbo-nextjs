const textBoxStyle = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '40px',
    width: '100%',
    borderRadius: 5,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  imageContainer: {
    padding: '0px 5px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 5px 0px 0px',
    },
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
  },
});

export default textBoxStyle;
