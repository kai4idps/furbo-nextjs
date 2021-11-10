"use strict";
exports.id = 448;
exports.ids = [448];
exports.modules = {

/***/ 8448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ slices_TwoCardsSlice)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "prismic-reactjs"
var external_prismic_reactjs_ = __webpack_require__(3437);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(8463);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(9912);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: ./components/Image/index.js + 1 modules
var Image = __webpack_require__(4592);
// EXTERNAL MODULE: ./components/cms/elements/LearnButton/index.js + 2 modules
var LearnButton = __webpack_require__(1954);
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
;// CONCATENATED MODULE: ./components/cms/elements/CustomButton/customButtonStyle.js
const customButtonStyle = theme => ({
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
    textTransform: 'none',
    borderRadius: '100px',
    fontFamily: 'FuturaPT'
  }
});

/* harmony default export */ const CustomButton_customButtonStyle = (customButtonStyle);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/cms/elements/CustomButton/CustomButton.jsx







const useStyles = (0,makeStyles/* default */.Z)(CustomButton_customButtonStyle);

const CustomButton = props => {
  const classes = useStyles();
  const theme = (0,useTheme/* default */.Z)();
  const smDown = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('sm'));
  const {
    className,
    text,
    color,
    link,
    center
  } = props;
  const btnClasses = `${classes.button} ${className || null}`;
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    style: {
      justifyContent: smDown ? 'center' : center ? 'center' : 'flex-start'
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: {
        pathname: link.url,
        query: router.query
      },
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        className: btnClasses,
        style: {
          backgroundColor: color,
          '&,&:hover,&:focus': {
            backgroundgetColor: color
          }
        },
        children: text
      })
    })
  });
};

/* harmony default export */ const CustomButton_CustomButton = (CustomButton);
;// CONCATENATED MODULE: ./components/cms/elements/CustomButton/index.js

/* harmony default export */ const elements_CustomButton = (CustomButton_CustomButton);
// EXTERNAL MODULE: ./components/cms/elements/ShopButton/index.js + 2 modules
var ShopButton = __webpack_require__(2440);
// EXTERNAL MODULE: ./components/VisibleSensorAnimation/index.js + 1 modules
var VisibleSensorAnimation = __webpack_require__(8516);
;// CONCATENATED MODULE: ./components/cms/slices/TwoCardsSlice/twoCardsSliceStyle.js
const twoCardsSliceStyle = theme => ({
  root: {
    height: 'auto',
    width: '100%',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      padding: '0px'
    }
  },
  title: {
    padding: '10px 0px 0px',
    width: '100%',
    color: '#434343',
    textAlign: 'center'
  },
  container: {
    [theme.breakpoints.down('xs')]: {
      paddingTop: '20px'
    }
  },
  cardContainer: {
    height: 'auto',
    width: '100%',
    padding: '15px',
    [theme.breakpoints.down('xs')]: {
      padding: '10px 0px'
    }
  },
  card: {
    width: '100%',
    height: '100%',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  cardContent: {
    position: 'relative',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    color: '#434343',
    flexGrow: 1,
    padding: '15px',
    '&:last-child': {
      paddingBottom: '15px'
    }
  },
  cardMedia: {
    height: 'auto',
    width: '100%'
  },
  cardMediaSmall: {
    padding: '15px 0px 0px',
    height: 'auto',
    width: '120px'
  },
  text: {
    color: '#434343'
  },
  slice: {
    padding: '10px 0px 0px',
    marginTop: 'auto'
  }
});

/* harmony default export */ const TwoCardsSlice_twoCardsSliceStyle = (twoCardsSliceStyle);
;// CONCATENATED MODULE: ./components/cms/slices/TwoCardsSlice/TwoCardsSlice.jsx














const TwoCardsSlice_useStyles = (0,makeStyles/* default */.Z)(TwoCardsSlice_twoCardsSliceStyle);

const renderSlice = slice => {
  if (slice.type === 'learn_button') {
    return /*#__PURE__*/jsx_runtime_.jsx(LearnButton/* default */.Z, {
      color: slice.data.color,
      learnButtonText: slice.data.learn_button_text,
      link: slice.data.link
    });
  } else if (slice.type === 'shop_button') {
    return /*#__PURE__*/jsx_runtime_.jsx(ShopButton/* default */.Z, {
      shopButtonText: slice.data.shop_button_text,
      center: slice.data.center
    });
  } else if (slice.type === 'custom_button') {
    return /*#__PURE__*/jsx_runtime_.jsx(elements_CustomButton, {
      color: slice.data.color,
      text: slice.data.text,
      link: slice.data.link,
      center: slice.data.center
    });
  } else {
    return null;
  }
};

const TwoCardsSlice = props => {
  const classes = TwoCardsSlice_useStyles();
  const {
    title,
    titleUnderline,
    imageFullWidth,
    enableElevation,
    content
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(VisibleSensorAnimation/* default */.Z, {
    animation: "grow",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.root,
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
      }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
        container: true,
        className: classes.container,
        style: {
          maxWidth: imageFullWidth ? null : '860px'
        },
        children: external_react_.Children.toArray(content.map(item => /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          item: true,
          xl: 6,
          lg: 6,
          md: 6,
          sm: 12,
          xs: 12,
          className: classes.cardContainer,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* default */.Z, {
            className: classes.card,
            elevation: enableElevation ? 5 : 0,
            children: [/*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
              className: imageFullWidth ? classes.cardMedia : classes.cardMediaSmall,
              alt: item.card_image.alt,
              src: item.card_image.url
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CardContent/* default */.Z, {
              className: classes.cardContent,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.text,
                children: external_prismic_reactjs_.RichText.render(item.card_text)
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.slice,
                children: renderSlice(item.card_content)
              })]
            })]
          })
        })))
      })]
    })
  });
};

/* harmony default export */ const TwoCardsSlice_TwoCardsSlice = (TwoCardsSlice);
;// CONCATENATED MODULE: ./components/cms/slices/TwoCardsSlice/index.js

/* harmony default export */ const slices_TwoCardsSlice = (TwoCardsSlice_TwoCardsSlice);

/***/ })

};
;