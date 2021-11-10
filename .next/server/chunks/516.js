"use strict";
exports.id = 516;
exports.ids = [516];
exports.modules = {

/***/ 8516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_VisibleSensorAnimation)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-visibility-sensor"
var external_react_visibility_sensor_ = __webpack_require__(4253);
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Fade/Fade.js
var Fade = __webpack_require__(3637);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grow/Grow.js
var Grow = __webpack_require__(170);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/VisibleSensorAnimation/VisibleSensorAnimation.jsx







const typeArray = ['fade', 'grow'];
const topVisibleOffset = 50;

const VisibleSensorAnimation = ({
  children,
  animation
}) => {
  const {
    0: active,
    1: setActive
  } = (0,external_react_.useState)(false);

  if (!typeArray.some(type => type === animation)) {
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: children
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx((external_react_visibility_sensor_default()), {
    partialVisibility: "top",
    minTopValue: topVisibleOffset,
    onChange: isVisible => {
      if (isVisible) {
        setActive(true);
      }
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [animation === 'fade' && /*#__PURE__*/jsx_runtime_.jsx(Fade/* default */.Z, {
        in: active,
        children: children
      }), animation === 'grow' && /*#__PURE__*/jsx_runtime_.jsx(Grow/* default */.Z, {
        in: active,
        children: children
      })]
    })
  });
};

/* harmony default export */ const VisibleSensorAnimation_VisibleSensorAnimation = (VisibleSensorAnimation);
;// CONCATENATED MODULE: ./components/VisibleSensorAnimation/index.js

/* harmony default export */ const components_VisibleSensorAnimation = (VisibleSensorAnimation_VisibleSensorAnimation);

/***/ })

};
;