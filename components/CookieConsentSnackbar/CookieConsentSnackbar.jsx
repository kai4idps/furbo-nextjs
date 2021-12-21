import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MuiSnackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import { getCookie } from 'src/helpers';
import styles from './cookieConsentSnackbarStyle';

const useStyles = makeStyles(styles);

const SlideTransition = (props) => {
  return <Slide {...props} direction="up" />;
};

const Snackbar = ({ message, buttonText }) => {
  const classes = useStyles();
  const [acceptCookie, setAcceptCookie] = useState(true);

  useEffect(() => {
    setAcceptCookie(getCookie('furbo_accept_cookie') === 'true');
  }, []);

  return (
    <MuiSnackbar
      className={classes.root}
      open={!acceptCookie}
      TransitionComponent={SlideTransition}
      ContentProps={{
        classes: {
          root: classes.snackbar,
          action: classes.action,
        },
      }}
      message={<div className={classes.message}>{message}</div>}
      action={
        <Button
          className={classes.button}
          onClick={() => {
            document.cookie = 'furbo_accept_cookie=true;max-age=31536000;';
            setAcceptCookie(!acceptCookie);
          }}
          size="small"
        >
          {buttonText}
        </Button>
      }
    />
  );
};

Snackbar.propTypes = {
  message: PropTypes.node.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Snackbar;
