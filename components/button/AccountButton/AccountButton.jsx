import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Image from 'next/image';
import Link from 'next/link';
import { ACCOUNT_ICON_SVG } from 'config/images/header';
import styles from './accountButtonStyle';

const useStyles = makeStyles(styles);

const AccountButton = ({ text, className }) => {
  const classes = useStyles();

  const handleGaEvent = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cta_click',
    });
  };

  return (
    <Link
      href={{
        pathname: 'https://furbo.com/account',
      }}
      passHref
    >
      <Button
        className={`${classes.button} ${className}`}
        onClick={handleGaEvent}
      >
        <Icon className={classes.image}>
          <Image
            alt="furbo-logo"
            src={ACCOUNT_ICON_SVG}
            layout="fill"
            objectFit="contain"
          />
        </Icon>
        {text}
      </Button>
    </Link>
  );
};

AccountButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.node,
};

export default AccountButton;
