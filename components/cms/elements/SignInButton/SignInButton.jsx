import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import styles from './signInButtonStyle';

const useStyles = makeStyles(styles);

const SignInButton = (props) => {
  const classes = useStyles();
  const { className, signInButtonText, center } = props;
  const btnClasses = `${classes.button} ${className || null}`;

  const handleGaEvent = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cta_click',
    });
  };

  return (
    <div
      className={classes.root}
      style={{ justifyContent: center ? 'center' : 'flex-start' }}
    >
      <Link
        href={{
          pathname: '/account',
        }}
        passHref
      >
        <Button className={btnClasses} onClick={handleGaEvent}>
          {signInButtonText}
        </Button>
      </Link>
    </div>
  );
};

export default SignInButton;

SignInButton.propTypes = {
  className: PropTypes.object,
  signInButtonText: PropTypes.string.isRequired,
  center: PropTypes.bool,
};
