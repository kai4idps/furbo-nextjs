"use strict";
(() => {
var exports = {};
exports.id = 776;
exports.ids = [776];
exports.modules = {

/***/ 6683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ saving_lives),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(8920);
// EXTERNAL MODULE: external "prismic-reactjs"
var external_prismic_reactjs_ = __webpack_require__(3437);
;// CONCATENATED MODULE: external "react-countup"
const external_react_countup_namespaceObject = require("react-countup");
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(3457);
// EXTERNAL MODULE: external "react-visibility-sensor"
var external_react_visibility_sensor_ = __webpack_require__(4253);
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_);
// EXTERNAL MODULE: ./components/VisibleSensorAnimation/index.js + 1 modules
var VisibleSensorAnimation = __webpack_require__(8516);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
;// CONCATENATED MODULE: ./components/cms/SavingLivesKeyVisual/savingLivesKeyVisualStyle.js
const savingLivesKeyVisualStyle = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    height: 'auto',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    borderRadius: '5px',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: 'bottom',
      backgroundSize: '100% auto',
      minHeight: '800px'
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '540px'
    }
  },
  text: {
    padding: '0px 50px',
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
    color: '#434343',
    height: 'auto',
    padding: '5px',
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  },
  subtitle: {
    color: '#434343',
    width: 'auto',
    height: 'auto',
    padding: '5px',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: '100%',
      padding: '10px 0px 10px',
      textAlign: 'center'
    }
  },
  counterContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  },
  counter: {
    display: 'flex',
    justifyContent: 'center'
  },
  counterBox: {
    fontFamily: 'FuturaPT',
    textAlign: 'center',
    border: '1px solid #d0d0d0',
    color: '#434343',
    backgroundColor: 'white',
    height: '55px',
    width: '50px',
    borderRadius: '3px',
    lineHeight: '58px',
    margin: '2.5px',
    fontSize: '32px',
    [theme.breakpoints.down('sm')]: {
      margin: '1px',
      height: '50px',
      width: '40px',
      lineHeight: '53px',
      fontSize: '24px'
    }
  },
  counterText: {
    textAlign: 'center',
    paddingLeft: '5px',
    fontFamily: 'FuturaPT',
    color: '#616161',
    fontSize: '28px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '22px'
    }
  }
});

/* harmony default export */ const SavingLivesKeyVisual_savingLivesKeyVisualStyle = (savingLivesKeyVisualStyle);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/cms/SavingLivesKeyVisual/SavingLivesKeyVisual.jsx










const useStyles = (0,makeStyles/* default */.Z)(SavingLivesKeyVisual_savingLivesKeyVisualStyle);

const SavingLivesKeyVisual = ({
  savingLivesPage
}) => {
  const classes = useStyles();
  const theme = (0,useTheme/* default */.Z)();
  const smDown = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('sm'));
  const {
    countUp,
    start
  } = (0,external_react_countup_namespaceObject.useCountUp)({
    start: 0,
    end: savingLivesPage.dogs_saved_count,
    duration: 5,
    redraw: true
  });

  const onVisibilityChange = isVisible => {
    if (isVisible) {
      start();
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(VisibleSensorAnimation/* default */.Z, {
    animation: "grow",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.root,
      style: {
        backgroundImage: smDown ? `url(${savingLivesPage.key_visual_image_mobile.url})` : `url(${savingLivesPage.key_visual_image_desktop.url})`,
        height: smDown ? 'auto' : savingLivesPage.key_visual_image_desktop.dimensions.height
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
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.text,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.title,
              children: external_prismic_reactjs_.RichText.render(savingLivesPage.title)
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.counterContainer,
              children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_visibility_sensor_default()), {
                onChange: onVisibilityChange,
                delayedCall: true,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: classes.counter,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: classes.counterBox,
                    children: Math.floor(countUp / 1000) % 10
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: classes.counterBox,
                    children: Math.floor(countUp / 100) % 10
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: classes.counterBox,
                    children: Math.floor(countUp / 10) % 10
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: classes.counterBox,
                    style: {
                      color: '#cc684a'
                    },
                    children: countUp % 10
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: classes.counterText,
                children: savingLivesPage.dogs_saved_text
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.subtitle,
              children: external_prismic_reactjs_.RichText.render(savingLivesPage.subtitle)
            })]
          })
        })
      })
    })
  });
};

/* harmony default export */ const SavingLivesKeyVisual_SavingLivesKeyVisual = (SavingLivesKeyVisual);
;// CONCATENATED MODULE: ./components/cms/SavingLivesKeyVisual/index.js

/* harmony default export */ const cms_SavingLivesKeyVisual = (SavingLivesKeyVisual_SavingLivesKeyVisual);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/cms/slices/CardsCarouselSlice/index.js + 2 modules
var CardsCarouselSlice = __webpack_require__(9557);
// EXTERNAL MODULE: ./components/cms/slices/TwoCardsSlice/index.js + 5 modules
var TwoCardsSlice = __webpack_require__(8448);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Hidden/Hidden.js + 3 modules
var Hidden = __webpack_require__(1543);
// EXTERNAL MODULE: ./components/Image/index.js + 1 modules
var Image = __webpack_require__(4592);
;// CONCATENATED MODULE: ./components/cms/slices/ImageSlice/imageSliceStyle.js
const imageSliceStyle = () => ({
  root: {
    height: 'auto',
    width: '100%',
    padding: '20px 0',
    backgroundColor: '#fdf0c5'
  },
  infoImage: {
    width: '100%'
  }
});

/* harmony default export */ const ImageSlice_imageSliceStyle = (imageSliceStyle);
;// CONCATENATED MODULE: ./components/cms/slices/ImageSlice/ImageSlice.jsx








const ImageSlice_useStyles = (0,makeStyles/* default */.Z)(ImageSlice_imageSliceStyle);

const ImageSlice = props => {
  const classes = ImageSlice_useStyles();
  const {
    imageDesktop,
    imageMobile
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(VisibleSensorAnimation/* default */.Z, {
    animation: "grow",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.root,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
        smDown: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
          className: classes.infoImage,
          src: imageDesktop.url,
          alt: imageDesktop.alt
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
        mdUp: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
          className: classes.infoImage,
          src: imageMobile.url,
          alt: imageMobile.alt
        })
      })]
    })
  });
};

/* harmony default export */ const ImageSlice_ImageSlice = (ImageSlice);
;// CONCATENATED MODULE: ./components/cms/slices/ImageSlice/index.js

/* harmony default export */ const slices_ImageSlice = (ImageSlice_ImageSlice);
;// CONCATENATED MODULE: ./components/cms/sections/SavingLivesSection/SavingLivesSection.jsx







const renderSlice = slice => {
  if (slice.slice_type === 'image') {
    return /*#__PURE__*/jsx_runtime_.jsx(slices_ImageSlice, {
      imageDesktop: slice.primary.image_desktop,
      imageMobile: slice.primary.image_mobile
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
  } else if (slice.slice_type === 'two_cards') {
    return /*#__PURE__*/jsx_runtime_.jsx(TwoCardsSlice/* default */.Z, {
      title: slice.primary.title,
      titleUnderline: slice.primary.title_underline,
      imageFullWidth: slice.primary.image_full_width,
      enableElevation: slice.primary.enable_elevation,
      content: slice.items
    });
  }

  return null;
};

const FurboForGoodSection = ({
  savingLivesPage
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: external_react_default().Children.toArray(savingLivesPage.body.map(slice => renderSlice(slice)))
  });
};

/* harmony default export */ const SavingLivesSection = (FurboForGoodSection);
;// CONCATENATED MODULE: ./components/cms/sections/SavingLivesSection/index.js

/* harmony default export */ const sections_SavingLivesSection = (SavingLivesSection);
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
;// CONCATENATED MODULE: ./pages/ca/pages/saving-lives/index.js












const SavingLives = ({
  campaign,
  savingLivesPage,
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
      children: [/*#__PURE__*/jsx_runtime_.jsx(cms_SavingLivesKeyVisual, {
        savingLivesPage: savingLivesPage
      }), /*#__PURE__*/jsx_runtime_.jsx(sections_SavingLivesSection, {
        savingLivesPage: savingLivesPage
      })]
    })]
  });
};

const getStaticProps = configureStore/* wrapper.getStaticProps */.Y.getStaticProps(store => async () => {
  const campaignData = await (0,prismicData/* fetchCampaignData */.VJ)('en-ca');
  const savingLivesPageData = await (0,prismicData/* fetchSavingLivesPageData */.Ok)('en-ca');
  const contentData = await (0,prismicData/* fetchHeaderFooterData */.ZC)('en-ca');
  const seoData = await (0,prismicData/* fetchSeoData */.D2)('en-ca');
  const savingLivesSeo = seoData.list.find(item => item.component_key === 'SAVING_LIVES');
  store.dispatch((0,regionSlice/* updateRegion */.IS)(navigation/* REGION_INFO.CA */.w.CA));
  return {
    props: {
      campaign: campaignData,
      savingLivesPage: savingLivesPageData,
      seo: savingLivesSeo,
      content: contentData
    },
    revalidate: common/* REVALIDATE_TIME */.Oi
  };
});
/* harmony default export */ const saving_lives = (SavingLives);

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [523,248,571,520,356,626,516,149,971,557,448], () => (__webpack_exec__(6683)));
module.exports = __webpack_exports__;

})();