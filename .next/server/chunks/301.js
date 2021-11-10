"use strict";
exports.id = 301;
exports.ids = [301];
exports.modules = {

/***/ 1301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ slices_SmartAlertsSlice)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "prismic-reactjs"
var external_prismic_reactjs_ = __webpack_require__(3437);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(8920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(3457);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: external "react-responsive-carousel"
var external_react_responsive_carousel_ = __webpack_require__(2242);
// EXTERNAL MODULE: ./components/Image/index.js + 1 modules
var Image = __webpack_require__(4592);
// EXTERNAL MODULE: ./components/VisibleSensorAnimation/index.js + 1 modules
var VisibleSensorAnimation = __webpack_require__(8516);
;// CONCATENATED MODULE: ./components/cms/slices/SmartAlertsSlice/smartAlertsSliceStyle.js
const smartAlertsSliceStyle = theme => ({
  root: {
    backgroundColor: 'transparent',
    position: 'relative',
    height: 'auto',
    width: 'auto'
  },
  indicatorContainer: {
    backgroundColor: 'transparent',
    position: 'relative',
    padding: '10px 0px',
    height: 'auto',
    width: 'auto',
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  button: {
    backgroundColor: 'transparent',
    margin: '5px',
    [theme.breakpoints.down('xs')]: {
      margin: '0px'
    }
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '70px',
    height: '115px',
    [theme.breakpoints.down('xs')]: {
      width: '60px'
    }
  },
  buttonIcon: {
    width: '60px',
    [theme.breakpoints.down('xs')]: {
      width: '50px'
    }
  },
  buttonText: {
    fontFamily: 'FuturaPT',
    fontSize: '14px',
    width: '60px',
    textTransform: 'none',
    lineHeight: 'normal',
    color: '#434343',
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px'
    }
  },
  slide: {
    position: 'relative',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    height: 'auto',
    width: '100%',
    flexWrap: 'wrap',
    backgroundSize: 'auto 100%',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    borderRadius: '5px',
    margin: '10px 0px',
    [theme.breakpoints.down('sm')]: {
      backgroundSize: '100%',
      backgroundPosition: 'bottom',
      minHeight: '900px'
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '750px'
    },
    '@media (max-width: 550px)': {
      minHeight: '680px'
    },
    '@media (max-width: 450px)': {
      minHeight: '610px'
    },
    '@media (max-width: 350px)': {
      minHeight: '550px'
    }
  },
  contentContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    padding: '0px 50px 0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 20px 0px',
      alignItems: 'flex-start'
    }
  },
  title: {
    fontSize: '32px',
    color: '#434343',
    height: 'auto',
    lineHeight: '32px',
    padding: '15% 25px 0px',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 0px 0px',
      textAlign: 'center',
      justifyContent: 'center'
    }
  },
  subtitle: {
    backgroundColor: 'transparent',
    fontSize: '24px',
    fontWeight: 'lighter',
    color: '#434343',
    lineHeight: 'normal',
    padding: '10px 25px 0px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '10px 0px 10px',
      textAlign: 'center',
      fontSize: '18px'
    }
  },
  textContent: {
    fontFamily: 'Avenir',
    color: '#434343',
    width: '100%',
    height: 'auto',
    fontSize: '24px',
    padding: '10px 25px 0px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      padding: '10px 0px 10px',
      fontSize: '16px'
    }
  },
  icon: {
    width: '50px',
    height: '50px',
    [theme.breakpoints.down('sm')]: {
      width: '35px',
      height: '35px'
    }
  }
});

/* harmony default export */ const SmartAlertsSlice_smartAlertsSliceStyle = (smartAlertsSliceStyle);
// EXTERNAL MODULE: ./src/helpers.js
var helpers = __webpack_require__(1710);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/cms/slices/SmartAlertsSlice/SmartAlertsSlice.jsx













const useStyles = (0,makeStyles/* default */.Z)(SmartAlertsSlice_smartAlertsSliceStyle);

const SmartAlertsSlice = props => {
  const {
    title,
    titleIcon,
    titleUnderline = false,
    subtitle,
    textContent,
    backgroundImageDesktop,
    backgroundImageMobile,
    content
  } = props;
  const classes = useStyles();
  const theme = (0,useTheme/* default */.Z)();
  const smDown = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('sm'));
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
        className: classes.contentContainer,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
          container: true,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
            item: true,
            xl: 5,
            lg: 5,
            md: 5,
            sm: 12,
            xs: 12,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.title,
              style: {
                textDecorationLine: titleUnderline ? 'underline' : 'none',
                textDecorationColor: titleUnderline ? '#f7cd3d' : 'none',
                textDecorationThickness: titleUnderline ? '4px' : 'none',
                textUnderlineOffset: titleUnderline ? '5px' : 'none',
                textDecorationSkip: false
              },
              children: [!(0,helpers/* isEmpty */.x)(titleIcon) && /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
                className: classes.icon,
                src: titleIcon.url,
                alt: titleIcon.alt
              }), external_prismic_reactjs_.RichText.render(title)]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.subtitle,
              children: external_prismic_reactjs_.RichText.render(subtitle)
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.textContent,
              children: external_prismic_reactjs_.RichText.render(textContent)
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
            item: true,
            xl: 12,
            lg: 12,
            md: 12,
            sm: 12,
            xs: 12,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.indicatorContainer,
              children: external_react_default().Children.toArray(content.map((item, index) => {
                return /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                  onClick: () => changeSlide(index + 1),
                  onKeyDown: () => changeSlide(index + 1),
                  tabIndex: index + 1,
                  className: classes.button,
                  disableFocusRipple: true,
                  disableRipple: true,
                  disableElevation: true,
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: classes.buttonContainer,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: classes.buttonIcon,
                      style: {
                        opacity: currentSlide !== 0 ? currentSlide === index + 1 ? '100%' : '50%' : '100%'
                      },
                      children: /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
                        className: classes.buttonIcon,
                        alt: item.alert_icon.alt,
                        src: item.alert_icon.url
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: classes.buttonText,
                      children: item.alert_name
                    })]
                  })
                }, item.alert_name);
              }))
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_responsive_carousel_.Carousel, {
        swipeable: false,
        showArrows: false,
        showThumbs: false,
        showIndicators: false,
        showStatus: false,
        infiniteLoop: true,
        autoPlay: true,
        interval: 3000,
        selectedItem: currentSlide,
        onChange: updateCurrentSlide,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.slide,
          style: {
            backgroundImage: smDown ? `url(${backgroundImageMobile.url})` : `url(${backgroundImageDesktop.url})`,
            height: smDown ? 'auto' : backgroundImageDesktop.dimensions.height
          }
        }), external_react_default().Children.toArray(content.map(item => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.slide,
          style: {
            backgroundImage: smDown ? `url(${item.background_image_mobile.url})` : `url(${item.background_image_desktop.url})`,
            height: smDown ? 'auto' : backgroundImageDesktop.dimensions.height
          }
        })))]
      })]
    })
  });
};

/* harmony default export */ const SmartAlertsSlice_SmartAlertsSlice = (SmartAlertsSlice);
;// CONCATENATED MODULE: ./components/cms/slices/SmartAlertsSlice/index.js

/* harmony default export */ const slices_SmartAlertsSlice = (SmartAlertsSlice_SmartAlertsSlice);

/***/ })

};
;