"use strict";
exports.id = 384;
exports.ids = [384];
exports.modules = {

/***/ 1384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ slices_FeatureBlockSlice)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: external "prismic-reactjs"
var external_prismic_reactjs_ = __webpack_require__(3437);
// EXTERNAL MODULE: ./components/Video/index.js + 1 modules
var Video = __webpack_require__(7971);
// EXTERNAL MODULE: ./components/Image/index.js + 1 modules
var Image = __webpack_require__(4592);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Hidden/Hidden.js + 3 modules
var Hidden = __webpack_require__(1543);
// EXTERNAL MODULE: ./components/VisibleSensorAnimation/index.js + 1 modules
var VisibleSensorAnimation = __webpack_require__(8516);
// EXTERNAL MODULE: ./components/cms/elements/GridElement/index.js + 2 modules
var GridElement = __webpack_require__(7408);
;// CONCATENATED MODULE: ./components/cms/slices/FeatureBlockSlice/featureBlockSliceStyle.js
const featureBlockSliceStyle = theme => ({
  root: {
    position: 'relative',
    height: '540px',
    width: '100%',
    padding: '10px 0px',
    [theme.breakpoints.down('sm')]: {
      height: 'auto'
    },
    '& video, & span, & img': {
      width: '100%'
    }
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: '0px 50px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 20px',
      justifyContent: 'flex-start'
    }
  },
  media: {
    [theme.breakpoints.down('sm')]: {
      padding: '15px 10px'
    }
  },
  title: {
    color: '#434343',
    width: '100%',
    height: 'auto',
    padding: '0px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      justifyContent: 'center'
    }
  },
  subtitle: {
    fontFamily: 'FuturaPT',
    color: '#434343',
    width: '100%',
    height: 'auto',
    padding: '10px 0px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  textContent: {
    fontFamily: 'Avenir',
    color: '#434343',
    width: '100%',
    height: 'auto',
    padding: '0px',
    fontSize: '24px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: '16px'
    }
  },
  centerImageContainer: {
    position: 'absolute',
    height: '100%',
    width: 'auto',
    left: '375px'
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

/* harmony default export */ const FeatureBlockSlice_featureBlockSliceStyle = (featureBlockSliceStyle);
// EXTERNAL MODULE: ./src/helpers.js
var helpers = __webpack_require__(1710);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/cms/slices/FeatureBlockSlice/FeatureBlockSlice.jsx













const useStyles = (0,makeStyles/* default */.Z)(FeatureBlockSlice_featureBlockSliceStyle);

const renderSlice = slice => {
  if (slice.type === 'grid_element') {
    return /*#__PURE__*/jsx_runtime_.jsx(GridElement/* default */.Z, {
      gridContent: slice.data.content
    });
  } else {
    return null;
  }
};

const FeatureBlockSlice = props => {
  const {
    title,
    titleIcon,
    titleUnderline,
    subtitle,
    subtitleUnderline,
    textContent,
    gridAlign,
    mediaContentDesktop,
    mediaContentMobile,
    mediaContentCenter,
    content
  } = props;
  const classes = useStyles();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime_.jsx(VisibleSensorAnimation/* default */.Z, {
      animation: "grow",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
        container: true,
        className: classes.container,
        children: [gridAlign === 'Left' && /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
          smDown: true,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
            item: true,
            className: classes.media,
            xl: 7,
            lg: 7,
            md: 7,
            children: [mediaContentDesktop.kind !== 'image' && /*#__PURE__*/jsx_runtime_.jsx(Video/* default */.Z, {
              src: mediaContentDesktop.url,
              title: mediaContentDesktop.name,
              autoPlay: true,
              loop: true,
              muted: true,
              playsInline: true
            }), mediaContentDesktop.kind === 'image' && /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
              src: mediaContentDesktop.url,
              alt: mediaContentDesktop.alt
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
          item: true,
          className: classes.content,
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
            style: {
              textDecorationLine: subtitleUnderline ? 'underline' : 'none',
              textDecorationColor: subtitleUnderline ? '#f7cd3d' : 'none',
              textDecorationThickness: subtitleUnderline ? '4px' : 'none',
              textUnderlineOffset: subtitleUnderline ? '5px' : 'none',
              textDecorationSkip: false
            },
            children: external_prismic_reactjs_.RichText.render(subtitle)
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.textContent,
            children: external_prismic_reactjs_.RichText.render(textContent)
          }), external_react_default().Children.toArray(content.map(slice => renderSlice(slice.content)))]
        }), gridAlign === 'Right' && /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
          smDown: true,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
            item: true,
            className: classes.media,
            xl: 7,
            lg: 7,
            md: 7,
            children: [mediaContentDesktop.kind !== 'image' && /*#__PURE__*/jsx_runtime_.jsx(Video/* default */.Z, {
              src: mediaContentDesktop.url,
              title: mediaContentDesktop.name,
              autoPlay: true,
              loop: true,
              muted: true,
              playsInline: true
            }), mediaContentDesktop.kind === 'image' && /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
              src: mediaContentDesktop.url,
              alt: mediaContentDesktop.alt
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
          mdUp: true,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
            item: true,
            className: classes.media,
            sm: 12,
            xs: 12,
            children: [mediaContentMobile.kind !== 'image' && /*#__PURE__*/jsx_runtime_.jsx(Video/* default */.Z, {
              src: mediaContentMobile.url,
              title: mediaContentMobile.name,
              autoPlay: true,
              loop: true,
              muted: true,
              playsInline: true
            }), mediaContentMobile.kind === 'image' && /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
              src: mediaContentMobile.url,
              alt: mediaContentMobile.alt
            })]
          })
        }), !(0,helpers/* isEmpty */.x)(mediaContentCenter === null || mediaContentCenter === void 0 ? void 0 : mediaContentCenter.url) && /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
          smDown: true,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.centerImageContainer,
            children: [mediaContentCenter.kind !== 'image' && /*#__PURE__*/jsx_runtime_.jsx(Video/* default */.Z, {
              src: mediaContentCenter.url,
              title: mediaContentCenter.name,
              autoPlay: true,
              loop: true,
              muted: true,
              playsInline: true
            }), mediaContentCenter.kind === 'image' && /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
              src: mediaContentCenter.url,
              alt: mediaContentCenter.alt
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const FeatureBlockSlice_FeatureBlockSlice = (FeatureBlockSlice);
;// CONCATENATED MODULE: ./components/cms/slices/FeatureBlockSlice/index.js

/* harmony default export */ const slices_FeatureBlockSlice = (FeatureBlockSlice_FeatureBlockSlice);

/***/ })

};
;