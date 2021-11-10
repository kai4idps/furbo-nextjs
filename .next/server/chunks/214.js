"use strict";
exports.id = 214;
exports.ids = [214];
exports.modules = {

/***/ 5214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cms_HomeKeyVisual)
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

/***/ })

};
;