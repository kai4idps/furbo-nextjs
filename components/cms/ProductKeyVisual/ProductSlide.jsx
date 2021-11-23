import { Children } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';
import Image from 'components/Image';
import NextImage from 'next/image';
import Video from 'components/Video';
import { Carousel } from 'react-responsive-carousel';
import { PLAY_ICON_SVG } from 'config/images/general';
import styles from './productSlideStyle';

const useStyles = makeStyles(styles);

const RenderIndicator = ({ item, index, changeSlideFunc, currentSlide }) => {
  const classes = useStyles();
  return (
    <Button
      key={item.slide.name}
      role="button"
      onClick={() => changeSlideFunc(index)}
      onKeyDown={() => changeSlideFunc(index)}
      tabIndex={index}
      className={classes.button}
    >
      <div
        className={classes.buttonContainer}
        style={{
          border:
            index === currentSlide ? '1px solid black' : '1px solid #999999',
        }}
      >
        {item.slide.kind === 'image' && (
          <Image
            className={classes.buttonIcon}
            alt={item.slide.name}
            src={item.slide.url}
          />
        )}
        {item.slide.kind !== 'image' && (
          <PlayCircleOutline
            className={classes.buttonIcon}
            style={{
              color: '#999999',
              backgroundColor: 'black',
            }}
          />
        )}
      </div>
    </Button>
  );
};

RenderIndicator.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  changeSlideFunc: PropTypes.func.isRequired,
  currentSlide: PropTypes.number.isRequired,
};

const ProductSlide = (props) => {
  const { slides } = props;
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
    <div className={classes.root}>
      <Grid container>
        <Hidden smDown>
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            className={classes.center}
          >
            <div className={classes.indicatorContainerLeft}>
              {Children.toArray(
                slides.map((item, index) => {
                  if (index >= 5) {
                    return null;
                  }
                  return (
                    <RenderIndicator
                      item={item}
                      index={index}
                      changeSlideFunc={changeSlide}
                      currentSlide={currentSlide}
                    />
                  );
                }),
              )}
            </div>
            <div className={classes.indicatorContainerRight}>
              {Children.toArray(
                slides.map((item, index) => {
                  if (index < 5) {
                    return null;
                  }
                  return (
                    <RenderIndicator
                      item={item}
                      index={index}
                      changeSlideFunc={changeSlide}
                      currentSlide={currentSlide}
                    />
                  );
                }),
              )}
            </div>
          </Grid>
        </Hidden>
        <Grid
          item
          xl={8}
          lg={8}
          md={8}
          sm={12}
          xs={12}
          className={classes.center}
        >
          <div className={classes.carouselContainer}>
            <Carousel
              swipeable={true}
              showArrows={false}
              showThumbs={false}
              dynamicHeight={false}
              showIndicators={false}
              infiniteLoop={false}
              autoplay={false}
              selectedItem={currentSlide}
              onChange={updateCurrentSlide}
            >
              {Children.toArray(
                slides.map((item) => {
                  return (
                    <div className={classes.slide}>
                      {item.slide.kind === 'image' && (
                        <Image
                          className={classes.slideImage}
                          alt={item.slide.name}
                          src={item.slide.url}
                        />
                      )}
                      {item.slide.kind !== 'image' && (
                        <>
                          <NextImage
                            className={classes.slideImage}
                            alt={item.slide.name}
                            src={PLAY_ICON_SVG}
                          />
                          <Video
                            className={classes.slideVideo}
                            src={item.slide.url}
                            title={item.slide.name}
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                        </>
                      )}
                    </div>
                  );
                }),
              )}
            </Carousel>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductSlide;

ProductSlide.propTypes = {
  slides: PropTypes.array.isRequired,
};
