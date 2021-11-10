"use strict";
exports.id = 440;
exports.ids = [440];
exports.modules = {

/***/ 2440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ elements_ShopButton)
});

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(8920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(3457);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/cms/elements/ShopButton/shopButtonStyle.js
const shopButtonStyle = theme => ({
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
  button: {
    zIndex: 1000,
    width: '200px',
    height: '40px',
    color: '#ffffff',
    fontSize: '20px',
    lineHeight: '20px',
    fontWeight: 500,
    backgroundColor: '#f16849',
    textTransform: 'none',
    borderRadius: '100px',
    fontFamily: 'FuturaPT',
    '&,&:hover,&:focus': {
      backgroundColor: '#f16849'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      lineHeight: '18px'
    }
  }
});

/* harmony default export */ const ShopButton_shopButtonStyle = (shopButtonStyle);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/cms/elements/ShopButton/ShopButton.jsx








const useStyles = (0,makeStyles/* default */.Z)(ShopButton_shopButtonStyle);

const ShopButton = props => {
  const classes = useStyles();
  const theme = (0,useTheme/* default */.Z)();
  const smDown = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('sm'));
  const {
    className,
    shopButtonText,
    center = false,
    onClick
  } = props;
  const btnClasses = `${classes.button} ${className || null}`;
  const region = (0,external_react_redux_.useSelector)(state => state.region.code);
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    style: {
      justifyContent: smDown ? 'center' : center ? 'center' : 'flex-start'
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: {
        pathname: router.pathname === `/${region}/products/furbo-dog-camera` ? `/${region}/pages/cart` : `/${region}/products/furbo-dog-camera`,
        query: router.query
      },
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        className: btnClasses,
        onClick: onClick,
        children: shopButtonText
      })
    })
  });
};

/* harmony default export */ const ShopButton_ShopButton = (ShopButton);
;// CONCATENATED MODULE: ./components/cms/elements/ShopButton/index.js

/* harmony default export */ const elements_ShopButton = (ShopButton_ShopButton);

/***/ })

};
;