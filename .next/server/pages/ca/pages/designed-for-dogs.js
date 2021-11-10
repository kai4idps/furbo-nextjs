"use strict";
(() => {
var exports = {};
exports.id = 172;
exports.ids = [172];
exports.modules = {

/***/ 6758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ designed_for_dogs),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/cms/slices/KeyVisualSlice/index.js + 2 modules
var KeyVisualSlice = __webpack_require__(7441);
// EXTERNAL MODULE: ./components/cms/slices/FeatureBlockSlice/index.js + 2 modules
var FeatureBlockSlice = __webpack_require__(1384);
// EXTERNAL MODULE: ./components/cms/slices/CardsCarouselSlice/index.js + 2 modules
var CardsCarouselSlice = __webpack_require__(9557);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: external "prismic-reactjs"
var external_prismic_reactjs_ = __webpack_require__(3437);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: ./components/Image/index.js + 1 modules
var Image = __webpack_require__(4592);
// EXTERNAL MODULE: ./components/VisibleSensorAnimation/index.js + 1 modules
var VisibleSensorAnimation = __webpack_require__(8516);
// EXTERNAL MODULE: ./components/cms/elements/ShopButton/index.js + 2 modules
var ShopButton = __webpack_require__(2440);
// EXTERNAL MODULE: ./components/cms/elements/LearnButton/index.js + 2 modules
var LearnButton = __webpack_require__(1954);
// EXTERNAL MODULE: ./components/cms/elements/GridElement/index.js + 2 modules
var GridElement = __webpack_require__(7408);
;// CONCATENATED MODULE: ./components/cms/slices/SplitLayoutSlice/splitLayoutSliceStyle.js
const splitLayoutSliceStyle = theme => ({
  root: {
    padding: '10px 0px 20px'
  },
  image: {
    width: '400px',
    maxWidth: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  title: {
    display: 'flex',
    padding: '5px 10px 5px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      justifyContent: 'center'
    }
  },
  subtitle: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 10px 5px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5px 10px 5px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  },
  gridItem: {
    padding: '10px',
    [theme.breakpoints.down('sm')]: {
      padding: '5px'
    }
  }
});

/* harmony default export */ const SplitLayoutSlice_splitLayoutSliceStyle = (splitLayoutSliceStyle);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/cms/slices/SplitLayoutSlice/SplitLayoutSlice.jsx












const useStyles = (0,makeStyles/* default */.Z)(SplitLayoutSlice_splitLayoutSliceStyle);

const renderSlice = slice => {
  if (slice.type === 'shop_button') {
    return /*#__PURE__*/jsx_runtime_.jsx(ShopButton/* default */.Z, {
      shopButtonText: slice.data.shop_button_text,
      center: slice.data.center
    });
  } else if (slice.type === 'learn_button') {
    return /*#__PURE__*/jsx_runtime_.jsx(LearnButton/* default */.Z, {
      color: slice.data.color,
      learnButtonText: slice.data.learn_button_text,
      link: slice.data.link
    });
  } else if (slice.type === 'grid_element') {
    return /*#__PURE__*/jsx_runtime_.jsx(GridElement/* default */.Z, {
      gridContent: slice.data.content
    });
  } else {
    return null;
  }
};

const SplitLayoutSlice = props => {
  const classes = useStyles();
  const {
    title,
    subtitle,
    image,
    gridAlign,
    content
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(VisibleSensorAnimation/* default */.Z, {
    animation: "grow",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.root,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
        container: true,
        justifyContent: "center",
        alignItems: "center",
        children: [gridAlign === 'Left' && /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          className: classes.gridItem,
          item: true,
          xl: 4,
          lg: 4,
          md: 5,
          sm: 12,
          xs: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
            className: classes.image,
            src: image.url,
            alt: image.alt
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
          className: classes.griditem,
          item: true,
          xl: 4,
          lg: 4,
          md: 5,
          sm: 12,
          xs: 12,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.title,
            children: external_prismic_reactjs_.RichText.render(title)
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.subtitle,
            children: external_prismic_reactjs_.RichText.render(subtitle)
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.content,
            children: external_react_default().Children.toArray(content.map(slice => renderSlice(slice.content)))
          })]
        }), gridAlign === 'Right' && /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          className: classes.gridItem,
          item: true,
          xl: 4,
          lg: 4,
          md: 5,
          sm: 12,
          xs: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
            className: classes.image,
            src: image.url,
            alt: image.alt
          })
        })]
      })
    })
  });
};

/* harmony default export */ const SplitLayoutSlice_SplitLayoutSlice = (SplitLayoutSlice);
;// CONCATENATED MODULE: ./components/cms/slices/SplitLayoutSlice/index.js

/* harmony default export */ const slices_SplitLayoutSlice = (SplitLayoutSlice_SplitLayoutSlice);
;// CONCATENATED MODULE: ./components/cms/sections/DesignedForDogsSection/DesignedForDogsSection.jsx








const DesignedForDogsSection_renderSlice = slice => {
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
  } else if (slice.slice_type === 'feature_block') {
    return /*#__PURE__*/jsx_runtime_.jsx(FeatureBlockSlice/* default */.Z, {
      title: slice.primary.title,
      titleIcon: slice.primary.title_icon,
      titleUnderline: slice.primary.title_underline,
      subtitle: slice.primary.subtitle,
      subtitleUnderline: slice.primary.subtitle_underline,
      gridAlign: slice.primary.grid_align,
      textContent: slice.primary.text_content,
      mediaContentDesktop: slice.primary.media_content_desktop,
      mediaContentMobile: slice.primary.media_content_mobile,
      mediaContentCenter: slice.primary.media_content_center,
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
  } else if (slice.slice_type === 'split_layout') {
    return /*#__PURE__*/jsx_runtime_.jsx(slices_SplitLayoutSlice, {
      title: slice.primary.title,
      subtitle: slice.primary.subtitle,
      image: slice.primary.image,
      gridAlign: slice.primary.grid_align,
      content: slice.items
    });
  }

  return null;
};

const DesignedForDogsSection = ({
  dfdPage
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: external_react_default().Children.toArray(dfdPage.body.map(slice => DesignedForDogsSection_renderSlice(slice)))
  });
};

/* harmony default export */ const DesignedForDogsSection_DesignedForDogsSection = (DesignedForDogsSection);
;// CONCATENATED MODULE: ./components/cms/sections/DesignedForDogsSection/index.js

/* harmony default export */ const sections_DesignedForDogsSection = (DesignedForDogsSection_DesignedForDogsSection);
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
;// CONCATENATED MODULE: ./pages/ca/pages/designed-for-dogs/index.js











const DesignedForDogs = ({
  campaign,
  dfdPage,
  seo,
  content
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
      children: /*#__PURE__*/jsx_runtime_.jsx(sections_DesignedForDogsSection, {
        dfdPage: dfdPage
      })
    })]
  });
};

const getStaticProps = configureStore/* wrapper.getStaticProps */.Y.getStaticProps(store => async () => {
  const campaignData = await (0,prismicData/* fetchCampaignData */.VJ)('en-ca');
  const dfdPageData = await (0,prismicData/* fetchDfdPageData */.q6)('en-ca');
  const contentData = await (0,prismicData/* fetchHeaderFooterData */.ZC)('en-ca');
  const seoData = await (0,prismicData/* fetchSeoData */.D2)('en-ca');
  const dfdSeo = seoData.list.find(item => item.component_key === 'DESIGNED_FOR_DOGS');
  store.dispatch((0,regionSlice/* updateRegion */.IS)(navigation/* REGION_INFO.CA */.w.CA));
  return {
    props: {
      campaign: campaignData,
      dfdPage: dfdPageData,
      seo: dfdSeo,
      content: contentData
    },
    revalidate: common/* REVALIDATE_TIME */.Oi
  };
});
/* harmony default export */ const designed_for_dogs = (DesignedForDogs);

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [523,248,571,520,356,626,516,149,441,971,557,384], () => (__webpack_exec__(6758)));
module.exports = __webpack_exports__;

})();