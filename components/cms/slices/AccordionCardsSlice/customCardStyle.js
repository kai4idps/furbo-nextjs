const customCardStyle = () => ({
  card: {},
  cardHeader: {
    padding: '8px 8px 0px',
  },
  avatar: {
    height: '35px',
    width: 'auto',
  },
  cardTitle: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '16px',
  },
  cardSubtitle: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'red',
    fontSize: '16px',
  },
  cardImage: {
    height: 'auto',
    width: 'auto',
    marginRight: '16px',
  },
  cardAction: {
    margin: '10px 10px 10px',
    fontSize: '14px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '0px',
    '&:last-child': {
      paddingBottom: '0px',
    },
  },
});

export default customCardStyle;
