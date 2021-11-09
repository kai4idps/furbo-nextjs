import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './shopButtonStyle';

const useStyles = makeStyles(styles);

const ShopButton = ({ className, text }) => {
  const classes = useStyles();
  const btnClasses = `${classes.button} ${className || null}`;
  const region = useSelector((state) => state.region.code);
  const router = useRouter();

  return (
    <div className={classes.root}>
      <Link
        href={{
          pathname: `/${region}/products/furbo-dog-camera`,
          query: router.query,
        }}
        passHref
      >
        <Button className={btnClasses}>{text}</Button>
      </Link>
    </div>
  );
};

ShopButton.propTypes = {
  className: PropTypes.object,
  text: PropTypes.string.isRequired,
};

export default ShopButton;
