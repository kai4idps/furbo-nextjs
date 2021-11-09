import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { makeStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Image from 'components/Image';
import VisibleSensorAnimation from 'components/VisibleSensorAnimation';
import styles from './logoSliderSliceStyle';

const useStyles = makeStyles(styles);

const LogoSliderSlice = (props) => {
  const { content } = props;
  const classes = useStyles();
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
        <div className={classes.carouselContainer}>
          <Carousel
            swipeable={true}
            showArrows={true}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            infiniteLoop={true}
            centerMode={false}
            autoplay={true}
            interval={3000}
            selectedItem={currentSlide}
            onChange={updateCurrentSlide}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <IconButton
                  variant="contained"
                  className={classes.arrow}
                  aria-label="arrow-next"
                  onClick={onClickHandler}
                  title={label}
                  style={{ left: '-10px' }}
                >
                  <KeyboardArrowLeft fontSize="medium" />
                </IconButton>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <IconButton
                  variant="contained"
                  className={classes.arrow}
                  aria-label="arrow-next"
                  onClick={onClickHandler}
                  title={label}
                  style={{ right: '-10px' }}
                >
                  <KeyboardArrowRight fontSize="medium" />
                </IconButton>
              )
            }
          >
            {React.Children.toArray(
              content.map((item) => (
                <div className={classes.slide}>
                  <div className={classes.quoteContainer}>
                    <Hidden smDown>
                      <div className={classes.quotationMarkLeft}>“</div>
                      <div className={classes.quote}>
                        {RichText.render(item.quote)}
                      </div>
                      <div className={classes.quotationMarkRight}>”</div>
                    </Hidden>
                    <Hidden mdUp>
                      <Paper className={classes.paper} elevation={3}>
                        <div className={classes.quote}>
                          <div className={classes.quotationMarkLeft}>“</div>
                          {RichText.render(item.quote)}
                          <div className={classes.quotationMarkRight}>”</div>
                        </div>
                        <Image
                          className={classes.buttonIcon}
                          src={item.logo.url}
                          alt={item.logo.alt}
                          type="image/svg+xml"
                        />
                      </Paper>
                    </Hidden>
                  </div>
                </div>
              )),
            )}
          </Carousel>
        </div>
        <div className={classes.indicatorContainer}>
          {React.Children.toArray(
            content.map((item, index) => {
              return (
                <>
                  <Hidden smDown>
                    <Button
                      key={item.text}
                      role="button"
                      onClick={() => changeSlide(index)}
                      onKeyDown={() => changeSlide(index)}
                      tabIndex={item.index}
                      className={classes.button}
                    >
                      <div
                        className={classes.buttonIcon}
                        style={{
                          filter:
                            currentSlide === index ? 'none' : 'grayscale(100%)',
                          opacity: currentSlide === index ? '100%' : '40%',
                          maxWidth: `calc(100% / ${content.lenght})`,
                        }}
                      >
                        <Image
                          className={classes.buttonIcon}
                          alt={item.logo.alt}
                          src={item.logo.url}
                        />
                      </div>
                    </Button>
                  </Hidden>
                  <Hidden mdUp>
                    <IconButton
                      className={classes.button}
                      variant="contained"
                      size="small"
                      role="button"
                      onClick={() => changeSlide(index)}
                      onKeyDown={() => changeSlide(index)}
                      tabIndex={item.index}
                      style={{
                        opacity: currentSlide === index ? '100%' : '30%',
                      }}
                    />
                  </Hidden>
                </>
              );
            }),
          )}
        </div>
      </div>
    </VisibleSensorAnimation>
  );
};

export default LogoSliderSlice;

LogoSliderSlice.propTypes = {
  content: PropTypes.array,
};
