import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import styles from './shopButtonStyle';

const useStyles = makeStyles(styles);

const ShopButton = ({ className, text }) => {
  const classes = useStyles();
  const btnClasses = `${classes.button} ${className || null}`;
  const region = useSelector((state) => state.region.code);

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
          pathname: `/${region}/products/furbo-dog-camera`,
        }}
        passHref
      >
        <Button className={btnClasses} onClick={handleGaEvent}>
          {text}
        </Button>
      </Link>
    </div>
  );
};

ShopButton.propTypes = {
  className: PropTypes.object,
  text: PropTypes.string.isRequired,
};

export default ShopButton;
