import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './signInButtonStyle';

const useStyles = makeStyles(styles);

const SignInButton = (props) => {
  const classes = useStyles();
  const { className, signInButtonText, center } = props;
  const btnClasses = `${classes.button} ${className || null}`;
  const router = useRouter();
  const {
    region, // eslint-disable-line no-unused-vars
    ...query
  } = router.query;

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
          pathname: 'https://furbo.com/account',
          query,
        }}
        passHref
      >
        <Button
          className={btnClasses}
          onClick={handleGaEvent}
          id="sign-in-button"
        >
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
