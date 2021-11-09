import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Carousel } from 'react-responsive-carousel';
import Image from 'components/Image';
import VisibleSensorAnimation from 'components/VisibleSensorAnimation';
import styles from './smartAlertsSliceStyle';
import { isEmpty } from 'src/helpers';

const useStyles = makeStyles(styles);

const SmartAlertsSlice = (props) => {
  const {
    title,
    titleIcon,
    titleUnderline = false,
    subtitle,
    textContent,
    backgroundImageDesktop,
    backgroundImageMobile,
    content,
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  const updateCurrentSlide = (index) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  return (
    <VisibleSensorAnimation animation="grow">
      <div className={classes.root}>
        <div className={classes.contentContainer}>
          <Grid container>
            <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
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
              <div className={classes.subtitle}>
                {RichText.render(subtitle)}
              </div>
              <div className={classes.textContent}>
                {RichText.render(textContent)}
              </div>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className={classes.indicatorContainer}>
                {React.Children.toArray(
                  content.map((item, index) => {
                    return (
                      <Button
                        key={item.alert_name}
                        onClick={() => changeSlide(index + 1)}
                        onKeyDown={() => changeSlide(index + 1)}
                        tabIndex={index + 1}
                        className={classes.button}
                        disableFocusRipple
                        disableRipple
                        disableElevation
                      >
                        <div className={classes.buttonContainer}>
                          <div
                            className={classes.buttonIcon}
                            style={{
                              opacity:
                                currentSlide !== 0
                                  ? currentSlide === index + 1
                                    ? '100%'
                                    : '50%'
                                  : '100%',
                            }}
                          >
                            <Image
                              className={classes.buttonIcon}
                              alt={item.alert_icon.alt}
                              src={item.alert_icon.url}
                            />
                          </div>
                          <div className={classes.buttonText}>
                            {item.alert_name}
                          </div>
                        </div>
                      </Button>
                    );
                  }),
                )}
              </div>
            </Grid>
          </Grid>
        </div>
        <Carousel
          swipeable={false}
          showArrows={false}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          selectedItem={currentSlide}
          onChange={updateCurrentSlide}
        >
          <div
            className={classes.slide}
            style={{
              backgroundImage: smDown
                ? `url(${backgroundImageMobile.url})`
                : `url(${backgroundImageDesktop.url})`,
              height: smDown
                ? 'auto'
                : backgroundImageDesktop.dimensions.height,
            }}
          />
          {React.Children.toArray(
            content.map((item) => (
              <div
                className={classes.slide}
                style={{
                  backgroundImage: smDown
                    ? `url(${item.background_image_mobile.url})`
                    : `url(${item.background_image_desktop.url})`,
                  height: smDown
                    ? 'auto'
                    : backgroundImageDesktop.dimensions.height,
                }}
              />
            )),
          )}
        </Carousel>
      </div>
    </VisibleSensorAnimation>
  );
};

export default SmartAlertsSlice;

SmartAlertsSlice.propTypes = {
  title: PropTypes.array,
  titleIcon: PropTypes.object,
  titleUnderline: PropTypes.bool,
  subtitle: PropTypes.array,
  textContent: PropTypes.array,
  backgroundImageDesktop: PropTypes.object,
  backgroundImageMobile: PropTypes.object,
  content: PropTypes.array,
};
