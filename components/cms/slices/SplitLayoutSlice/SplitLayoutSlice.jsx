import { Children } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Image from 'components/Image';
import VisibleSensorAnimation from 'components/VisibleSensorAnimation';
import RenderElement from 'components/cms/RenderElement';
import { isEmpty } from 'src/helpers';
import styles from './splitLayoutSliceStyle';

const useStyles = makeStyles(styles);

const SplitLayoutSlice = ({
  title,
  subtitle,
  image,
  gridAlign,
  fullWidth,
  content,
}) => {
  const classes = useStyles();
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
            xl={fullWidth ? 6 : 4}
            lg={fullWidth ? 6 : 4}
            md={fullWidth ? 6 : 5}
            sm={12}
            xs={12}
          >
            {!isEmpty(title) && (
              <div className={classes.title}>{RichText.render(title)}</div>
            )}
            {!isEmpty(subtitle) && (
              <div className={classes.subtitle}>
                {RichText.render(subtitle)}
              </div>
            )}
            <div className={classes.content}>
              {Children.toArray(
                content.map((slice) => (
                  <>
                    <br />
                    <RenderElement
                      type={slice.content.type}
                      data={slice.content.data}
                    />
                  </>
                )),
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
  fullWidth: PropTypes.bool.isRequired,
};
