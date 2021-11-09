import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import VideoButton from 'components/cms/elements/VideoButton';
import ShopButton from 'components/cms/elements/ShopButton';
import LearnButton from 'components/cms/elements/LearnButton';
import GridElement from 'components/cms/elements/GridElement';
import Image from 'components/Image';
import VisibleSensorAnimation from 'components/VisibleSensorAnimation';
import { isEmpty } from 'src/helpers';
import styles from './keyVisualSliceStyle.js';

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

const getGridSize = (align) => {
  if (align === 'Left') {
    return 5;
  } else if (align === 'Center') {
    return 7;
  } else if (align === 'Right') {
    return 7;
  } else if (align === 'Top Left') {
    return 7;
  }
  return 5;
};

const getGridAlign = (align) => {
  if (align === 'Left') {
    return 'center';
  } else if (align === 'Center') {
    return 'flex-start';
  } else if (align === 'Right') {
    return 'center';
  } else if (align === 'Top Left') {
    return 'flex-start';
  }
  return 'center';
};

const KeyVisualSlice = (props) => {
  const {
    title,
    titleUnderline = false,
    gridAlign,
    textAlign,
    subtitle,
    mobileGridHeight,
    backgroundImageDesktop,
    backgroundImageMobile,
    bannerImageMobile,
    content,
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
  const gridSize = getGridSize(gridAlign);
  return (
    <VisibleSensorAnimation animation="grow">
      <div
        className={classes.root}
        style={{
          backgroundImage: smDown
            ? `url(${backgroundImageMobile.url})`
            : `url(${backgroundImageDesktop.url})`,
          height: smDown ? 'auto' : backgroundImageDesktop.dimensions.height,
          backgroundPosition: gridAlign === 'Center' ? 'center' : null,
          minHeight: xsDown
            ? !isEmpty(mobileGridHeight)
              ? mobileGridHeight
              : '500px'
            : null,
        }}
      >
        <Grid
          container
          className={classes.container}
          style={{
            justifyContent:
              gridAlign === 'Center'
                ? 'center'
                : gridAlign === 'Right'
                ? 'flex-end'
                : 'flex-start',
          }}
        >
          <Grid item md={gridSize} sm={12} xs={12}>
            <div
              className={classes.text}
              style={{
                justifyContent: smDown ? 'flex-start' : getGridAlign(gridAlign),
                paddingTop: smDown
                  ? '0px'
                  : gridAlign === 'Center'
                  ? '40px'
                  : '0px',
              }}
            >
              {!isEmpty(bannerImageMobile) && smDown && (
                <div className={classes.bannerImageContainer}>
                  <Image
                    src={bannerImageMobile.url}
                    alt={bannerImageMobile.alt}
                    className={classes.bannerImage}
                  />
                </div>
              )}
              <div
                className={classes.title}
                style={{
                  textDecorationLine: titleUnderline ? 'underline' : 'none',
                  textDecorationColor: titleUnderline ? '#f7cd3d' : 'none',
                  textDecorationThickness: titleUnderline ? '4px' : 'none',
                  textUnderlineOffset: titleUnderline ? '5px' : 'none',
                  textDecorationSkip: false,
                  textAlign: smDown ? 'center' : `${textAlign.toLowerCase()}`,
                }}
              >
                {RichText.render(title)}
              </div>
              <div
                className={classes.subtitle}
                style={{
                  textAlign: smDown ? 'center' : `${textAlign.toLowerCase()}`,
                }}
              >
                {RichText.render(subtitle)}
              </div>
              {React.Children.toArray(
                content.map((slice) => renderSlice(slice.content)),
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </VisibleSensorAnimation>
  );
};

export default KeyVisualSlice;

KeyVisualSlice.propTypes = {
  title: PropTypes.array,
  titleUnderline: PropTypes.bool,
  gridAlign: PropTypes.string,
  textAlign: PropTypes.string,
  subtitle: PropTypes.array,
  mobileGridHeight: PropTypes.number,
  backgroundImageDesktop: PropTypes.object,
  backgroundImageMobile: PropTypes.object,
  bannerImageMobile: PropTypes.object,
  content: PropTypes.array,
};
