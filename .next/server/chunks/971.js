"use strict";
exports.id = 971;
exports.ids = [971];
exports.modules = {

/***/ 7971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Video)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__(9290);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Video/Video.jsx
const _excluded = ["title", "src", "visibleByDefault", "useIntersectionObserver", "rwd", "width", "height", "className", "scrollPosition"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Video = _ref => {
  let {
    title,
    src,
    visibleByDefault = false,
    useIntersectionObserver = true,
    rwd = false,
    width,
    height,
    className,
    scrollPosition
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  if (visibleByDefault) {
    return /*#__PURE__*/jsx_runtime_.jsx("video", _objectSpread({
      title: title,
      src: src
    }, props));
  } else if (rwd) {
    return /*#__PURE__*/jsx_runtime_.jsx(external_react_lazy_load_image_component_.LazyLoadComponent, {
      visibleByDefault: visibleByDefault,
      useIntersectionObserver: useIntersectionObserver,
      scrollPosition: scrollPosition,
      style: {
        width: '100%'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: className,
        children: /*#__PURE__*/jsx_runtime_.jsx("video", _objectSpread({
          title: title,
          src: src,
          width: width,
          height: height
        }, props))
      })
    });
  } else {
    return /*#__PURE__*/jsx_runtime_.jsx(external_react_lazy_load_image_component_.LazyLoadComponent, {
      scrollPosition: scrollPosition,
      useIntersectionObserver: useIntersectionObserver,
      visibleByDefault: visibleByDefault,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: className,
        children: /*#__PURE__*/jsx_runtime_.jsx("video", _objectSpread({
          title: title,
          src: src,
          width: width,
          height: height
        }, props))
      })
    });
  }
};

/* harmony default export */ const Video_Video = ((0,external_react_lazy_load_image_component_.trackWindowScroll)(Video));
;// CONCATENATED MODULE: ./components/Video/index.js

/* harmony default export */ const components_Video = (Video_Video);

/***/ })

};
;