import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Image from 'components/Image';
import VisibleSensorAnimation from 'components/VisibleSensorAnimation';
import ShopButton from 'components/cms/elements/ShopButton';
import LearnButton from 'components/cms/elements/LearnButton';
import GridElement from 'components/cms/elements/GridElement';
import styles from './splitLayoutSliceStyle';

const useStyles = makeStyles(styles);

const renderSlice = (slice) => {
  if (slice.type === 'shop_button') {
    return (
      <ShopButton
        shopButtonText={slice.data.shop_button_text}
        center={slice.data.center}
      />
    );
  } else if (slice.type === 'learn_button') {
    return (
      <LearnButton
        color={slice.data.color}
        learnButtonText={slice.data.learn_button_text}
        link={slice.data.link}
      />
    );
  } else if (slice.type === 'grid_element') {
    return <GridElement gridContent={slice.data.content} />;
  } else {
    return null;
  }
};

const SplitLayoutSlice = (props) => {
  const classes = useStyles();
  const { title, subtitle, image, gridAlign, content } = props;
  return (
    <VisibleSensorAnimation animation="grow">
      <div className={classes.root}>
        <Grid container justifyContent="center" alignItems="center">
          {gridAlign === 'Left' && (
            <Grid
              className={classes.gridItem}
              item
              xl={4}
              lg={4}
              md={5}
              sm={12}
              xs={12}
            >
              <Image
                className={classes.image}
                src={image.url}
                alt={image.alt}
              />
            </Grid>
          )}
          <Grid
            className={classes.griditem}
            item
            xl={4}
            lg={4}
            md={5}
            sm={12}
            xs={12}
          >
            <div className={classes.title}>{RichText.render(title)}</div>
            <div className={classes.subtitle}>{RichText.render(subtitle)}</div>
            <div className={classes.content}>
              {React.Children.toArray(
                content.map((slice) => renderSlice(slice.content)),
              )}
            </div>
          </Grid>
          {gridAlign === 'Right' && (
            <Grid
              className={classes.gridItem}
              item
              xl={4}
              lg={4}
              md={5}
              sm={12}
              xs={12}
            >
              <Image
                className={classes.image}
                src={image.url}
                alt={image.alt}
              />
            </Grid>
          )}
        </Grid>
      </div>
    </VisibleSensorAnimation>
  );
};

export default SplitLayoutSlice;

SplitLayoutSlice.propTypes = {
  title: PropTypes.array.isRequired,
  subtitle: PropTypes.array,
  content: PropTypes.array,
  image: PropTypes.object,
  gridAlign: PropTypes.string.isRequired,
};
