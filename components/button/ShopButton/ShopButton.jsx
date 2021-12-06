import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './shopButtonStyle';

const useStyles = makeStyles(styles);

const ShopButton = ({ className, text }) => {
  const classes = useStyles();
  const btnClasses = `${classes.button} ${className || null}`;
  const router = useRouter();
  const { region, ...query } = router.query;
  const pathname = router.asPath.split('?')[0];

  const handleGaEvent = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cta_click',
    });
  };

  return (
    <div className={classes.root}>
      <Link
        href={{
          pathname:
            pathname === `/${region}/products/furbo-dog-camera`
              ? `/${region}/pages/cart`
              : `/${region}/products/furbo-dog-camera`,
          query,
        }}
        passHref
      >
        <Button className={btnClasses} onClick={handleGaEvent} id="shop-button">
          {text}
        </Button>
      </Link>
    </div>
  );
};

ShopButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default ShopButton;
