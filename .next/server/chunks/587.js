"use strict";
exports.id = 587;
exports.ids = [587];
exports.modules = {

/***/ 1587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sections_HomeSection)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/cms/slices/KeyVisualSlice/index.js + 2 modules
var KeyVisualSlice = __webpack_require__(7441);
// EXTERNAL MODULE: ./components/cms/slices/CardsCarouselSlice/index.js + 2 modules
var CardsCarouselSlice = __webpack_require__(9557);
// EXTERNAL MODULE: ./components/cms/slices/SmartAlertsSlice/index.js + 2 modules
var SmartAlertsSlice = __webpack_require__(1301);
// EXTERNAL MODULE: ./components/cms/slices/FeatureBlockSlice/index.js + 2 modules
var FeatureBlockSlice = __webpack_require__(1384);
// EXTERNAL MODULE: external "prismic-reactjs"
var external_prismic_reactjs_ = __webpack_require__(3437);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: external "react-responsive-carousel"
var external_react_responsive_carousel_ = __webpack_require__(2242);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Hidden/Hidden.js + 3 modules
var Hidden = __webpack_require__(1543);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(9895);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(7812);
// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowRight"
var KeyboardArrowRight_ = __webpack_require__(4953);
var KeyboardArrowRight_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowRight_);
// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowLeft"
var KeyboardArrowLeft_ = __webpack_require__(1969);
var KeyboardArrowLeft_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowLeft_);
// EXTERNAL MODULE: ./components/Image/index.js + 1 modules
var Image = __webpack_require__(4592);
// EXTERNAL MODULE: ./components/VisibleSensorAnimation/index.js + 1 modules
var VisibleSensorAnimation = __webpack_require__(8516);
// EXTERNAL MODULE: ./styles/carousel.js
var carousel = __webpack_require__(106);
;// CONCATENATED MODULE: ./components/cms/slices/LogoSliderSlice/logoSliderSliceStyle.js


const logoSliderSliceStyle = theme => ({
  root: {
    height: 'auto',
    width: '100%',
    padding: '30px 0px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 0px'
    }
  },
  carouselContainer: {
    width: '100%',
    height: '100%',
    padding: '0px 35px 0px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px'
    }
  },
  slide: {
    height: '100%',
    padding: '30px 15px 30px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px'
    }
  },
  quoteContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    width: 'auto'
  },
  quotationMarkLeft: {
    position: 'relative',
    fontSize: '36px',
    fontFamily: 'PingFang TC',
    fontWeight: 'bold',
    color: '#f7cd3d',
    top: '-15px',
    left: '-10px',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: '10px',
      left: '25px'
    }
  },
  quotationMarkRight: {
    position: 'relative',
    fontSize: '36px',
    fontFamily: 'PingFang TC',
    fontWeight: 'bold',
    color: '#f7cd3d',
    bottom: '-25px',
    right: '-10px',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      bottom: '35px',
      right: '25px'
    }
  },
  quote: {
    fontFamily: 'Avenir',
    color: '#434343',
    height: 'auto',
    width: 'auto',
    fontSize: '24px',
    [theme.breakpoints.down('sm')]: {
      height: '100%',
      paddingTop: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      fontSize: '16px',
      width: '260px'
    }
  },
  arrow: carousel/* arrow */.x,
  indicatorContainer: {
    backgroundColor: 'transparent',
    height: 'auto',
    width: '100%',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '15px'
    }
  },
  button: {
    backgroundColor: 'transparent',
    margin: '5px',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#f7cd3d',
      width: '15px',
      height: '15px',
      '&,&:hover,&:focus': {
        backgroundColor: '#f7cd3d'
      }
    }
  },
  buttonIcon: {
    width: 'auto',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    borderRadius: '5px',
    margin: '5px',
    width: '100%',
    height: '140px',
    display: 'flex',
    paddingBottom: '10px',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column'
  }
});

/* harmony default export */ const LogoSliderSlice_logoSliderSliceStyle = (logoSliderSliceStyle);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/cms/slices/LogoSliderSlice/LogoSliderSlice.jsx
















const useStyles = (0,makeStyles/* default */.Z)(LogoSliderSlice_logoSliderSliceStyle);

const LogoSliderSlice = props => {
  const {
    content
  } = props;
  const classes = useStyles();
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = (0,external_react_.useState)(0);

  const changeSlide = index => {
    setCurrentSlide(index);
  };

  const updateCurrentSlide = index => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(VisibleSensorAnimation/* default */.Z, {
    animation: "grow",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.root,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.carouselContainer,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_responsive_carousel_.Carousel, {
          swipeable: true,
          showArrows: true,
          showThumbs: false,
          showIndicators: false,
          showStatus: false,
          infiniteLoop: true,
          centerMode: false,
          autoplay: true,
          interval: 3000,
          selectedItem: currentSlide,
          onChange: updateCurrentSlide,
          renderArrowPrev: (onClickHandler, hasPrev, label) => hasPrev && /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
            variant: "contained",
            className: classes.arrow,
            "aria-label": "arrow-next",
            onClick: onClickHandler,
            title: label,
            style: {
              left: '-10px'
            },
            children: /*#__PURE__*/jsx_runtime_.jsx((KeyboardArrowLeft_default()), {
              fontSize: "medium"
            })
          }),
          renderArrowNext: (onClickHandler, hasNext, label) => hasNext && /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
            variant: "contained",
            className: classes.arrow,
            "aria-label": "arrow-next",
            onClick: onClickHandler,
            title: label,
            style: {
              right: '-10px'
            },
            children: /*#__PURE__*/jsx_runtime_.jsx((KeyboardArrowRight_default()), {
              fontSize: "medium"
            })
          }),
          children: external_react_default().Children.toArray(content.map(item => /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.slide,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.quoteContainer,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Hidden/* default */.Z, {
                smDown: true,
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: classes.quotationMarkLeft,
                  children: "\u201C"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: classes.quote,
                  children: external_prismic_reactjs_.RichText.render(item.quote)
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: classes.quotationMarkRight,
                  children: "\u201D"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
                mdUp: true,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Paper/* default */.Z, {
                  className: classes.paper,
                  elevation: 3,
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: classes.quote,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: classes.quotationMarkLeft,
                      children: "\u201C"
                    }), external_prismic_reactjs_.RichText.render(item.quote), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: classes.quotationMarkRight,
                      children: "\u201D"
                    })]
                  }), /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
                    className: classes.buttonIcon,
                    src: item.logo.url,
                    alt: item.logo.alt,
                    type: "image/svg+xml"
                  })]
                })
              })]
            })
          })))
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.indicatorContainer,
        children: external_react_default().Children.toArray(content.map((item, index) => {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
              smDown: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                role: "button",
                onClick: () => changeSlide(index),
                onKeyDown: () => changeSlide(index),
                tabIndex: item.index,
                className: classes.button,
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: classes.buttonIcon,
                  style: {
                    filter: currentSlide === index ? 'none' : 'grayscale(100%)',
                    opacity: currentSlide === index ? '100%' : '40%',
                    maxWidth: `calc(100% / ${content.lenght})`
                  },
                  children: /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
                    className: classes.buttonIcon,
                    alt: item.logo.alt,
                    src: item.logo.url
                  })
                })
              }, item.text)
            }), /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
              mdUp: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
                className: classes.button,
                variant: "contained",
                size: "small",
                role: "button",
                onClick: () => changeSlide(index),
                onKeyDown: () => changeSlide(index),
                tabIndex: item.index,
                style: {
                  opacity: currentSlide === index ? '100%' : '30%'
                }
              })
            })]
          });
        }))
      })]
    })
  });
};

/* harmony default export */ const LogoSliderSlice_LogoSliderSlice = (LogoSliderSlice);
;// CONCATENATED MODULE: ./components/cms/slices/LogoSliderSlice/index.js

/* harmony default export */ const slices_LogoSliderSlice = (LogoSliderSlice_LogoSliderSlice);
;// CONCATENATED MODULE: ./components/cms/sections/HomeSection/HomeSection.jsx









const renderSlice = slice => {
  if (slice.slice_type === 'key_visual') {
    return /*#__PURE__*/jsx_runtime_.jsx(KeyVisualSlice/* default */.Z, {
      title: slice.primary.title,
      subtitle: slice.primary.subtitle,
      titleUnderline: slice.primary.title_underline,
      gridAlign: slice.primary.grid_align,
      textAlign: slice.primary.text_align,
      mobileGridHeight: slice.primary.mobile_grid_height,
      backgroundImageDesktop: slice.primary.background_image_desktop,
      backgroundImageMobile: slice.primary.background_image_mobile,
      bannerImageMobile: slice.primary.banner_image_mobile,
      content: slice.items
    });
  } else if (slice.slice_type === 'cards_carousel') {
    return /*#__PURE__*/jsx_runtime_.jsx(CardsCarouselSlice/* default */.Z, {
      headingComponents: slice.primary.heading_components,
      title: slice.primary.title,
      subtitle: slice.primary.subtitle,
      titleUnderline: slice.primary.title_underline,
      titleArrow: slice.primary.title_arrow,
      backgroundColor: slice.primary.background_color,
      content: slice.items
    });
  } else if (slice.slice_type === 'smart_alerts') {
    return /*#__PURE__*/jsx_runtime_.jsx(SmartAlertsSlice/* default */.Z, {
      title: slice.primary.title,
      titleIcon: slice.primary.title_icon,
      titleUnderline: slice.primary.title_underline,
      subtitle: slice.primary.subtitle,
      backgroundImageDesktop: slice.primary.background_image_desktop,
      backgroundImageMobile: slice.primary.background_image_mobile,
      content: slice.items,
      textContent: slice.primary.text_content
    });
  } else if (slice.slice_type === 'feature_block') {
    return /*#__PURE__*/jsx_runtime_.jsx(FeatureBlockSlice/* default */.Z, {
      title: slice.primary.title,
      titleIcon: slice.primary.title_icon,
      titleUnderline: slice.primary.title_underline,
      subtitle: slice.primary.subtitle,
      subtitleUnderline: slice.primary.subtitle_underline,
      textContent: slice.primary.text_content,
      gridAlign: slice.primary.grid_align,
      mediaContentDesktop: slice.primary.media_content_desktop,
      mediaContentMobile: slice.primary.media_content_mobile,
      mediaContentCenter: slice.primary.media_content_center,
      content: slice.items
    });
  } else if (slice.slice_type === 'logo_slider') {
    return /*#__PURE__*/jsx_runtime_.jsx(slices_LogoSliderSlice, {
      content: slice.items
    });
  }

  return null;
};

const HomeSection = ({
  homepage
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: external_react_default().Children.toArray(homepage.map(slice => renderSlice(slice)))
  });
};

/* harmony default export */ const HomeSection_HomeSection = (HomeSection);
;// CONCATENATED MODULE: ./components/cms/sections/HomeSection/index.js

/* harmony default export */ const sections_HomeSection = (HomeSection_HomeSection);

/***/ })

};
;