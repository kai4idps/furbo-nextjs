import React from 'react';
import PropTypes from 'prop-types';
import Image from 'components/Image';
import { RichText } from 'prismic-reactjs';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './gridElementStyle';

const useStyles = makeStyles(styles);

const GridElement = (props) => {
  const classes = useStyles();
  const { gridContent, imageSize = 'Normal' } = props;
  const gridSize = gridContent.length === 4 ? 3 : 4;
  return (
    <div className={classes.root}>
      <Grid container>
        {React.Children.toArray(
          gridContent.map((item) => (
            <Grid
              item
              sm={gridSize}
              xs={imageSize === 'Large' ? 12 : gridSize}
              className={classes.gridItem}
            >
              <div
                className={
                  imageSize === 'Large' ? classes.imageLarge : classes.image
                }
              >
                <Image
                  className={
                    imageSize === 'Large' ? classes.imageLarge : classes.image
                  }
                  alt={item.item_icon.alt}
                  src={item.item_icon.url}
                />
              </div>
              <div className={classes.text}>
                {RichText.render(item.item_name)}
              </div>
            </Grid>
          )),
        )}
      </Grid>
    </div>
  );
};

export default GridElement;

GridElement.propTypes = {
  gridContent: PropTypes.array.isRequired,
  imageSize: PropTypes.string,
};
