const socialMediaButtonStyle = (theme) => ({
  iconButton: {
    width: '30px',
    height: '30px',
    marginLeft: '30px',
    padding: '5px',
    backgroundColor: theme.palette.white,
    '&,&:hover,&:focus': {
      backgroundColor: theme.palette.white,
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0px',
      marginRight: '30px',
    },
  },
  icon: {
    width: '20px',
    height: '20px',
    color: theme.palette.black,
  },
});

export default socialMediaButtonStyle;
