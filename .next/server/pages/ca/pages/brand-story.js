"use strict";
(() => {
var exports = {};
exports.id = 908;
exports.ids = [908];
exports.modules = {

/***/ 2197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ brand_story),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./components/layout/BaseLayout/index.js + 53 modules
var BaseLayout = __webpack_require__(550);
// EXTERNAL MODULE: external "prismic-reactjs"
var external_prismic_reactjs_ = __webpack_require__(3437);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(8920);
// EXTERNAL MODULE: ./components/Image/index.js + 1 modules
var Image = __webpack_require__(4592);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-responsive-carousel"
var external_react_responsive_carousel_ = __webpack_require__(2242);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(7812);
// EXTERNAL MODULE: ./components/VisibleSensorAnimation/index.js + 1 modules
var VisibleSensorAnimation = __webpack_require__(8516);
;// CONCATENATED MODULE: ./components/cms/BrandStoryPage/timelineStyle.js
const timelineStyle = theme => ({
  root: {
    position: 'relative',
    margin: '20px 0px 40px',
    maxWidth: '960px',
    width: '100%'
  },
  title: {
    textAlign: 'center',
    padding: '20px 0px 20px',
    fontFamily: 'FuturaPT',
    fontSize: '32px'
  },
  slide: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '400px',
    width: '100%',
    padding: '0px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      height: 'auto',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  slideImage: {
    width: 'auto',
    height: '400px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto'
    }
  },
  slideText: {
    backgroundColor: '#F0F0F0',
    padding: '20px',
    height: '100%',
    width: '300px',
    fontFamily: 'Avenir',
    fontSize: '16px',
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '50px',
      width: '100%',
      height: '370px'
    }
  },
  indicatorContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      bottom: '320px'
    }
  },
  buttonContainer: {
    width: 'auto',
    height: 'auto',
    padding: '10px'
  },
  button: {
    width: '16px',
    height: '16px',
    border: '1px solid #888888',
    borderRadius: '8px',
    zIndex: 2,
    padding: '0px',
    margin: '5px'
  }
});

/* harmony default export */ const BrandStoryPage_timelineStyle = (timelineStyle);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/cms/BrandStoryPage/Timeline.jsx










const useStyles = (0,makeStyles/* default */.Z)(BrandStoryPage_timelineStyle);

const Timeline = ({
  info,
  title
}) => {
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
        className: classes.indicatorContainer,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.buttonContainer,
          children: external_react_.Children.toArray(info.map((item, index) => {
            return /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
              style: {
                backgroundColor: currentSlide === index ? '#888888' : 'transparent'
              },
              className: classes.button,
              role: "button",
              onClick: () => changeSlide(index),
              onKeyDown: () => changeSlide(index),
              tabIndex: index
            });
          }))
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.title,
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_responsive_carousel_.Carousel, {
        swipeable: true,
        showArrows: false,
        showThumbs: false,
        showIndicators: false,
        showStatus: false,
        infiniteLoop: true,
        autoPlay: true,
        interval: 10000,
        selectedItem: currentSlide,
        onChange: updateCurrentSlide,
        children: external_react_.Children.toArray(info.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.slide,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
            className: classes.slideImage,
            alt: item.timeline_background_image.alt,
            src: item.timeline_background_image.url
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.slideText,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: external_prismic_reactjs_.RichText.render(item.content)
            })
          })]
        })))
      })]
    })
  });
};

/* harmony default export */ const BrandStoryPage_Timeline = (Timeline);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(3457);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(3832);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
;// CONCATENATED MODULE: ./components/cms/BrandStoryPage/brandStoryPageStyle.js
const brandStoryPageStyle = theme => ({
  keyVisual: {
    display: 'flex',
    justifyContent: 'center',
    height: '450px',
    width: '100%',
    flexWrap: 'wrap',
    backgroundSize: 'auto 100%',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
      backgroundSize: '100%',
      backgroundPosition: 'bottom',
      height: '600px'
    },
    [theme.breakpoints.down('xs')]: {
      height: '380px'
    }
  },
  keyVisualTitle: {
    height: 'auto',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '40px',
      textAlign: 'center',
      alignItems: 'flex-start'
    }
  },
  ourStory: {
    height: 'auto',
    width: '100%',
    padding: '30px 10px 0px'
  },
  ourStoryTitle: {
    fontFamily: 'FuturaPT',
    fontSize: '32px',
    height: 'auto',
    padding: '20px 0px 15px',
    width: '100%',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px'
    }
  },
  text: {
    fontFamily: 'Avenir',
    fontSize: '18px',
    lineHeight: 'normal',
    padding: '0px 20px 10px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 5px 10px'
    }
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    position: 'relative',
    maxWidth: '100%',
    width: 'auto',
    height: '100%',
    display: 'flex',
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto'
    }
  },
  quote: {
    padding: '15px 15px 15px',
    margin: '15px 0px 15px',
    borderLeft: '2px solid green',
    fontFamily: 'Avenir',
    fontSize: '22px'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    flexDirection: 'column'
  }
});

/* harmony default export */ const BrandStoryPage_brandStoryPageStyle = (brandStoryPageStyle);
;// CONCATENATED MODULE: ./components/cms/BrandStoryPage/BrandStoryPage.jsx











const BrandStoryPage_useStyles = (0,makeStyles/* default */.Z)(BrandStoryPage_brandStoryPageStyle);

const BrandStoryPage = ({
  brandStoryPage
}) => {
  const classes = BrandStoryPage_useStyles();
  const theme = (0,useTheme/* default */.Z)();
  const smDown = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('sm'));
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
    maxWidth: "lg",
    className: classes.container,
    children: [/*#__PURE__*/jsx_runtime_.jsx(VisibleSensorAnimation/* default */.Z, {
      animation: "grow",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.keyVisual,
        style: {
          backgroundImage: smDown ? `url(${brandStoryPage.key_visual_image_mobile.url})` : `url(${brandStoryPage.key_visual_image_desktop.url})`
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          container: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
            item: true,
            xl: 6,
            lg: 6,
            md: 6,
            sm: 12,
            xs: 12,
            className: classes.keyVisualTitle,
            children: external_prismic_reactjs_.RichText.render(brandStoryPage.key_visual_title)
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(VisibleSensorAnimation/* default */.Z, {
      animation: "grow",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.ourStory,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
          container: true,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
            item: true,
            xl: 12,
            lg: 12,
            md: 12,
            sm: 12,
            xs: 12,
            className: classes.ourStoryTitle,
            children: brandStoryPage.our_story_title
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
            item: true,
            xl: 5,
            lg: 5,
            md: 5,
            sm: 12,
            xs: 12,
            className: classes.text,
            children: [brandStoryPage.text1, /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), brandStoryPage.text2]
          }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
            item: true,
            xl: 7,
            lg: 7,
            md: 7,
            sm: 12,
            xs: 12,
            className: classes.center,
            children: /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
              className: classes.image,
              src: brandStoryPage.home_alone_image.url,
              alt: brandStoryPage.home_alone_image.alt
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
            item: true,
            xl: 12,
            lg: 12,
            md: 12,
            sm: 12,
            xs: 12,
            className: classes.text,
            children: [brandStoryPage.text3, /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.quote,
              children: brandStoryPage.quote
            }), brandStoryPage.text4]
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(BrandStoryPage_Timeline, {
      info: brandStoryPage.timeline_slides,
      title: brandStoryPage.timeline
    })]
  });
};

/* harmony default export */ const BrandStoryPage_BrandStoryPage = (BrandStoryPage);
;// CONCATENATED MODULE: ./components/cms/BrandStoryPage/index.js

/* harmony default export */ const cms_BrandStoryPage = (BrandStoryPage_BrandStoryPage);
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
;// CONCATENATED MODULE: ./pages/ca/pages/brand-story/index.js











const BrandStory = ({
  campaign,
  seo,
  content,
  brandStoryPage
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: {
      backgroundColor: 'white'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(SeoManager/* default */.Z, {
      seo: seo
    }), /*#__PURE__*/jsx_runtime_.jsx(BaseLayout/* default */.Z, {
      campaign: campaign,
      content: content,
      children: /*#__PURE__*/jsx_runtime_.jsx(cms_BrandStoryPage, {
        brandStoryPage: brandStoryPage
      })
    })]
  });
};

const getStaticProps = configureStore/* wrapper.getStaticProps */.Y.getStaticProps(store => async () => {
  const campaignData = await (0,prismicData/* fetchCampaignData */.VJ)('en-ca');
  const contentData = await (0,prismicData/* fetchHeaderFooterData */.ZC)('en-ca');
  const brandStoryPageData = await (0,prismicData/* fetchBrandStoryPageData */.$y)('en-ca');
  const seoData = await (0,prismicData/* fetchSeoData */.D2)('en-ca');
  const dfdSeo = seoData.list.find(item => item.component_key === 'BRAND_STORY');
  store.dispatch((0,regionSlice/* updateRegion */.IS)(navigation/* REGION_INFO.CA */.w.CA));
  return {
    props: {
      campaign: campaignData,
      seo: dfdSeo,
      content: contentData,
      brandStoryPage: brandStoryPageData
    },
    revalidate: common/* REVALIDATE_TIME */.Oi
  };
});
/* harmony default export */ const brand_story = (BrandStory);

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [523,248,520,356,626,516], () => (__webpack_exec__(2197)));
module.exports = __webpack_exports__;

})();