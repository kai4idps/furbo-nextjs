import React from 'react';
import { RichText } from 'prismic-reactjs';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Image from 'components/Image';
import VideoButton from 'components/cms/elements/VideoButton';
import ShopButton from 'components/cms/elements/ShopButton';
import { isEmpty } from 'src/helpers';
import styles from './homeKeyVisualStyle.js';

const useStyles = makeStyles(styles);

const renderSlice = (slice) => {
  if (slice.type === 'video_button') {
    return (
      <VideoButton
        embedVideoLink={`${slice.data.video_link.embed_url.replace(
          'watch?v=',
          'embed/',
        )}?enablejsapi=1`}
        watchVideoText={slice.data.watch_video_text}
        center={slice.data.center}
        textColor={slice.data.text_color}
      />
    );
  } else if (slice.type === 'shop_button') {
    return (
      <ShopButton
        shopButtonText={slice.data.shop_button_text}
        center={slice.data.center}
      />
    );
  } else {
    return null;
  }
};

const HomeKeyVisual = ({ campaign }) => {
  const classes = useStyles();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  if (isEmpty(campaign)) {
    return <div className={classes.root} />;
  }

  return (
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
            {React.Children.toArray(
              campaign.content.map((slice) => renderSlice(slice.content_array)),
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
  );
};

HomeKeyVisual.propTypes = {
  campaign: PropTypes.object.isRequired,
};

export default HomeKeyVisual;
