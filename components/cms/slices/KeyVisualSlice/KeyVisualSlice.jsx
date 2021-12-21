import { Children } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import RenderElement from 'components/cms/RenderElement';
import Image from 'components/Image';
import VisibleSensorAnimation from 'components/VisibleSensorAnimation';
import { isEmpty } from 'src/helpers';
import styles from './keyVisualSliceStyle.js';

const useStyles = makeStyles(styles);

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
    iconImage,
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
                  textDecorationColor: titleUnderline
                    ? theme.palette.yellow
                    : 'none',
                  textDecorationThickness: titleUnderline ? '4px' : 'none',
                  textUnderlineOffset: titleUnderline ? '5px' : 'none',
                  textDecorationSkip: false,
                  textAlign: smDown ? 'center' : `${textAlign.toLowerCase()}`,
                }}
              >
                <div className={classes.relative}>
                  <div className={classes.iconContainer}>
                    {!isEmpty(iconImage) && (
                      <Image
                        className={classes.icon}
                        src={iconImage.url}
                        alt={iconImage.alt}
                      />
                    )}
                  </div>
                  {RichText.render(title)}
                </div>
              </div>
              <div
                className={classes.subtitle}
                style={{
                  textAlign: smDown ? 'center' : `${textAlign.toLowerCase()}`,
                }}
              >
                {RichText.render(subtitle)}
              </div>
              {Children.toArray(
                content.map((slice, index) => (
                  <>
                    {index !== 0 && <br />}
                    <RenderElement
                      type={slice.content.type}
                      data={slice.content.data}
                    />
                  </>
                )),
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
  iconImage: PropTypes.object,
  gridAlign: PropTypes.string,
  textAlign: PropTypes.string,
  subtitle: PropTypes.array,
  mobileGridHeight: PropTypes.number,
  backgroundImageDesktop: PropTypes.object,
  backgroundImageMobile: PropTypes.object,
  bannerImageMobile: PropTypes.object,
  content: PropTypes.array,
};
