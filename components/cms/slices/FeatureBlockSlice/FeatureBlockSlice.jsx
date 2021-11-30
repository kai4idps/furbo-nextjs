import { Children } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { RichText } from 'prismic-reactjs';
import Video from 'components/Video';
import Image from 'components/Image';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import VisibleSensorAnimation from 'components/VisibleSensorAnimation';
import RenderElement from 'components/cms/RenderElement';
import styles from './featureBlockSliceStyle';
import { isEmpty } from 'src/helpers';

const useStyles = makeStyles(styles);

const FeatureBlockSlice = (props) => {
  const {
    title,
    titleIcon,
    titleUnderline,
    subtitle,
    subtitleUnderline,
    textContent,
    gridAlign,
    mediaContentDesktop,
    mediaContentMobile,
    mediaContentCenter,
    content,
  } = props;
  const classes = useStyles();

  return (
    <VisibleSensorAnimation animation="grow">
      <div className={classes.root}>
        <Grid container className={classes.container}>
          {gridAlign === 'Left' && (
            <Hidden smDown>
              <Grid item className={classes.media} xl={7} lg={7} md={7}>
                {mediaContentDesktop.kind !== 'image' && (
                  <Video
                    src={mediaContentDesktop.url}
                    title={mediaContentDesktop.name}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                )}
                {mediaContentDesktop.kind === 'image' && (
                  <Image
                    src={mediaContentDesktop.url}
                    alt={mediaContentDesktop.alt}
                  />
                )}
              </Grid>
            </Hidden>
          )}
          <Grid
            item
            className={classes.content}
            xl={5}
            lg={5}
            md={5}
            sm={12}
            xs={12}
          >
            <div
              className={classes.title}
              style={{
                textDecorationLine: titleUnderline ? 'underline' : 'none',
                textDecorationColor: titleUnderline ? '#f7cd3d' : 'none',
                textDecorationThickness: titleUnderline ? '4px' : 'none',
                textUnderlineOffset: titleUnderline ? '5px' : 'none',
                textDecorationSkip: false,
              }}
            >
              {!isEmpty(titleIcon) && (
                <Image
                  className={classes.icon}
                  src={titleIcon.url}
                  alt={titleIcon.alt}
                />
              )}
              {RichText.render(title)}
            </div>
            <div
              className={classes.subtitle}
              style={{
                textDecorationLine: subtitleUnderline ? 'underline' : 'none',
                textDecorationColor: subtitleUnderline ? '#f7cd3d' : 'none',
                textDecorationThickness: subtitleUnderline ? '4px' : 'none',
                textUnderlineOffset: subtitleUnderline ? '5px' : 'none',
                textDecorationSkip: false,
              }}
            >
              {RichText.render(subtitle)}
            </div>
            <div className={classes.textContent}>
              {RichText.render(textContent)}
            </div>
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
          </Grid>
          {gridAlign === 'Right' && (
            <Hidden smDown>
              <Grid item className={classes.media} xl={7} lg={7} md={7}>
                {mediaContentDesktop.kind !== 'image' && (
                  <Video
                    src={mediaContentDesktop.url}
                    title={mediaContentDesktop.name}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                )}
                {mediaContentDesktop.kind === 'image' && (
                  <Image
                    src={mediaContentDesktop.url}
                    alt={mediaContentDesktop.alt}
                  />
                )}
              </Grid>
            </Hidden>
          )}
          <Hidden mdUp>
            <Grid item className={classes.media} sm={12} xs={12}>
              {mediaContentMobile.kind !== 'image' && (
                <Video
                  src={mediaContentMobile.url}
                  title={mediaContentMobile.name}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}
              {mediaContentMobile.kind === 'image' && (
                <Image
                  src={mediaContentMobile.url}
                  alt={mediaContentMobile.alt}
                />
              )}
            </Grid>
          </Hidden>
          {!isEmpty(mediaContentCenter?.url) && (
            <Hidden smDown>
              <div className={classes.centerImageContainer}>
                {mediaContentCenter.kind !== 'image' && (
                  <Video
                    src={mediaContentCenter.url}
                    title={mediaContentCenter.name}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                )}
                {mediaContentCenter.kind === 'image' && (
                  <Image
                    src={mediaContentCenter.url}
                    alt={mediaContentCenter.alt}
                  />
                )}
              </div>
            </Hidden>
          )}
        </Grid>
      </div>
    </VisibleSensorAnimation>
  );
};

export default FeatureBlockSlice;

FeatureBlockSlice.propTypes = {
  title: PropTypes.array,
  titleIcon: PropTypes.object,
  titleUnderline: PropTypes.bool,
  subtitle: PropTypes.array,
  subtitleUnderline: PropTypes.bool,
  textContent: PropTypes.array,
  gridAlign: PropTypes.string,
  mediaContentDesktop: PropTypes.object,
  mediaContentMobile: PropTypes.object,
  mediaContentCenter: PropTypes.object,
  content: PropTypes.array,
};
