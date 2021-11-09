import { useState, Children } from 'react';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';
import IconButton from '@material-ui/core/IconButton';
import Image from 'components/Image';
import VisibleSensorAnimation from 'components/VisibleSensorAnimation';
import styles from './timelineStyle';

const useStyles = makeStyles(styles);

const Timeline = ({ info, title }) => {
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
        <div className={classes.indicatorContainer}>
          <div className={classes.buttonContainer}>
            {Children.toArray(
              info.map((item, index) => {
                return (
                  <IconButton
                    style={{
                      backgroundColor:
                        currentSlide === index ? '#888888' : 'transparent',
                    }}
                    className={classes.button}
                    role="button"
                    onClick={() => changeSlide(index)}
                    onKeyDown={() => changeSlide(index)}
                    tabIndex={index}
                  />
                );
              }),
            )}
          </div>
        </div>
        <div className={classes.title}>{title}</div>
        <Carousel
          swipeable={true}
          showArrows={false}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={10000}
          selectedItem={currentSlide}
          onChange={updateCurrentSlide}
        >
          {Children.toArray(
            info.map((item) => (
              <div className={classes.slide}>
                <Image
                  className={classes.slideImage}
                  alt={item.timeline_background_image.alt}
                  src={item.timeline_background_image.url}
                />
                <div className={classes.slideText}>
                  <div>{RichText.render(item.content)}</div>
                </div>
              </div>
            )),
          )}
        </Carousel>
      </div>
    </VisibleSensorAnimation>
  );
};

Timeline.propTypes = {
  info: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Timeline;
