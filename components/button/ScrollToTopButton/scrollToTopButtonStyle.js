const scrollToTopButtonStyle = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: theme.palette.black,
  },
  fab: {
    zIndex: 3,
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '35px',
    height: '35px',
    color: theme.palette.yellow,
    backgroundColor: theme.palette.white,
  },
  arrow: {
    width: '30px',
    height: '30px',
  },
});

export default scrollToTopButtonStyle;
