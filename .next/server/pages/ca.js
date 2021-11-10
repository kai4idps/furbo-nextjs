"use strict";
(() => {
var exports = {};
exports.id = 90;
exports.ids = [90];
exports.modules = {

/***/ 6453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ca),
  "getStaticProps": () => (/* binding */ getStaticProps)
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
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: ./components/Image/index.js + 1 modules
var Image = __webpack_require__(4592);
// EXTERNAL MODULE: ./components/cms/elements/VideoButton/index.js + 2 modules
var VideoButton = __webpack_require__(7757);
// EXTERNAL MODULE: ./components/cms/elements/ShopButton/index.js + 2 modules
var ShopButton = __webpack_require__(2440);
// EXTERNAL MODULE: ./src/helpers.js
var helpers = __webpack_require__(1710);
;// CONCATENATED MODULE: ./components/cms/HomeKeyVisual/homeKeyVisualStyle.js
const keyVisualStyle = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    height: '600px',
    width: '100%',
    flexWrap: 'wrap',
    backgroundSize: 'auto 100%',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    borderRadius: '5px',
    margin: '0px 0px 10px',
    [theme.breakpoints.down('sm')]: {
      backgroundSize: '100%',
      backgroundPosition: 'center',
      minHeight: '600px'
    },
    [theme.breakpoints.down('xs')]: {
      backgroundPosition: 'bottom'
    }
  },
  text: {
    backgroundColor: 'transparent',
    padding: '0px 20% 0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '0px',
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }
  },
  title: {
    fontFamily: 'FuturaPT',
    fontSize: '24px',
    color: '#434343',
    height: 'auto',
    marginTop: '5%',
    padding: '5px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: '18px'
    }
  },
  subtitle: {
    fontFamily: 'FuturaPT',
    fontSize: '30px',
    fontWeight: '400',
    color: '#434343',
    width: 'auto',
    height: 'auto',
    padding: '5px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '10px 20px 10px',
      textAlign: 'center',
      fontSize: '21px'
    }
  },
  centerImageContainer: {
    position: 'absolute',
    pointerEvents: 'none',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
      paddingBottom: '10px',
      paddingLeft: '8px'
    }
  },
  centerImage: {
    width: '350px',
    height: 'auto',
    [theme.breakpoints.down('xs')]: {
      width: '190px',
      height: 'auto'
    }
  }
});

/* harmony default export */ const homeKeyVisualStyle = (keyVisualStyle);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/cms/HomeKeyVisual/HomeKeyVisual.jsx












const useStyles = (0,makeStyles/* default */.Z)(homeKeyVisualStyle);

const renderSlice = slice => {
  if (slice.type === 'video_button') {
    return /*#__PURE__*/jsx_runtime_.jsx(VideoButton/* default */.Z, {
      embedVideoLink: `${slice.data.video_link.embed_url.replace('watch?v=', 'embed/')}?enablejsapi=1`,
      watchVideoText: slice.data.watch_video_text,
      center: slice.data.center,
      textColor: slice.data.text_color
    });
  } else if (slice.type === 'shop_button') {
    return /*#__PURE__*/jsx_runtime_.jsx(ShopButton/* default */.Z, {
      shopButtonText: slice.data.shop_button_text,
      center: slice.data.center
    });
  } else {
    return null;
  }
};

const HomeKeyVisual = ({
  campaign
}) => {
  const classes = useStyles();
  const theme = (0,useTheme/* default */.Z)();
  const smDown = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('sm'));

  if ((0,helpers/* isEmpty */.x)(campaign)) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.root
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    style: {
      backgroundImage: smDown ? `url(${campaign.key_visual_image_mobile.url})` : `url(${campaign.key_visual_image_desktop.url})`
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
      container: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
        item: true,
        md: 7,
        sm: 12,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.text,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.title,
            style: {
              color: campaign.text_color
            },
            children: external_prismic_reactjs_.RichText.render(campaign.title)
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.subtitle,
            style: {
              color: campaign.text_color
            },
            children: external_prismic_reactjs_.RichText.render(campaign.subtitle)
          }), external_react_default().Children.toArray(campaign.content.map(slice => renderSlice(slice.content_array)))]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.centerImageContainer,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.centerImage,
        children: /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
          className: classes.centerImage,
          src: campaign.center_image.url,
          alt: campaign.center_image.alt
        })
      })
    })]
  });
};

/* harmony default export */ const HomeKeyVisual_HomeKeyVisual = (HomeKeyVisual);
;// CONCATENATED MODULE: ./components/cms/HomeKeyVisual/index.js

/* harmony default export */ const cms_HomeKeyVisual = (HomeKeyVisual_HomeKeyVisual);
// EXTERNAL MODULE: ./components/cms/slices/KeyVisualSlice/index.js + 2 modules
var KeyVisualSlice = __webpack_require__(7441);
// EXTERNAL MODULE: ./components/cms/slices/CardsCarouselSlice/index.js + 2 modules
var CardsCarouselSlice = __webpack_require__(9557);
// EXTERNAL MODULE: ./components/cms/slices/SmartAlertsSlice/index.js + 2 modules
var SmartAlertsSlice = __webpack_require__(1301);
// EXTERNAL MODULE: ./components/cms/slices/FeatureBlockSlice/index.js + 2 modules
var FeatureBlockSlice = __webpack_require__(1384);
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
;// CONCATENATED MODULE: ./components/cms/slices/LogoSliderSlice/LogoSliderSlice.jsx
















const LogoSliderSlice_useStyles = (0,makeStyles/* default */.Z)(LogoSliderSlice_logoSliderSliceStyle);

const LogoSliderSlice = props => {
  const {
    content
  } = props;
  const classes = LogoSliderSlice_useStyles();
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









const HomeSection_renderSlice = slice => {
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
    children: external_react_default().Children.toArray(homepage.map(slice => HomeSection_renderSlice(slice)))
  });
};

/* harmony default export */ const HomeSection_HomeSection = (HomeSection);
;// CONCATENATED MODULE: ./components/cms/sections/HomeSection/index.js

/* harmony default export */ const sections_HomeSection = (HomeSection_HomeSection);
// EXTERNAL MODULE: ./components/layout/BaseLayout/index.js + 53 modules
var BaseLayout = __webpack_require__(550);
// EXTERNAL MODULE: ./components/SeoManager/index.js + 1 modules
var SeoManager = __webpack_require__(6211);
// EXTERNAL MODULE: ./redux/configureStore.js
var configureStore = __webpack_require__(7290);
// EXTERNAL MODULE: ./redux/features/region/regionSlice.js
var regionSlice = __webpack_require__(9520);
// EXTERNAL MODULE: ./src/prismicData.js + 1 modules
var prismicData = __webpack_require__(2108);
// EXTERNAL MODULE: ./config/common.js
var common = __webpack_require__(7695);
// EXTERNAL MODULE: ./config/navigation.js
var navigation = __webpack_require__(6780);
;// CONCATENATED MODULE: ./pages/ca/index.js












const Home = ({
  campaign,
  homepage,
  seo,
  content
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: {
      backgroundColor: 'white'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(SeoManager/* default */.Z, {
      seo: seo
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(BaseLayout/* default */.Z, {
      campaign: campaign,
      content: content,
      children: [/*#__PURE__*/jsx_runtime_.jsx(cms_HomeKeyVisual, {
        campaign: campaign
      }), /*#__PURE__*/jsx_runtime_.jsx(sections_HomeSection, {
        homepage: homepage
      })]
    })]
  });
};

const getStaticProps = configureStore/* wrapper.getStaticProps */.Y.getStaticProps(store => async () => {
  const campaignData = await (0,prismicData/* fetchCampaignData */.VJ)('en-ca');
  const homepageData = await (0,prismicData/* fetchHomepageData */.pW)('en-ca');
  const contentData = await (0,prismicData/* fetchHeaderFooterData */.ZC)('en-ca');
  const seoData = await (0,prismicData/* fetchSeoData */.D2)('en-ca');
  const homeSeo = seoData.list.find(item => item.component_key === 'HOME');
  store.dispatch((0,regionSlice/* updateRegion */.IS)(navigation/* REGION_INFO.CA */.w.CA));
  return {
    props: {
      campaign: campaignData,
      homepage: homepageData,
      seo: homeSeo,
      content: contentData
    },
    revalidate: common/* REVALIDATE_TIME */.Oi
  };
});
/* harmony default export */ const ca = (Home);

/***/ }),

/***/ 3762:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ 8777:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ 5887:
/***/ ((module) => {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ 2089:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Facebook");

/***/ }),

/***/ 8162:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Instagram");

/***/ }),

/***/ 1969:
/***/ ((module) => {

module.exports = require("@material-ui/icons/KeyboardArrowLeft");

/***/ }),

/***/ 4953:
/***/ ((module) => {

module.exports = require("@material-ui/icons/KeyboardArrowRight");

/***/ }),

/***/ 4889:
/***/ ((module) => {

module.exports = require("@material-ui/icons/PlayCircleOutline");

/***/ }),

/***/ 608:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Remove");

/***/ }),

/***/ 7764:
/***/ ((module) => {

module.exports = require("@material-ui/icons/YouTube");

/***/ }),

/***/ 4047:
/***/ ((module) => {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ 9137:
/***/ ((module) => {

module.exports = require("@material-ui/system");

/***/ }),

/***/ 2958:
/***/ ((module) => {

module.exports = require("@material-ui/utils");

/***/ }),

/***/ 8009:
/***/ ((module) => {

module.exports = require("@prismicio/client");

/***/ }),

/***/ 6139:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3536:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 9638:
/***/ ((module) => {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ 7051:
/***/ ((module) => {

module.exports = require("html-react-parser");

/***/ }),

/***/ 2744:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 3437:
/***/ ((module) => {

module.exports = require("prismic-reactjs");

/***/ }),

/***/ 4229:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2268:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 9290:
/***/ ((module) => {

module.exports = require("react-lazy-load-image-component");

/***/ }),

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 2242:
/***/ ((module) => {

module.exports = require("react-responsive-carousel");

/***/ }),

/***/ 3810:
/***/ ((module) => {

module.exports = require("react-transition-group");

/***/ }),

/***/ 4253:
/***/ ((module) => {

module.exports = require("react-visibility-sensor");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [523,248,571,520,356,626,516,149,441,971,557,384,301], () => (__webpack_exec__(6453)));
module.exports = __webpack_exports__;

})();