import { Children } from 'react';
import PropTypes from 'prop-types';
import Image from 'components/Image';
import { RichText } from 'prismic-reactjs';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './gridElementStyle';

const useStyles = makeStyles(styles);

const getGridSize = (length) => {
  if (length === 4) {
    return 3;
  } else if (length > 6) {
    return 'auto';
  } else {
    return 4;
  }
};

const GridElement = (props) => {
  const classes = useStyles();
  const { gridContent, imageSize = 'Normal' } = props;
  const gridSize = getGridSize(gridContent.length);
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={gridSize === 'auto' ? 1 : 0}
        justifyContent="center"
      >
        {Children.toArray(
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
