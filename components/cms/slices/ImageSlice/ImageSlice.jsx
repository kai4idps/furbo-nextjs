import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Image from 'components/Image';
import VisibleSensorAnimation from 'components/VisibleSensorAnimation';
import styles from './imageSliceStyle';

const useStyles = makeStyles(styles);

const ImageSlice = (props) => {
  const classes = useStyles();
  const { backgroundColor = 'white', imageDesktop, imageMobile } = props;
  return (
    <VisibleSensorAnimation animation="grow">
      <div
        className={classes.root}
        style={{ backgroundColor: backgroundColor }}
      >
        <Hidden smDown>
          <Image
            className={classes.infoImage}
            src={imageDesktop.url}
            alt={imageDesktop.alt}
          />
        </Hidden>
        <Hidden mdUp>
          <Image
            className={classes.infoImage}
            src={imageMobile.url}
            alt={imageMobile.alt}
          />
        </Hidden>
      </div>
    </VisibleSensorAnimation>
  );
};

export default ImageSlice;

ImageSlice.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  imageDesktop: PropTypes.object.isRequired,
  imageMobile: PropTypes.object.isRequired,
};
