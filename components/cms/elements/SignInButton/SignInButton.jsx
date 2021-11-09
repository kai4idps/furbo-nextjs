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

  return (
    <div
      className={classes.root}
      style={{ justifyContent: center ? 'center' : 'flex-start' }}
    >
      <Link
        href={{
          pathname: '/account',
          query: router.query,
        }}
        passHref
      >
        <Button className={btnClasses}>{signInButtonText}</Button>
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
