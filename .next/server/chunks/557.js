"use strict";
exports.id = 557;
exports.ids = [557];
exports.modules = {

/***/ 9557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ slices_CardsCarouselSlice)
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
// EXTERNAL MODULE: external "react-responsive-carousel"
var external_react_responsive_carousel_ = __webpack_require__(2242);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(3457);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Hidden/Hidden.js + 3 modules
var Hidden = __webpack_require__(1543);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(8463);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(9912);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(3832);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Collapse/Collapse.js
var Collapse = __webpack_require__(6037);
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
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/Video/index.js + 1 modules
var Video = __webpack_require__(7971);
// EXTERNAL MODULE: ./config/images/general.js + 4 modules
var general = __webpack_require__(4737);
// EXTERNAL MODULE: ./src/helpers.js
var helpers = __webpack_require__(1710);
// EXTERNAL MODULE: ./components/VisibleSensorAnimation/index.js + 1 modules
var VisibleSensorAnimation = __webpack_require__(8516);
// EXTERNAL MODULE: ./styles/carousel.js
var carousel = __webpack_require__(106);
;// CONCATENATED MODULE: ./components/cms/slices/CardsCarouselSlice/cardsCarouselSliceStyle.js


const cardsCarouselSliceStyle = theme => ({
  root: {
    marginLeft: 'calc((100% - 100vw)/2)',
    height: 'auto',
    width: '100vw',
    margin: '10px 0px'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  headingComponents: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    color: '#434343'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: 'FuturaPT',
    color: '#434343',
    fontSize: '32px',
    textAlign: 'center',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      fontSize: '28px'
    }
  },
  subtitle: {
    fontFamily: 'FuturaPT',
    fontSize: '20px',
    textAlign: 'center',
    color: '#434343',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px'
    }
  },
  path: {
    position: 'absolute',
    top: '72%',
    [theme.breakpoints.down('xs')]: {
      right: '4%'
    }
  },
  pathImageContainer: {
    position: 'relative',
    width: '16px',
    height: '33px'
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  carouselContainer: {
    width: '100%',
    height: '100%',
    padding: '10px 35px 0px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 15px 0px'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '10px 0px 0px'
    }
  },
  slide: {
    backgroundColor: 'transparent',
    height: '100%',
    padding: '0px 10px 30px',
    '& .MuiPaper-rounded': {
      borderRadius: 8
    }
  },
  card: {
    top: 0,
    width: '100%',
    height: '100%'
  },
  cardContent: {
    textAlign: 'center',
    fontFamily: 'Avenir',
    color: '#434343',
    fontSize: '18px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px'
    }
  },
  cardMedia: {
    height: 'auto',
    width: '100%'
  },
  arrow: carousel/* arrow */.x
});

/* harmony default export */ const CardsCarouselSlice_cardsCarouselSliceStyle = (cardsCarouselSliceStyle);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/cms/slices/CardsCarouselSlice/CardsCarouselSlice.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























const useStyles = (0,makeStyles/* default */.Z)(CardsCarouselSlice_cardsCarouselSliceStyle);

const CardsCarouselSlice = props => {
  const classes = useStyles();
  const {
    headingComponents,
    title,
    titleUnderline = false,
    titleArrow = false,
    subtitle,
    content,
    backgroundColor
  } = props;
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)({
    0: false,
    1: false,
    2: false,
    3: false
  });
  const theme = (0,useTheme/* default */.Z)();
  const smDown = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('sm'));
  const xsDown = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('xs'));
  const centerSlidePercentage = xsDown ? 100 : smDown ? 150 / content.length : 100 / content.length;

  const handleOpen = index => {
    setOpen(_objectSpread(_objectSpread({}, open), {}, {
      [index]: !open[index]
    }));
  };

  const customHtml = (type, element, content, index = 0) => {
    var _element$data, _element$data2, _element$data3, _element$data4, _element$data4$url;

    if ((0,helpers/* isEmpty */.x)(element)) {
      return null;
    }

    if ((element === null || element === void 0 ? void 0 : (_element$data = element.data) === null || _element$data === void 0 ? void 0 : _element$data.label) === 'Yellow Underline') {
      return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          style: {
            textDecorationLine: 'underline',
            textDecorationColor: '#f7cd3d',
            textDecorationThickness: '4px',
            textUnderlineOffset: '1px',
            textDecorationSkip: false
          },
          children: content
        })
      }, `${type}-${JSON.stringify(element)}`);
    } else if ((element === null || element === void 0 ? void 0 : (_element$data2 = element.data) === null || _element$data2 === void 0 ? void 0 : _element$data2.label) === 'Red Font') {
      return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          style: {
            color: '#d0021b'
          },
          children: content
        })
      }, `${type}-${JSON.stringify(element)}`);
    } else if ((element === null || element === void 0 ? void 0 : (_element$data3 = element.data) === null || _element$data3 === void 0 ? void 0 : _element$data3.label) === 'Yellow Background') {
      return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          style: {
            background: '#f7cd3d'
          },
          children: content
        })
      }, `${type}-${JSON.stringify(element)}`);
    } else if (element !== null && element !== void 0 && (_element$data4 = element.data) !== null && _element$data4 !== void 0 && (_element$data4$url = _element$data4.url) !== null && _element$data4$url !== void 0 && _element$data4$url.includes('#')) {
      return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          style: {
            color: '#0645ad',
            border: 'none',
            backgroundColor: 'transparent',
            fontSize: '18px',
            fontFamily: 'Avenir'
          },
          onClick: () => handleOpen(index),
          children: content
        })
      }, `${type}-${JSON.stringify(element)}`);
    }

    return null;
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    style: {
      backgroundColor: backgroundColor === 'Grey' ? '#f7f7f7' : 'transparent'
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(VisibleSensorAnimation/* default */.Z, {
      animation: "grow",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
        maxWidth: "lg",
        className: classes.container,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.headingComponents,
          children: external_prismic_reactjs_.RichText.render(headingComponents)
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.title,
          style: {
            textDecorationLine: titleUnderline ? 'underline' : 'none',
            textDecorationColor: titleUnderline ? '#f7cd3d' : 'none',
            textDecorationThickness: titleUnderline ? '4px' : 'none',
            textUnderlineOffset: titleUnderline ? '5px' : 'none',
            textDecorationSkip: false,
            height: titleArrow ? '110px' : '80px'
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_prismic_reactjs_.RichText, {
            render: title,
            htmlSerializer: customHtml
          }), titleArrow && /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
            smDown: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.path,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.pathImageContainer,
                children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  alt: "cute-arrow",
                  src: general/* PATH_SHORT_SVG */._o,
                  layout: "fill",
                  objectFit: "contain"
                })
              })
            })
          }), titleArrow && /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
            mdUp: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.path,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.pathImageContainer,
                children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  alt: "cute-arrow",
                  src: general/* PATH_LONG_SVG */.mp,
                  layout: "fill",
                  objectFit: "contain"
                })
              })
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.subtitle,
          children: external_prismic_reactjs_.RichText.render(subtitle)
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.carouselContainer,
          style: {
            maxWidth: content.length === 2 ? 800 : null
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_responsive_carousel_.Carousel, {
            swipeable: smDown,
            showArrows: true,
            showThumbs: false,
            showIndicators: false,
            showStatus: false,
            infiniteLoop: smDown,
            centerMode: true,
            centerSlidePercentage: centerSlidePercentage,
            renderArrowPrev: (onClickHandler, hasPrev, label) => hasPrev && smDown && /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
              variant: "contained",
              className: classes.arrow,
              "aria-label": "arrow-prev",
              onClick: onClickHandler,
              title: label,
              style: {
                left: -10
              },
              children: /*#__PURE__*/jsx_runtime_.jsx((KeyboardArrowLeft_default()), {
                fontSize: "medium"
              })
            }),
            renderArrowNext: (onClickHandler, hasNext, label) => hasNext && smDown && /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
              variant: "contained",
              className: classes.arrow,
              "aria-label": "arrow-next",
              onClick: onClickHandler,
              title: label,
              style: {
                right: -10
              },
              children: /*#__PURE__*/jsx_runtime_.jsx((KeyboardArrowRight_default()), {
                fontSize: "medium"
              })
            }),
            children: external_react_default().Children.toArray(content.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.slide,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                className: classes.card,
                elevation: 5,
                children: [item.card_media.kind === 'image' && /*#__PURE__*/jsx_runtime_.jsx("div", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
                    className: classes.cardMedia,
                    alt: external_prismic_reactjs_.RichText.asText(item.card_content),
                    src: item.card_media.url
                  })
                }), item.card_media.kind !== 'image' && /*#__PURE__*/jsx_runtime_.jsx("div", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(Video/* default */.Z, {
                    className: classes.cardMedia,
                    src: item.card_media.url,
                    title: item.card_media.name,
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    playsInline: true
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(CardContent/* default */.Z, {
                  style: {
                    padding: content.length === 4 ? 10 : null,
                    '&:lastChild': {
                      paddingBottom: content.length === 4 ? 10 : null
                    }
                  },
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: classes.cardContent,
                    style: {
                      textAlign: item.text_align.toLowerCase(),
                      fontSize: content.length === 4 ? '14px' : null
                    },
                    children: [!open[index] && /*#__PURE__*/jsx_runtime_.jsx(external_prismic_reactjs_.RichText, {
                      render: item.card_content,
                      htmlSerializer: (type, element, content) => customHtml(type, element, content, index)
                    }), /*#__PURE__*/jsx_runtime_.jsx(Collapse/* default */.Z, {
                      in: open[index],
                      timeout: "auto",
                      unmountOnExit: true,
                      collapsedSize: 40,
                      children: /*#__PURE__*/jsx_runtime_.jsx(external_prismic_reactjs_.RichText, {
                        render: item.card_expand_content,
                        htmlSerializer: (type, element, content) => customHtml(type, element, content, index)
                      })
                    })]
                  })
                })]
              })
            })))
          })
        })]
      })
    })
  });
};

/* harmony default export */ const CardsCarouselSlice_CardsCarouselSlice = (CardsCarouselSlice);
;// CONCATENATED MODULE: ./components/cms/slices/CardsCarouselSlice/index.js

/* harmony default export */ const slices_CardsCarouselSlice = (CardsCarouselSlice_CardsCarouselSlice);

/***/ }),

/***/ 106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ arrow)
/* harmony export */ });
const arrow = {
  position: 'absolute',
  zIndex: 2,
  top: 'calc(50% - 15px)',
  width: 30,
  height: 30,
  cursor: 'pointer',
  backgroundColor: '#f7cd3d',
  padding: '0px',
  color: '#fff',
  '&,&:hover,&:focus': {
    backgroundColor: '#f7cd3d'
  }
};

/***/ })

};
;