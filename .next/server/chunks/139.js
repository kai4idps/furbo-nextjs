"use strict";
exports.id = 139;
exports.ids = [139];
exports.modules = {

/***/ 8614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ slices_InfoCardSlice)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "prismic-reactjs"
var external_prismic_reactjs_ = __webpack_require__(3437);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./components/cms/elements/VideoButton/index.js + 2 modules
var VideoButton = __webpack_require__(7757);
// EXTERNAL MODULE: ./components/cms/elements/ShopButton/index.js + 2 modules
var ShopButton = __webpack_require__(2440);
// EXTERNAL MODULE: ./components/cms/elements/LearnButton/index.js + 2 modules
var LearnButton = __webpack_require__(1954);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/cms/elements/SignInButton/signInButtonStyle.js
const signInButtonStyle = theme => ({
  root: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0px',
    [theme.breakpoints.down('sm')]: {
      padding: '5px 0px'
    }
  },
  button: {
    zIndex: 1000,
    width: '200px',
    height: '40px',
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: '500',
    backgroundColor: '#1e7bac',
    textTransform: 'none',
    borderRadius: '100px',
    fontFamily: 'FuturaPT',
    '&,&:hover,&:focus': {
      backgroundColor: '#1e7bac',
      height: '35px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '150px'
    }
  }
});

/* harmony default export */ const SignInButton_signInButtonStyle = (signInButtonStyle);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/cms/elements/SignInButton/SignInButton.jsx






const useStyles = (0,makeStyles/* default */.Z)(SignInButton_signInButtonStyle);

const SignInButton = props => {
  const classes = useStyles();
  const {
    className,
    signInButtonText,
    center
  } = props;
  const btnClasses = `${classes.button} ${className || null}`;
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    style: {
      justifyContent: center ? 'center' : 'flex-start'
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: {
        pathname: '/account',
        query: router.query
      },
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        className: btnClasses,
        children: signInButtonText
      })
    })
  });
};

/* harmony default export */ const SignInButton_SignInButton = (SignInButton);
;// CONCATENATED MODULE: ./components/cms/elements/SignInButton/index.js

/* harmony default export */ const elements_SignInButton = (SignInButton_SignInButton);
;// CONCATENATED MODULE: ./components/cms/slices/InfoCardSlice/infoCardSliceStyle.js
const infoCardSliceStyle = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '5px',
    color: '#434343',
    padding: '20px 150px',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '25px'
    }
  }
});

/* harmony default export */ const InfoCardSlice_infoCardSliceStyle = (infoCardSliceStyle);
;// CONCATENATED MODULE: ./components/cms/slices/InfoCardSlice/InfoCardSlice.jsx










const InfoCardSlice_useStyles = (0,makeStyles/* default */.Z)(InfoCardSlice_infoCardSliceStyle);

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
  } else if (slice.type === 'sign_in_button') {
    return /*#__PURE__*/jsx_runtime_.jsx(elements_SignInButton, {
      signInButtonText: slice.data.sign_in_button_text,
      center: slice.data.center
    });
  } else {
    return null;
  }
};

const InfoCard = props => {
  const classes = InfoCardSlice_useStyles();
  const {
    title,
    titleUnderline,
    subtitle,
    content,
    backgroundColor
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    style: {
      backgroundColor: backgroundColor
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.title,
      style: {
        textDecorationLine: titleUnderline ? 'underline' : 'none',
        textDecorationColor: titleUnderline ? '#f7cd3d' : 'none',
        textDecorationThickness: titleUnderline ? '4px' : 'none',
        textUnderlineOffset: titleUnderline ? '5px' : 'none',
        textDecorationSkip: false
      },
      children: external_prismic_reactjs_.RichText.render(title)
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.subtitle,
      children: external_prismic_reactjs_.RichText.render(subtitle)
    }), external_react_default().Children.toArray(content.map(slice => renderSlice(slice.content)))]
  });
};

/* harmony default export */ const InfoCardSlice = (InfoCard);
;// CONCATENATED MODULE: ./components/cms/slices/InfoCardSlice/index.js

/* harmony default export */ const slices_InfoCardSlice = (InfoCardSlice);

/***/ })

};
;