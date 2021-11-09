const socialMediaButtonStyle = (theme) => ({
  iconButton: {
    width: '30px',
    height: '30px',
    marginLeft: '30px',
    padding: '5px',
    backgroundColor: 'white',
    '&,&:hover,&:focus': {
      backgroundColor: 'white',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0px',
      marginRight: '30px',
    },
  },
  icon: {
    width: '20px',
    height: '20px',
    color: '#434343',
  },
});

export default socialMediaButtonStyle;
