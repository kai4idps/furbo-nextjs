const baseLayoutStyle = (theme) => ({
  container: {
    position: 'relative',
    padding: '155px 50px 0px 50px',
    [theme.breakpoints.down('sm')]: {
      padding: '145px 15px 0px 15px',
    },
  },
  extraPadding: {
    padding: '165px 15px 0px 15px',
  },
});

export default baseLayoutStyle;
