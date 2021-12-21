const cartPageStyle = (theme) => ({
  yourShoppingCart: {
    textAlign: 'center',
    fontFamily: 'FuturaPT',
    padding: '20px 0px 20px',
    fontSize: '28px',
    backgroundColor: '#f0f0f0',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 0px 10px',
      fontSize: '22px',
    },
  },
  container: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px 0px 30px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      height: 'auto',
    },
  },
  imageContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: '320px',
      height: '320px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '280px',
      height: '280px',
    },
  },
  content: {
    maxWidth: '560px',
    height: '100%',
    flexDirection: 'column',
    padding: '0px 20px 0px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px',
    },
  },
  contentTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '20px 0px 20px',
  },
  contentTitleText: {
    padding: '25px 0px',
    textAlign: 'center',
    fontFamily: 'FuturaPT',
    fontSize: '32px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
    },
  },
  borderTop: {
    width: '120px',
    borderBottom: '2px solid black',
  },
  borderBottom: {
    width: '120px',
    borderTop: '2px solid black',
  },
  serviceContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'center',
    width: '100%',
    height: 'auto',
    padding: '0px 0px 20px',
  },
  service: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '160px',
    [theme.breakpoints.down('sm')]: {
      width: '140px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '120px',
    },
    '@media (max-width: 400px)': {
      width: '90px',
    },
  },
  serviceIcons: {
    width: '55px',
    height: '55px',
  },
  serviceText: {
    fontSize: '16px',
    textAlign: 'center',
    fontFamily: 'Avenir',
    padding: '0px 10px 0px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },
  priceContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  priceText: {
    fontFamily: 'Avenir',
    fontSize: '32px',
    padding: '5px 0px 25px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
    },
  },
  origin: {
    marginRight: '10px',
  },
  remove: {
    textDecoration: 'line-through',
    color: '#888888',
    fontSize: '16px',
  },
  cents: {
    fontSize: '18px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '10px',
    },
  },
  save: {
    color: theme.palette.red,
    fontSize: '16px',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },
  },
  tax: {
    fontSize: '16px',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: '16px',
    fontFamily: 'Avenir',
    color: '#968f8b',
  },
  icon: {
    widht: '20px',
    height: '20px',
  },
  quantityButtonGroup: {
    padding: '10px 0px 10px',
  },
  buttonMinus: {
    backgroundColor: '#e8e8e8',
    fontSize: '20px',
    border: 'none',
    padding: '10px 10px 10px 25px',
    borderTopLeftRadius: '25px',
    borderBottomLeftRadius: '25px',
    height: '40px',
    width: '40px',
    '&,&:hover,&:focus': {
      backgroundColor: '#e8e8e8',
    },
  },
  buttonQuantity: {
    backgroundColor: '#e8e8e8',
    fontSize: '20px',
    border: 'none',
    height: '40px',
    width: '80px',
    '&,&:hover,&:focus': {
      backgroundColor: '#e8e8e8',
    },
  },
  buttonAdd: {
    backgroundColor: '#e8e8e8',
    fontSize: '20px',
    border: 'none',
    padding: '10px 25px 10px 10px',
    borderTopRightRadius: '25px',
    borderBottomRightRadius: '25px',
    height: '40px',
    width: '40px',
    '&,&:hover,&:focus': {
      backgroundColor: '#e8e8e8',
    },
  },
  checkoutButton: {
    color: theme.palette.white,
    backgroundColor: theme.palette.orange,
    fontFamily: 'FuturaPT',
    textTransform: 'none',
    width: '180px',
    height: '50px',
    borderRadius: '35px',
    fontSize: '24px',
    padding: '25px',
    '&,&:hover,&:focus': {
      backgroundColor: theme.palette.orange,
    },
  },
});

export default cartPageStyle;
