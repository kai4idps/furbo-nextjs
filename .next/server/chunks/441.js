"use strict";
exports.id = 441;
exports.ids = [441];
exports.modules = {

/***/ 7408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ elements_GridElement)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/Image/index.js + 1 modules
var Image = __webpack_require__(4592);
// EXTERNAL MODULE: external "prismic-reactjs"
var external_prismic_reactjs_ = __webpack_require__(3437);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
;// CONCATENATED MODULE: ./components/cms/elements/GridElement/gridElementStyle.js
const gridElementStyle = theme => ({
  root: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column'
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontSize: '18px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px'
    }
  },
  image: {
    position: 'relative',
    width: '60px',
    height: '60px',
    [theme.breakpoints.down('sm')]: {
      width: '50px',
      height: '50px'
    }
  }
});

/* harmony default export */ const GridElement_gridElementStyle = (gridElementStyle);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/cms/elements/GridElement/GridElement.jsx








const useStyles = (0,makeStyles/* default */.Z)(GridElement_gridElementStyle);

const GridElement = props => {
  const classes = useStyles();
  const {
    gridContent
  } = props;
  const gridSize = gridContent.length === 4 ? 3 : 4;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
      container: true,
      children: external_react_default().Children.toArray(gridContent.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
        item: true,
        xs: gridSize,
        className: classes.gridItem,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.image,
          children: /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
            className: classes.image,
            alt: item.item_icon.alt,
            src: item.item_icon.url
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.text,
          children: external_prismic_reactjs_.RichText.render(item.item_name)
        })]
      })))
    })
  });
};

/* harmony default export */ const GridElement_GridElement = (GridElement);
;// CONCATENATED MODULE: ./components/cms/elements/GridElement/index.js

/* harmony default export */ const elements_GridElement = (GridElement_GridElement);

/***/ }),

/***/ 7757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ elements_VideoButton)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(8920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(3457);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js
var Dialog = __webpack_require__(2663);
// EXTERNAL MODULE: external "@material-ui/icons/PlayCircleOutline"
var PlayCircleOutline_ = __webpack_require__(4889);
var PlayCircleOutline_default = /*#__PURE__*/__webpack_require__.n(PlayCircleOutline_);
;// CONCATENATED MODULE: ./components/cms/elements/VideoButton/videoButtonStyle.js
const videoButtonStyle = theme => ({
  root: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '5px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  },
  playButton: {
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '22px',
    lineHeight: '22px',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      lineHeight: '18px'
    }
  },
  playIcon: {
    display: 'flex',
    width: '35px',
    height: '35px',
    paddingRight: '5px',
    [theme.breakpoints.down('sm')]: {
      width: '30px',
      height: '30px'
    }
  },
  playText: {
    fontFamily: 'Avenir',
    lineHeight: '35px',
    height: '35px',
    [theme.breakpoints.down('sm')]: {
      lineHeight: '30px',
      height: '30px'
    }
  }
});

/* harmony default export */ const VideoButton_videoButtonStyle = (videoButtonStyle);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/cms/elements/VideoButton/VideoButton.jsx









const useStyles = (0,makeStyles/* default */.Z)(VideoButton_videoButtonStyle);

const VideoButton = props => {
  const classes = useStyles();
  const {
    embedVideoLink,
    watchVideoText,
    center = false,
    textColor = '#434343'
  } = props;
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);
  const theme = (0,useTheme/* default */.Z)();
  const xsDown = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('xs'));
  const smDown = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('sm'));

  const watchVideo = () => {
    setOpen(true);
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    document.body.appendChild(script);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    style: {
      justifyContent: smDown ? 'center' : center ? 'center' : 'flex-start'
    },
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Button/* default */.Z, {
      className: classes.playButton,
      size: "large",
      onClick: watchVideo,
      children: [/*#__PURE__*/jsx_runtime_.jsx((PlayCircleOutline_default()), {
        className: classes.playIcon,
        style: {
          color: textColor
        }
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.playText,
        style: {
          color: textColor
        },
        children: watchVideoText
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Dialog/* default */.Z, {
      onClose: handleClose,
      open: open,
      maxWidth: "lg",
      children: /*#__PURE__*/jsx_runtime_.jsx("iframe", {
        title: "kv-video-play",
        width: xsDown ? '280' : smDown ? '560' : '1020',
        height: xsDown ? '157' : smDown ? '315' : '630',
        src: embedVideoLink,
        frameBorder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true,
        autoPlay: true,
        enablejsapi: "true"
      })
    })]
  });
};

/* harmony default export */ const VideoButton_VideoButton = (VideoButton);
;// CONCATENATED MODULE: ./components/cms/elements/VideoButton/index.js

/* harmony default export */ const elements_VideoButton = (VideoButton_VideoButton);

/***/ }),

/***/ 7441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ slices_KeyVisualSlice)
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
// EXTERNAL MODULE: ./components/cms/elements/VideoButton/index.js + 2 modules
var VideoButton = __webpack_require__(7757);
// EXTERNAL MODULE: ./components/cms/elements/ShopButton/index.js + 2 modules
var ShopButton = __webpack_require__(2440);
// EXTERNAL MODULE: ./components/cms/elements/LearnButton/index.js + 2 modules
var LearnButton = __webpack_require__(1954);
// EXTERNAL MODULE: ./components/cms/elements/GridElement/index.js + 2 modules
var GridElement = __webpack_require__(7408);
// EXTERNAL MODULE: ./components/Image/index.js + 1 modules
var Image = __webpack_require__(4592);
// EXTERNAL MODULE: ./components/VisibleSensorAnimation/index.js + 1 modules
var VisibleSensorAnimation = __webpack_require__(8516);
// EXTERNAL MODULE: ./src/helpers.js
var helpers = __webpack_require__(1710);
;// CONCATENATED MODULE: ./components/cms/slices/KeyVisualSlice/keyVisualSliceStyle.js
const keyVisualSliceStyle = theme => ({
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
    margin: '10px 0px',
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: 'bottom',
      backgroundSize: '100% auto',
      minHeight: '800px'
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '500px'
    }
  },
  container: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center'
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  subtitle: {
    color: '#434343',
    width: 'auto',
    height: 'auto',
    padding: '5px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: '100%',
      padding: '10px 0px 10px'
    }
  },
  bannerImageContainer: {
    width: '100%',
    paddingBottom: '10px',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  bannerImage: {
    heigh: '45px',
    width: 'auto'
  }
});

/* harmony default export */ const KeyVisualSlice_keyVisualSliceStyle = (keyVisualSliceStyle);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/cms/slices/KeyVisualSlice/KeyVisualSlice.jsx















const useStyles = (0,makeStyles/* default */.Z)(KeyVisualSlice_keyVisualSliceStyle);

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

const getGridSize = align => {
  if (align === 'Left') {
    return 5;
  } else if (align === 'Center') {
    return 7;
  } else if (align === 'Right') {
    return 7;
  } else if (align === 'Top Left') {
    return 7;
  }

  return 5;
};

const getGridAlign = align => {
  if (align === 'Left') {
    return 'center';
  } else if (align === 'Center') {
    return 'flex-start';
  } else if (align === 'Right') {
    return 'center';
  } else if (align === 'Top Left') {
    return 'flex-start';
  }

  return 'center';
};

const KeyVisualSlice = props => {
  const {
    title,
    titleUnderline = false,
    gridAlign,
    textAlign,
    subtitle,
    mobileGridHeight,
    backgroundImageDesktop,
    backgroundImageMobile,
    bannerImageMobile,
    content
  } = props;
  const classes = useStyles();
  const theme = (0,useTheme/* default */.Z)();
  const smDown = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('sm'));
  const xsDown = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('xs'));
  const gridSize = getGridSize(gridAlign);
  return /*#__PURE__*/jsx_runtime_.jsx(VisibleSensorAnimation/* default */.Z, {
    animation: "grow",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.root,
      style: {
        backgroundImage: smDown ? `url(${backgroundImageMobile.url})` : `url(${backgroundImageDesktop.url})`,
        height: smDown ? 'auto' : backgroundImageDesktop.dimensions.height,
        backgroundPosition: gridAlign === 'Center' ? 'center' : null,
        minHeight: xsDown ? !(0,helpers/* isEmpty */.x)(mobileGridHeight) ? mobileGridHeight : '500px' : null
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
        container: true,
        className: classes.container,
        style: {
          justifyContent: gridAlign === 'Center' ? 'center' : gridAlign === 'Right' ? 'flex-end' : 'flex-start'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          item: true,
          md: gridSize,
          sm: 12,
          xs: 12,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.text,
            style: {
              justifyContent: smDown ? 'flex-start' : getGridAlign(gridAlign),
              paddingTop: smDown ? '0px' : gridAlign === 'Center' ? '40px' : '0px'
            },
            children: [!(0,helpers/* isEmpty */.x)(bannerImageMobile) && smDown && /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.bannerImageContainer,
              children: /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
                src: bannerImageMobile.url,
                alt: bannerImageMobile.alt,
                className: classes.bannerImage
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.title,
              style: {
                textDecorationLine: titleUnderline ? 'underline' : 'none',
                textDecorationColor: titleUnderline ? '#f7cd3d' : 'none',
                textDecorationThickness: titleUnderline ? '4px' : 'none',
                textUnderlineOffset: titleUnderline ? '5px' : 'none',
                textDecorationSkip: false,
                textAlign: smDown ? 'center' : `${textAlign.toLowerCase()}`
              },
              children: external_prismic_reactjs_.RichText.render(title)
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.subtitle,
              style: {
                textAlign: smDown ? 'center' : `${textAlign.toLowerCase()}`
              },
              children: external_prismic_reactjs_.RichText.render(subtitle)
            }), external_react_default().Children.toArray(content.map(slice => renderSlice(slice.content)))]
          })
        })
      })
    })
  });
};

/* harmony default export */ const KeyVisualSlice_KeyVisualSlice = (KeyVisualSlice);
;// CONCATENATED MODULE: ./components/cms/slices/KeyVisualSlice/index.js

/* harmony default export */ const slices_KeyVisualSlice = (KeyVisualSlice_KeyVisualSlice);

/***/ })

};
;