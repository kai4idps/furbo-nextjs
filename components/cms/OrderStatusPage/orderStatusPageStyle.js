const orderStatusStyle = (theme) => ({
  root: {
    padding: 0,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'FuturaPT',
    padding: '20px 0px 20px',
    fontSize: '34px',
  },
  subtitle: {
    fontFamily: 'Avenir',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  text: {
    fontFamily: 'Avenir',
    fontSize: '14px',
    padding: '10px 0px 10px',
  },
  label: {
    fontFamily: 'Avenir',
    fontSize: '16px',
    padding: '10px 0px 10px',
    fontWeight: 'bold',
  },
  textField: {
    width: '100%',
  },
  buttonContainer: {
    padding: '30px 0px 20px',
  },
  button: {
    textTransform: 'none',
    fontFamily: 'FuturaPT',
    fontSize: '18px',
    backgroundColor: '#efefef',
    padding: '6px 80px 2px',
    border: '1px solid #999999',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    width: '25%',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  infoHeading: {
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '10px',
    },
  },
  infoContent: {
    display: 'flex',
    fontFamily: 'Avenir',
    justifyContent: 'center',
    fontSize: '12px',
    alignItems: 'center',
    height: '40px',
  },
  detailButton: {
    textTransform: 'none',
    padding: '2px 8px',
    fontFamily: 'Avenir',
    fontSize: '12px',
    alignItems: 'center',
  },
  greyContainer: {
    width: '100%',
    backgroundColor: '#f6f6f6',
    padding: '10px',
    border: 'solid 1px #d2d2d2',
    borderRadius: '5px',
  },
  itemInfoContainer: {
    width: '100%',
  },
  itemInfo: {
    width: '100%',
    border: '1px solid #d2d2d2',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  itemProcessStatus: {
    width: '100%',
    fontFamily: 'Avenir',
    fontSize: '16px',
    textAlign: 'center',
    padding: '5px',
    backgroundColor: '#cccccc',
  },
  itemShippingStatus: {
    width: '100%',
    fontFamily: 'Avenir',
    fontSize: '16px',
    textAlign: 'center',
    padding: '5px',
    backgroundColor: '#eeeeee',
    marginBottom: '10px',
  },
  itemContent: {
    display: 'flex',
  },
  itemText: {
    flex: 1,
    margin: '10px 10px 0px',
  },
  itemTextTitle: {
    fontFamily: 'Avenir',
    fontSize: '13px',
    fontWeight: 'bold',
  },
  infoText: {
    fontFamily: 'Avenir',
    fontSize: '12px',
    color: '#444444',
  },
  spinnerContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
  },
});

export default orderStatusStyle;
