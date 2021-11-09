import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Image from 'next/image';
import { HAMBURGER_ICON_SVG } from 'config/images/header';
import styles from './menuIconButtonStyle';

const useStyles = makeStyles(styles);

const MenuIconButton = ({ onClick }) => {
  const classes = useStyles();

  return (
    <IconButton className={classes.button} onClick={onClick}>
      <Icon className={classes.image}>
        <Image
          alt="furbo-logo"
          src={HAMBURGER_ICON_SVG}
          layout="fill"
          objectFit="contain"
        />
      </Icon>
    </IconButton>
  );
};

MenuIconButton.propTypes = {
  onClick: PropTypes.func,
};

export default MenuIconButton;
