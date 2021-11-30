import { Children } from 'react';
import { RichText } from 'prismic-reactjs';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Image from 'components/Image';
import VisibleSensorAnimation from 'components/VisibleSensorAnimation';
import RenderElement from 'components/cms/RenderElement';
import { isEmpty } from 'src/helpers';
import styles from './homeKeyVisualStyle.js';

const useStyles = makeStyles(styles);

const HomeKeyVisual = ({ campaign }) => {
  const classes = useStyles();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  if (isEmpty(campaign)) {
    return <div className={classes.root} />;
  }

  return (
    <VisibleSensorAnimation animation="grow">
      <div
        className={classes.root}
        style={{
          backgroundImage: smDown
            ? `url(${campaign.key_visual_image_mobile.url})`
            : `url(${campaign.key_visual_image_desktop.url})`,
        }}
      >
        <Grid container>
          <Grid item md={7} sm={12}>
            <div className={classes.text}>
              <div
                className={classes.title}
                style={{ color: campaign.text_color }}
              >
                {RichText.render(campaign.title)}
              </div>
              <div
                className={classes.subtitle}
                style={{ color: campaign.text_color }}
              >
                {RichText.render(campaign.subtitle)}
              </div>
              {Children.toArray(
                campaign.content.map((slice) => (
                  <RenderElement
                    type={slice.content_array.type}
                    data={slice.content_array.data}
                  />
                )),
              )}
            </div>
          </Grid>
        </Grid>
        <div className={classes.centerImageContainer}>
          <div className={classes.centerImage}>
            <Image
              className={classes.centerImage}
              src={campaign.center_image.url}
              alt={campaign.center_image.alt}
            />
          </div>
        </div>
      </div>
    </VisibleSensorAnimation>
  );
};

HomeKeyVisual.propTypes = {
  campaign: PropTypes.object.isRequired,
};

export default HomeKeyVisual;
