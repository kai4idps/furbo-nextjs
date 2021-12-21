const productButtonStyle = (theme) => ({
  buttonPaper: {
    width: '100%',
    maxWidth: '550px',
    display: 'flex',
    borderRadius: '10px',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      height: '100px',
    },
    '@media (max-width: 360px)': {
      height: '80px',
    },
  },
  productImage: {
    width: '100px',
    height: '100px',
    borderRadius: '10px',
    '@media (max-width: 360px)': {
      width: '80px',
      height: '80px',
    },
  },
  buttonText: {
    fontFamily: 'FuturaPT',
    flexGrow: 1,
    paddingLeft: '10px',
    lineHeight: 'normal',
    fontSize: '21px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      width: 'calc(100% - 100px - 125px)',
    },
    '@media (max-width: 380px)': {
      fontSize: '16px',
    },
  },
  price: {
    fontFamily: 'Avenir',
    fontSize: '18px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
    '@media (max-width: 380px)': {
      fontSize: '12px',
    },
  },
  originalPrice: {
    fontFamily: 'Avenir',
    fontSize: '18px',
    textDecoration: 'line-through',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
    '@media (max-width: 350px)': {
      fontSize: '12px',
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '20px',
    [theme.breakpoints.down('sm')]: {
      paddingRight: '10px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingRight: '5px',
    },
  },
  shopButton: {
    color: theme.palette.black,
    width: '120px',
    height: '40px',
    backgroundColor: theme.palette.yellow,
    borderRadius: '100px',
    textAlign: 'center',
    '&,&:hover,&:focus': {
      backgroundColor: theme.palette.yellow,
      height: '40px',
    },
    '@media (max-width: 380px)': {
      fontSize: '16px',
      width: '100px',
      height: '30px',
      '&,&:hover,&:focus': {
        height: '30px',
      },
    },
  },
  learnButton: {
    color: theme.palette.black,
    width: '120px',
    height: '40px',
    backgroundColor: '#d8d8d8',
    borderRadius: '100px',
    textAlign: 'center',
    '&,&:hover,&:focus': {
      backgroundColor: '#d8d8d8',
      height: '40px',
    },
    '@media (max-width: 380px)': {
      fontSize: '16px',
      width: '100px',
      height: '30px',
      '&,&:hover,&:focus': {
        height: '30px',
      },
    },
  },
});

export default productButtonStyle;
