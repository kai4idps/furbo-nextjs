import theme from 'styles/theme';

export const arrow = {
  position: 'absolute',
  zIndex: 2,
  top: 'calc(50% - 15px)',
  width: 30,
  height: 30,
  cursor: 'pointer',
  backgroundColor: theme.palette.yellow,
  padding: '0px',
  color: '#fff',
  '&,&:hover,&:focus': {
    backgroundColor: theme.palette.yellow,
  },
};
