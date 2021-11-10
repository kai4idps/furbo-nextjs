"use strict";
(() => {
var exports = {};
exports.id = 90;
exports.ids = [90];
exports.modules = {

/***/ 9477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5152);
/* harmony import */ var components_layout_BaseLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(550);
/* harmony import */ var components_SeoManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6211);
/* harmony import */ var redux_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7290);
/* harmony import */ var redux_features_region_regionSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9520);
/* harmony import */ var src_prismicData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2108);
/* harmony import */ var config_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7695);
/* harmony import */ var config_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6780);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
 // import HomeKeyVisual from 'components/cms/HomeKeyVisual';
// import HomeSection from 'components/cms/sections/HomeSection';











const Home = ({
  campaign,
  homepage,
  seo,
  content
}) => {
  const HomeKeyVisual = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__.default)(() => Promise.all(/* import() */[__webpack_require__.e(440), __webpack_require__.e(757), __webpack_require__.e(214)]).then(__webpack_require__.bind(__webpack_require__, 5214)), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/(5214)],
      modules: ["ca/index.js -> " + 'components/cms/HomeKeyVisual']
    }
  });
  const HomeSection = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__.default)(() => Promise.all(/* import() */[__webpack_require__.e(571), __webpack_require__.e(440), __webpack_require__.e(516), __webpack_require__.e(757), __webpack_require__.e(954), __webpack_require__.e(441), __webpack_require__.e(971), __webpack_require__.e(557), __webpack_require__.e(384), __webpack_require__.e(301), __webpack_require__.e(587)]).then(__webpack_require__.bind(__webpack_require__, 1587)), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/(1587)],
      modules: ["ca/index.js -> " + 'components/cms/sections/HomeSection']
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    style: {
      backgroundColor: 'white'
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_SeoManager__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      seo: seo
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(components_layout_BaseLayout__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      campaign: campaign,
      content: content,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(HomeKeyVisual, {
        campaign: campaign
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(HomeSection, {
        homepage: homepage
      })]
    })]
  });
};

const getStaticProps = redux_configureStore__WEBPACK_IMPORTED_MODULE_3__/* .wrapper.getStaticProps */ .Y.getStaticProps(store => async () => {
  const campaignData = await (0,src_prismicData__WEBPACK_IMPORTED_MODULE_5__/* .fetchCampaignData */ .VJ)('en-ca');
  const homepageData = await (0,src_prismicData__WEBPACK_IMPORTED_MODULE_5__/* .fetchHomepageData */ .pW)('en-ca');
  const contentData = await (0,src_prismicData__WEBPACK_IMPORTED_MODULE_5__/* .fetchHeaderFooterData */ .ZC)('en-ca');
  const seoData = await (0,src_prismicData__WEBPACK_IMPORTED_MODULE_5__/* .fetchSeoData */ .D2)('en-ca');
  const homeSeo = seoData.list.find(item => item.component_key === 'HOME');
  store.dispatch((0,redux_features_region_regionSlice__WEBPACK_IMPORTED_MODULE_4__/* .updateRegion */ .IS)(config_navigation__WEBPACK_IMPORTED_MODULE_7__/* .REGION_INFO.CA */ .w.CA));
  return {
    props: {
      campaign: campaignData,
      homepage: homepageData,
      seo: homeSeo,
      content: contentData
    },
    revalidate: config_common__WEBPACK_IMPORTED_MODULE_6__/* .REVALIDATE_TIME */ .Oi
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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

/***/ 2307:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [523,248,152,520,356,626], () => (__webpack_exec__(9477)));
module.exports = __webpack_exports__;

})();