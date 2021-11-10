"use strict";
exports.id = 757;
exports.ids = [757];
exports.modules = {

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

/***/ })

};
;