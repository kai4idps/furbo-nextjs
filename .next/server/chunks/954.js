"use strict";
exports.id = 954;
exports.ids = [954];
exports.modules = {

/***/ 1954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ elements_LearnButton)
});

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/cms/elements/LearnButton/learnButtonStyle.js
const learnButtonStyle = theme => ({
  root: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
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
    textTransform: 'none',
    borderRadius: '100px',
    fontFamily: 'FuturaPT',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      lineHeight: '18px'
    }
  }
});

/* harmony default export */ const LearnButton_learnButtonStyle = (learnButtonStyle);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/cms/elements/LearnButton/LearnButton.jsx







const useStyles = (0,makeStyles/* default */.Z)(LearnButton_learnButtonStyle);

const getPath = type => {
  if (type === 'Furbo Dog Nanny') {
    return 'products/furbo-dog-nanny';
  } else if (type === 'Saving Lives') {
    return 'pages/saving-lives';
  }

  return 'products/furbo-dog-nanny';
};

const getColor = type => {
  if (type === 'Blue') {
    return '#1e7bac';
  } else {
    return 'transparent';
  }
};

const getBorder = type => {
  if (type === 'Transparent, Blue Outline') {
    return '2px #1e7bac solid';
  } else if (type === 'Transparent, Grey Outline') {
    return '2px #434343 solid';
  } else {
    return 'transparent';
  }
};

const LearnButton = props => {
  const classes = useStyles();
  const {
    className,
    learnButtonText,
    color,
    link
  } = props;
  const btnClasses = `${classes.button} ${className || null}`;
  const region = (0,external_react_redux_.useSelector)(state => state.region.code);
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: {
        pathname: `/${region}/${getPath(link)}`,
        query: router.query
      },
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        className: btnClasses,
        style: {
          backgroundColor: getColor(color),
          border: getBorder(color),
          '&,&:hover,&:focus': {
            backgroundgetColor: getColor(color)
          }
        },
        children: learnButtonText
      })
    })
  });
};

/* harmony default export */ const LearnButton_LearnButton = (LearnButton);
;// CONCATENATED MODULE: ./components/cms/elements/LearnButton/index.js

/* harmony default export */ const elements_LearnButton = (LearnButton_LearnButton);

/***/ })

};
;