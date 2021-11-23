import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Image from 'components/Image';
import NextImage from 'next/image';
import Video from 'components/Video';
import { PATH_SHORT_SVG, PATH_LONG_SVG } from 'config/images/general';
import { isEmpty } from 'src/helpers';
import VisibleSensorAnimation from 'components/VisibleSensorAnimation';
import styles from './cardsCarouselSliceStyle';

const useStyles = makeStyles(styles);

const CardsCarouselSlice = (props) => {
  const classes = useStyles();
  const {
    headingComponents,
    title,
    titleUnderline = false,
    titleArrow = false,
    subtitle,
    content,
    backgroundColor,
    singleSlide = false,
  } = props;
  const [open, setOpen] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
  const centerSlidePercentage = singleSlide
    ? 100
    : xsDown
    ? 100
    : smDown
    ? 150 / content.length
    : 100 / content.length;

  const handleOpen = (index) => {
    setOpen({ ...open, [index]: !open[index] });
  };

  const customHtml = (type, element, content, index = 0, key) => {
    if (isEmpty(element)) {
      return null;
    }
    if (element?.data?.label === 'Yellow Underline') {
      return (
        <span
          style={{
            textDecorationLine: 'underline',
            textDecorationColor: '#f7cd3d',
            textDecorationThickness: '4px',
            textUnderlineOffset: '1px',
            textDecorationSkip: false,
          }}
          key={key}
        >
          {content}
        </span>
      );
    } else if (element?.data?.label === 'Red Font') {
      return (
        <span
          style={{
            color: '#d0021b',
          }}
          key={key}
        >
          {content}
        </span>
      );
    } else if (element?.data?.label === 'Yellow Background') {
      return (
        <span
          style={{
            background: '#f7cd3d',
          }}
          key={key}
        >
          {content}
        </span>
      );
    } else if (element?.data?.url?.includes('#')) {
      return (
        <button
          type="button"
          style={{
            color: '#0645ad',
            border: 'none',
            backgroundColor: 'transparent',
            fontSize: '18px',
            fontFamily: 'Avenir',
          }}
          onClick={() => handleOpen(index)}
          key={key}
        >
          {content}
        </button>
      );
    }
    return null;
  };

  return (
    <div
      className={classes.root}
      style={{
        backgroundColor: backgroundColor === 'Grey' ? '#f7f7f7' : 'transparent',
      }}
    >
      <VisibleSensorAnimation animation="grow">
        <Container
          maxWidth="lg"
          className={classes.container}
          style={{ padding: singleSlide ? 0 : null }}
        >
          <div className={classes.headingComponents}>
            {RichText.render(headingComponents)}
          </div>
          {!isEmpty(title) && (
            <div
              className={classes.title}
              style={{
                textDecorationLine: titleUnderline ? 'underline' : 'none',
                textDecorationColor: titleUnderline ? '#f7cd3d' : 'none',
                textDecorationThickness: titleUnderline ? '4px' : 'none',
                textUnderlineOffset: titleUnderline ? '5px' : 'none',
                textDecorationSkip: false,
                height: titleArrow ? '110px' : '80px',
              }}
            >
              <RichText render={title} htmlSerializer={customHtml} />
              {titleArrow && (
                <Hidden smDown>
                  <div className={classes.path}>
                    <div className={classes.pathImageContainer}>
                      <NextImage
                        alt="cute-arrow"
                        src={PATH_SHORT_SVG}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </Hidden>
              )}
              {titleArrow && (
                <Hidden mdUp>
                  <div className={classes.path}>
                    <div className={classes.pathImageContainer}>
                      <NextImage
                        alt="cute-arrow"
                        src={PATH_LONG_SVG}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </Hidden>
              )}
            </div>
          )}
          <div className={classes.subtitle}>{RichText.render(subtitle)}</div>
          <div
            className={classes.carouselContainer}
            style={{
              maxWidth: singleSlide || content.length === 2 ? 800 : null,
            }}
          >
            <Carousel
              swipeable={smDown}
              showArrows={true}
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
              infiniteLoop={smDown}
              centerMode={true}
              centerSlidePercentage={centerSlidePercentage}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev &&
                (smDown || singleSlide) && (
                  <IconButton
                    variant="contained"
                    className={classes.arrow}
                    aria-label="arrow-prev"
                    onClick={onClickHandler}
                    title={label}
                    style={{ left: singleSlide ? 0 : -10 }}
                  >
                    <KeyboardArrowLeft fontSize="medium" />
                  </IconButton>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext &&
                (smDown || singleSlide) && (
                  <IconButton
                    variant="contained"
                    className={classes.arrow}
                    aria-label="arrow-next"
                    onClick={onClickHandler}
                    title={label}
                    style={{ right: singleSlide ? 0 : -10 }}
                  >
                    <KeyboardArrowRight fontSize="medium" />
                  </IconButton>
                )
              }
            >
              {React.Children.toArray(
                content.map((item, index) => (
                  <div className={classes.slide}>
                    <Card className={classes.card} elevation={5}>
                      {item.card_media.kind === 'image' && (
                        <div>
                          <Image
                            className={classes.cardMedia}
                            alt={RichText.asText(item.card_content)}
                            src={item.card_media.url}
                          />
                        </div>
                      )}
                      {item.card_media.kind !== 'image' && (
                        <div>
                          <Video
                            className={classes.cardMedia}
                            src={item.card_media.url}
                            title={item.card_media.name}
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                        </div>
                      )}
                      {!isEmpty(item.card_content) && (
                        <CardContent
                          style={{
                            padding: content.length === 4 ? 10 : null,
                            '&:lastChild': {
                              paddingBottom: content.length === 4 ? 10 : null,
                            },
                          }}
                        >
                          <div
                            className={classes.cardContent}
                            style={{
                              textAlign: item.text_align.toLowerCase(),
                              fontSize: content.length === 4 ? '14px' : null,
                            }}
                          >
                            {!open[index] && (
                              <RichText
                                render={item.card_content}
                                htmlSerializer={(
                                  type,
                                  element,
                                  content,
                                  children,
                                  key,
                                ) =>
                                  customHtml(type, element, content, index, key)
                                }
                              />
                            )}
                            <Collapse
                              in={open[index]}
                              timeout="auto"
                              unmountOnExit
                              collapsedSize={40}
                            >
                              <RichText
                                render={item.card_expand_content}
                                htmlSerializer={(
                                  type,
                                  element,
                                  content,
                                  children,
                                  key,
                                ) =>
                                  customHtml(type, element, content, index, key)
                                }
                              />
                            </Collapse>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  </div>
                )),
              )}
            </Carousel>
          </div>
        </Container>
      </VisibleSensorAnimation>
    </div>
  );
};

export default CardsCarouselSlice;

CardsCarouselSlice.propTypes = {
  headingComponents: PropTypes.array,
  title: PropTypes.array,
  titleUnderline: PropTypes.bool,
  titleArrow: PropTypes.bool,
  subtitle: PropTypes.array,
  content: PropTypes.array,
  backgroundColor: PropTypes.string,
  singleSlide: PropTypes.bool,
  textAlign: PropTypes.string,
};
