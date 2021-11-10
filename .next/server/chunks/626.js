exports.id = 626;
exports.ids = [626];
exports.modules = {

/***/ 4592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Image)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/helpers.js
var helpers = __webpack_require__(1710);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Image/Image.jsx
const _excluded = ["alt", "src", "fallback", "justifyContent", "alignItems", "type", "loading", "width", "height"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Image = _ref => {
  let {
    alt,
    src,
    fallback,
    justifyContent = 'center',
    alignItems = 'center',
    type = 'image/webp',
    loading = 'lazy',
    width,
    height
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  if ((0,helpers/* isEmpty */.x)(src)) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("picture", {
    style: {
      display: 'flex',
      justifyContent,
      alignItems,
      maxHeight: '100%',
      maxWidth: '100%'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("source", {
      srcSet: src,
      type: type
    }), /*#__PURE__*/jsx_runtime_.jsx("img", _objectSpread({
      alt: alt,
      src: (0,helpers/* isEmpty */.x)(fallback) ? src : fallback,
      loading: loading,
      width: width,
      height: height
    }, props))]
  });
};

Image.defaultProps = {
  alt: '',
  justifyContent: 'center',
  alignItems: 'center',
  type: 'image/webp'
};
/* harmony default export */ const Image_Image = (Image);
;// CONCATENATED MODULE: ./components/Image/index.js

/* harmony default export */ const components_Image = (Image_Image);

/***/ }),

/***/ 6211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_SeoManager)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "prismic-reactjs"
var external_prismic_reactjs_ = __webpack_require__(3437);
// EXTERNAL MODULE: external "html-react-parser"
var external_html_react_parser_ = __webpack_require__(7051);
var external_html_react_parser_default = /*#__PURE__*/__webpack_require__.n(external_html_react_parser_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/SeoManager/SeoManager.jsx






const SeoManager = ({
  seo
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
      children: seo.title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "title",
      content: seo.meta_title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "description",
      content: seo.meta_description
    }), external_html_react_parser_default()(external_prismic_reactjs_.RichText.asText(seo.custom_code))]
  });
};

/* harmony default export */ const SeoManager_SeoManager = (SeoManager);
;// CONCATENATED MODULE: ./components/SeoManager/index.js

/* harmony default export */ const components_SeoManager = (SeoManager_SeoManager);

/***/ }),

/***/ 550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_BaseLayout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(3832);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AppBar/AppBar.js
var AppBar = __webpack_require__(5258);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Drawer/Drawer.js + 1 modules
var Drawer = __webpack_require__(2112);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Hidden/Hidden.js + 3 modules
var Hidden = __webpack_require__(1543);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js
var Toolbar = __webpack_require__(8358);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./public/assets/images/general/furbo-logo-dark.svg
/* harmony default export */ const furbo_logo_dark = ({"src":"/_next/static/image/public/assets/images/general/furbo-logo-dark.5eb75642324da4c2b9c52e29b1f7499a.svg","height":104,"width":324});
;// CONCATENATED MODULE: ./public/assets/images/general/account.svg
/* harmony default export */ const account = ({"src":"/_next/static/image/public/assets/images/general/account.34322aa2db5e57baa3e90f789bf099ef.svg","height":35,"width":35});
;// CONCATENATED MODULE: ./public/assets/images/general/shop.svg
/* harmony default export */ const shop = ({"src":"/_next/static/image/public/assets/images/general/shop.b2cac3d6f0517717c095dfc101571ba9.svg","height":35,"width":35});
;// CONCATENATED MODULE: ./public/assets/images/general/hamburger.svg
/* harmony default export */ const hamburger = ({"src":"/_next/static/image/public/assets/images/general/hamburger.c9eef2e1fe60937f51c822adfd9a7e4b.svg","height":35,"width":35});
;// CONCATENATED MODULE: ./public/assets/images/general/furbo-dog-camera-logo.png
/* harmony default export */ const furbo_dog_camera_logo = ({"src":"/_next/static/image/public/assets/images/general/furbo-dog-camera-logo.47ceb144c15a0ea6360636d5d955dcf0.png","height":45,"width":45,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEVMaXHx6ubm5+f89/Lu6OX///3/+faSc2Le2dfIezzm39w4AADJt6fr5N2lkITz7eq3sbH7+viwno+/wcKuzaUeAAAAEXRSTlMA/vJIKF06CvUgZBCunf149Srf1EwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA3SURBVAiZJctXDgAwCAJQ7LJ2j/vftdHywwsJAFiEoYlnJEO6Kxj8po/osjf0TVO7NpeLLWB9PyglAQtyB9NsAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/assets/images/general/furbo-dog-nanny-logo.png
/* harmony default export */ const furbo_dog_nanny_logo = ({"src":"/_next/static/image/public/assets/images/general/furbo-dog-nanny-logo.2fe32e819ca8c7d61565691ecf7da8c6.png","height":45,"width":45,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXG7glDNpXTw8u/3/f25gVPalFyvdErMo3jOnG+wdEPdymzSrYzn5ubPsp/y4rzp49jSpXnl4dbBoonFg0nKmVjUw7nArrWqAdtZAAAAFHRSTlMAt/wQU3knHAszo8TtkELhgKpb6aHOyLkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA5SURBVAiZY2BgYONkAAN2YSY2MINPXIyVBcTg4GdiFeQAsbhFRRjBcrw8jFzsIIaQAAs7RCMzSAUAL7UBTm3iFwQAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./config/images/header.js







;// CONCATENATED MODULE: ./components/button/HomeButton/homeButtonStyle.js
const homeButtonStyle = theme => ({
  button: {
    height: 'calc(100% - 20px)',
    width: '130px',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      width: '100px',
      height: 'calc(100% - 10px)',
      left: '50%',
      transform: 'translateX(-50%)'
    }
  },
  image: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30px',
    width: '100%',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      height: '20px'
    }
  }
});

/* harmony default export */ const HomeButton_homeButtonStyle = (homeButtonStyle);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/button/HomeButton/HomeButton.jsx









const useStyles = (0,makeStyles/* default */.Z)(HomeButton_homeButtonStyle);

const HomeButton = () => {
  const classes = useStyles();
  const router = (0,router_.useRouter)();
  const region = (0,external_react_redux_.useSelector)(state => state.region.code);
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: {
      pathname: `/${region}`,
      query: router.query
    },
    passHref: true,
    children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
      className: classes.button,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.image,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          alt: "furbo-logo",
          src: furbo_logo_dark,
          layout: "fill",
          objectFit: "contain"
        })
      })
    })
  });
};

/* harmony default export */ const HomeButton_HomeButton = (HomeButton);
;// CONCATENATED MODULE: ./components/button/HomeButton/index.js

/* harmony default export */ const button_HomeButton = (HomeButton_HomeButton);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Icon/Icon.js
var Icon = __webpack_require__(2863);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(7812);
;// CONCATENATED MODULE: ./components/button/AccountIconButton/accountIconButtonStyle.js
const accountIconButtonStyle = theme => ({
  button: {
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '55px',
    height: '55px',
    [theme.breakpoints.down('sm')]: {
      width: '45px',
      height: '45px'
    }
  },
  image: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45px',
    height: '45px',
    [theme.breakpoints.down('sm')]: {
      width: '35px',
      height: '35px'
    }
  }
});

/* harmony default export */ const AccountIconButton_accountIconButtonStyle = (accountIconButtonStyle);
;// CONCATENATED MODULE: ./components/button/AccountIconButton/AccountIconButton.jsx









const AccountIconButton_useStyles = (0,makeStyles/* default */.Z)(AccountIconButton_accountIconButtonStyle);

const AccountIconButton = () => {
  const classes = AccountIconButton_useStyles();
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: {
      pathname: 'https://furbo.com/account',
      query: router.query
    },
    passHref: true,
    children: /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
      className: classes.button,
      children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
        className: classes.image,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          alt: "furbo-logo",
          src: account,
          layout: "fill",
          objectFit: "contain"
        })
      })
    })
  });
};

/* harmony default export */ const AccountIconButton_AccountIconButton = (AccountIconButton);
;// CONCATENATED MODULE: ./components/button/AccountIconButton/index.js

/* harmony default export */ const button_AccountIconButton = (AccountIconButton_AccountIconButton);
// EXTERNAL MODULE: external "prismic-reactjs"
var external_prismic_reactjs_ = __webpack_require__(3437);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(8920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(3457);
// EXTERNAL MODULE: ./components/Image/index.js + 1 modules
var Image = __webpack_require__(4592);
// EXTERNAL MODULE: ./src/helpers.js
var helpers = __webpack_require__(1710);
;// CONCATENATED MODULE: ./components/layout/Banner/customHtml.js


const customHtml = (type, element, content) => {
  var _element$data, _element$data2, _element$data3, _element$data4, _element$data5;

  if ((0,helpers/* isEmpty */.x)(element)) {
    return null;
  }

  if ((element === null || element === void 0 ? void 0 : (_element$data = element.data) === null || _element$data === void 0 ? void 0 : _element$data.label) === 'Yellow Font') {
    return /*#__PURE__*/jsx_runtime_.jsx("span", {
      style: {
        color: '#f7cd3d'
      },
      children: content
    });
  } else if ((element === null || element === void 0 ? void 0 : (_element$data2 = element.data) === null || _element$data2 === void 0 ? void 0 : _element$data2.label) === 'Red Font') {
    return /*#__PURE__*/jsx_runtime_.jsx("span", {
      style: {
        color: '#d0021b'
      },
      children: content
    });
  } else if ((element === null || element === void 0 ? void 0 : (_element$data3 = element.data) === null || _element$data3 === void 0 ? void 0 : _element$data3.label) === 'Orange Font') {
    return /*#__PURE__*/jsx_runtime_.jsx("span", {
      style: {
        color: '#ee684a'
      },
      children: content
    });
  } else if ((element === null || element === void 0 ? void 0 : (_element$data4 = element.data) === null || _element$data4 === void 0 ? void 0 : _element$data4.label) === 'Blue Font') {
    return /*#__PURE__*/jsx_runtime_.jsx("span", {
      style: {
        color: '#1e7bac'
      },
      children: content
    });
  } else if ((element === null || element === void 0 ? void 0 : (_element$data5 = element.data) === null || _element$data5 === void 0 ? void 0 : _element$data5.label) === 'White Font') {
    return /*#__PURE__*/jsx_runtime_.jsx("span", {
      style: {
        color: '#ffffff'
      },
      children: content
    });
  }

  return null;
};
;// CONCATENATED MODULE: ./components/layout/Banner/bannerStyle.js
const bannerStyle = theme => ({
  root: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 15px'
    }
  },
  leftImg: {
    marginRight: '100px',
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      margin: '0px 10px',
      width: '45px',
      height: '45px'
    },
    '@media (max-width: 350px)': {
      width: '40px',
      height: '40px'
    }
  },
  rightImg: {
    marginLeft: '100px',
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      margin: '0px 10px',
      width: '45px',
      height: '45px'
    },
    '@media (max-width: 350px)': {
      width: '40px',
      height: '40px'
    }
  },
  leftImgCountdown: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0px 20px 0px 10px',
    width: '40px',
    height: '40px',
    '@media (max-width: 350px)': {
      margin: '0px 10px 0px 10px',
      width: '35px',
      height: '35px'
    }
  },
  rightImgCountdown: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0px 10px 0px 20px',
    width: '40px',
    height: '40px',
    '@media (max-width: 350px)': {
      margin: '0px 10px 0px 10px',
      width: '35px',
      height: '35px'
    }
  },
  bannerContent: {
    fontSize: '18px',
    lineHeight: 'normal',
    height: 'auto',
    display: 'flex',
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px'
    }
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '80px',
    fontFamily: 'Avenir',
    fontColor: '#434343',
    fontWeight: '500',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '5px',
      height: '60px'
    }
  },
  time: {
    width: '50px',
    height: '45px',
    fontFamily: 'Avenir',
    lineHeight: 'normal',
    backgroundColor: 'white',
    borderRadius: '3px',
    opacity: '0.9',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timeDigit: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    color: '#434343',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: '18px',
    fontSize: '18px',
    paddingTop: '5px',
    fontWeight: 'bold',
    fontFamily: 'Avenir'
  },
  timeWord: {
    width: '40px',
    height: 'auto',
    fontSize: '10px',
    color: '#d0021b'
  },
  colon: {
    padding: '0px 5px',
    lineHeight: '30px',
    textAlign: 'center',
    height: '30px',
    fontSize: '24px',
    fontFamily: 'Avenir',
    color: '#ffffff',
    fontWeight: 'bold'
  },
  units: {
    width: '32px',
    height: '40px',
    margin: '0px 5px 1px',
    backgroundColor: 'white',
    borderRadius: '3px',
    opacity: '0.9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '28px',
      height: '38px'
    }
  },
  unitsDigit: {
    fontSize: '20px',
    lineHeight: '20px',
    paddingTop: '2px',
    height: 'auto',
    fontWeight: 'bold',
    fontFamily: 'Avenir'
  }
});

/* harmony default export */ const Banner_bannerStyle = (bannerStyle);
;// CONCATENATED MODULE: ./components/layout/Banner/BannerCountdown.jsx











const BannerCountdown_useStyles = (0,makeStyles/* default */.Z)(Banner_bannerStyle);

const BannerCountdown = () => {
  const classes = BannerCountdown_useStyles();
  const campaign = (0,external_react_redux_.useSelector)(state => state.prismic.campaign);
  const theme = (0,useTheme/* default */.Z)();
  const smDown = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('sm'));
  const {
    0: timeLeft,
    1: setTimeLeft
  } = (0,external_react_.useState)();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const target = new Date(campaign.countdown_date).getTime();
    const difference = target - now;
    const result = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(difference / (1000 * 60 * 60) % 24),
      minutes: Math.floor(difference / 1000 / 60 % 60),
      seconds: Math.floor(difference / 1000 % 60)
    };
    return result;
  };

  (0,external_react_.useEffect)(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if ((0,helpers/* isEmpty */.x)(timeLeft)) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.container
    });
  }

  if (campaign.banner_type.includes('Sales End Countdown')) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.root,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.container,
        style: {
          backgroundColor: campaign.banner_background_color,
          color: campaign.banner_font_color,
          height: campaign.banner_type.includes('Countdown') ? '80px' : null
        },
        children: [!(0,helpers/* isEmpty */.x)(campaign.banner_image_left) && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.leftImg,
          children: /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
            alt: campaign.banner_image_left.alt,
            src: campaign.banner_image_left.url,
            type: "image/svg+xml",
            loading: "eager"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          style: {
            flexDirection: 'column'
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: classes.bannerContent,
            style: {
              fontSize: smDown ? campaign.mobile_font_size : '16px'
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(external_prismic_reactjs_.RichText, {
              render: campaign.sales_end_countdown_text_content,
              htmlSerializer: customHtml
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: classes.bannerContent,
            style: {
              display: 'flex',
              flexDirection: 'row'
            },
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: classes.time,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.timeDigit,
                children: timeLeft.days * 24 + timeLeft.hours
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.timeWord,
                children: campaign.hours_text
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: classes.colon,
              children: ":"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: classes.time,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.timeDigit,
                children: timeLeft.minutes
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.timeWord,
                children: campaign.minutes_text
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: classes.colon,
              children: ":"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: classes.time,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.timeDigit,
                children: timeLeft.seconds
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.timeWord,
                children: campaign.seconds_text
              })]
            })]
          })]
        }), !(0,helpers/* isEmpty */.x)(campaign.banner_image_right) && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.rightImg,
          children: /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
            alt: campaign.banner_image_right.alt,
            src: campaign.banner_image_right.url,
            type: "image/svg+xml",
            loading: "eager"
          })
        })]
      })
    });
  }

  if (campaign.banner_type.includes('Unit Countdown')) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.root,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.container,
        style: {
          backgroundColor: campaign.banner_background_color,
          color: campaign.banner_font_color,
          height: campaign.banner_type.includes('Countdown') ? '80px' : null
        },
        children: [!smDown && !(0,helpers/* isEmpty */.x)(campaign.banner_image_left) && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.leftImg,
          children: /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
            alt: campaign.banner_image_left.alt,
            src: campaign.banner_image_left.url,
            type: "image/svg+xml",
            loading: "eager"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: classes.bannerContent,
            style: {
              fontSize: smDown ? campaign.mobile_font_size : '16px'
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(external_prismic_reactjs_.RichText, {
              render: campaign.unit_countdown_text_content,
              htmlSerializer: customHtml
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: classes.bannerContent,
            style: {
              flexDirection: 'row',
              fontSize: smDown ? campaign.mobile_font_size : '16px'
            },
            children: [smDown && !(0,helpers/* isEmpty */.x)(campaign.banner_image_left) && /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.leftImgCountdown,
              children: /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
                alt: campaign.banner_image_left.alt,
                src: campaign.banner_image_left.url,
                type: "image/svg+xml",
                loading: "eager"
              })
            }), campaign.units_remaining_text.split('{units}')[0], /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: classes.units,
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: classes.unitsDigit,
                children: "9"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: classes.units,
              style: {
                marginLeft: 0
              },
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: classes.unitsDigit,
                children: "9"
              })
            }), campaign.units_remaining_text.split('{units}')[1], smDown && !(0,helpers/* isEmpty */.x)(campaign.banner_image_right) && /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.rightImgCountdown,
              children: /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
                alt: campaign.banner_image_right.alt,
                src: campaign.banner_image_right.url,
                type: "image/svg+xml",
                loading: "eager"
              })
            })]
          })]
        }), !smDown && !(0,helpers/* isEmpty */.x)(campaign.banner_image_right) && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.rightImg,
          children: /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
            alt: campaign.banner_image_right.alt,
            src: campaign.banner_image_right.url,
            type: "image/svg+xml",
            loading: "eager"
          })
        })]
      })
    });
  }

  return null;
};

/* harmony default export */ const Banner_BannerCountdown = (BannerCountdown);
// EXTERNAL MODULE: external "react-responsive-carousel"
var external_react_responsive_carousel_ = __webpack_require__(2242);
;// CONCATENATED MODULE: ./components/layout/Banner/Banner.jsx











const Banner_useStyles = (0,makeStyles/* default */.Z)(Banner_bannerStyle);

const BannerContent = ({
  campaign
}) => {
  const classes = Banner_useStyles();
  const theme = (0,useTheme/* default */.Z)();
  const smDown = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('sm'));
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.container,
      style: {
        color: campaign.banner_font_color,
        backgroundColor: campaign.banner_background_color,
        height: campaign.banner_type.includes('Countdown') ? '80px' : null
      },
      children: [!(0,helpers/* isEmpty */.x)(campaign.banner_image_left) && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.leftImg,
        children: /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
          alt: campaign.banner_image_left.alt,
          src: campaign.banner_image_left.url
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: classes.bannerContent,
        style: {
          fontSize: smDown ? campaign.mobile_font_size : '16px'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(external_prismic_reactjs_.RichText, {
          render: campaign.banner_content,
          htmlSerializer: customHtml
        })
      }), !(0,helpers/* isEmpty */.x)(campaign.banner_image_right) && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.rightImg,
        children: /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
          alt: campaign.banner_image_right.alt,
          src: campaign.banner_image_right.url
        })
      })]
    })
  });
};

const Banner = ({
  campaign
}) => {
  const isCountdown = campaign.banner_type.includes('Countdown');
  const isContent = campaign.banner_type.includes('Content');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_responsive_carousel_.Carousel, {
    swipeable: isCountdown,
    showThumbs: false,
    showArrows: false,
    infiniteLoop: isCountdown,
    showIndicators: false,
    showStatus: false,
    autoPlay: isCountdown,
    transitionTime: isCountdown ? 500 : 0,
    children: [isContent && /*#__PURE__*/jsx_runtime_.jsx(BannerContent, {
      campaign: campaign
    }), isCountdown && /*#__PURE__*/jsx_runtime_.jsx(Banner_BannerCountdown, {})]
  });
};

/* harmony default export */ const Banner_Banner = (Banner);
;// CONCATENATED MODULE: ./components/layout/Banner/index.js

/* harmony default export */ const layout_Banner = (Banner_Banner);
;// CONCATENATED MODULE: ./components/button/AccountButton/accountButtonStyle.js
const accountButtonStyle_accountIconButtonStyle = theme => ({
  button: {
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 'auto',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      height: 'auto'
    }
  },
  image: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45px',
    height: '45px',
    [theme.breakpoints.down('sm')]: {
      width: '35px',
      height: '35px'
    }
  }
});

/* harmony default export */ const accountButtonStyle = (accountButtonStyle_accountIconButtonStyle);
;// CONCATENATED MODULE: ./components/button/AccountButton/AccountButton.jsx










const AccountButton_useStyles = (0,makeStyles/* default */.Z)(accountButtonStyle);

const AccountButton = ({
  text,
  className
}) => {
  const classes = AccountButton_useStyles();
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: {
      pathname: 'https://furbo.com/account',
      query: router.query
    },
    passHref: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Button/* default */.Z, {
      className: `${classes.button} ${className}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
        className: classes.image,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          alt: "furbo-logo",
          src: account,
          layout: "fill",
          objectFit: "contain"
        })
      }), text]
    })
  });
};

/* harmony default export */ const AccountButton_AccountButton = (AccountButton);
;// CONCATENATED MODULE: ./components/button/AccountButton/index.js

/* harmony default export */ const button_AccountButton = (AccountButton_AccountButton);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grow/Grow.js
var Grow = __webpack_require__(170);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Divider/Divider.js
var Divider = __webpack_require__(5517);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(998);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__(2822);
// EXTERNAL MODULE: external "@material-ui/icons/ExpandMore"
var ExpandMore_ = __webpack_require__(5887);
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js
var Dialog = __webpack_require__(2663);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(9525);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__(8777);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);
// EXTERNAL MODULE: ./config/navigation.js
var navigation = __webpack_require__(6780);
;// CONCATENATED MODULE: ./components/RegionDialog/flagButtonStyle.js
const flagButtonStyle = () => ({
  button: {
    width: '100%',
    justifyContent: 'flex-start',
    padding: '10px 5px',
    '&:hover': {
      backgroundColor: 'inherit',
      textDecoration: 'inherit'
    }
  },
  image: {
    position: 'relative',
    width: '40px',
    height: '26px'
  },
  text: {
    fontSize: '16px',
    fontFamily: 'Avenir',
    color: '#434343',
    paddingLeft: '20px',
    textTransform: 'none'
  }
});

/* harmony default export */ const RegionDialog_flagButtonStyle = (flagButtonStyle);
;// CONCATENATED MODULE: ./components/RegionDialog/FlagButton.jsx








const FlagButton_useStyles = (0,makeStyles/* default */.Z)(RegionDialog_flagButtonStyle);

const FlagButton = props => {
  const {
    info
  } = props;
  const classes = FlagButton_useStyles();
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: {
      pathname: info.isRedirect ? info.href : `/${info.code}`,
      query: router.query
    },
    passHref: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Button/* default */.Z, {
      className: classes.button,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.image,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: info.image,
          alt: info.country,
          layout: "fill",
          objectFit: "contain"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.text,
        children: info.country
      })]
    })
  });
};

/* harmony default export */ const RegionDialog_FlagButton = (FlagButton);
;// CONCATENATED MODULE: ./components/RegionDialog/regionDialogStyle.js
const regionDialogStyle = theme => ({
  gridContainer: {
    maxWidth: '960px',
    maxHeight: '310px',
    margin: '20px 0px 35px',
    width: '100%'
  },
  underLine: {
    width: '100%',
    display: 'block',
    borderTop: '1px solid #434343',
    margin: '10px auto'
  },
  button: {
    width: '100%',
    justifyContent: 'flex-start',
    padding: '10px 5px',
    '&:hover': {
      backgroundColor: 'inherit',
      textDecoration: 'inherit'
    }
  },
  closeIcon: {
    color: '#434343'
  },
  dialogContent: {
    backgroundColor: '#f7f7f7',
    padding: '30px',
    '&:first-child': {
      paddingTop: '40px'
    }
  },
  dialogContentHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: '20px',
    fontWeight: '500',
    fontFamily: 'Avenir',
    color: '#434343'
  },
  blockTitle: {
    padding: '10px 5px',
    fontSize: '20px',
    fontWeight: '500',
    fontFamily: 'Avenir',
    color: '#434343'
  },
  blockContainer: {
    flexDirection: 'column',
    maxHeight: '240px',
    //48 button height * 5
    [theme.breakpoints.down('sm')]: {
      maxHeight: 'none'
    }
  }
});

/* harmony default export */ const RegionDialog_regionDialogStyle = (regionDialogStyle);
;// CONCATENATED MODULE: ./components/RegionDialog/RegionDialog.jsx















const RegionDialog_useStyles = (0,makeStyles/* default */.Z)(RegionDialog_regionDialogStyle);

const ContinentBlock = ({
  title,
  info
}) => {
  const classes = RegionDialog_useStyles();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.blockTitle,
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
      className: classes.blockContainer,
      container: true,
      children: external_react_default().Children.toArray(info.map(country => /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
        item: true,
        md: 12 / Math.ceil(info.length / 5),
        sm: 12,
        xs: 12,
        children: /*#__PURE__*/jsx_runtime_.jsx(RegionDialog_FlagButton, {
          info: country
        })
      })))
    })]
  });
};

const getTitle = (title, content) => {
  if (title === 'Americas') {
    return content.americas;
  } else if (title === 'Europe') {
    return content.europe;
  } else if (title === 'Asia-Pacific') {
    return content["asia-pacific"];
  }
};

const RegionDialog = ({
  open,
  handleClose,
  content
}) => {
  const theme = (0,useTheme/* default */.Z)();
  const classes = RegionDialog_useStyles();
  const smDown = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('sm'));
  const {
    0: regionInfo,
    1: setRegionInfo
  } = (0,external_react_.useState)();
  (0,external_react_.useEffect)(() => {
    const getRegionInfo = () => {
      var _ref, _ref$filter;

      return (_ref = [...Object.values(navigation/* REGION_INFO */.w)]) === null || _ref === void 0 ? void 0 : (_ref$filter = _ref.filter(item => item.code !== 'cn')) === null || _ref$filter === void 0 ? void 0 : _ref$filter.reduce((prev, curr) => {
        prev[curr.group] = [...(prev[curr.group] || []), curr];
        return prev;
      }, {});
    };

    setRegionInfo(getRegionInfo());
  }, []);

  if ((0,helpers/* isEmpty */.x)(regionInfo)) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
      mdUp: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(Dialog/* default */.Z, {
        fullScreen: smDown,
        open: open,
        onClose: handleClose,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(DialogContent/* default */.Z, {
          className: classes.dialogContent,
          onClick: () => {
            if (open) {
              handleClose();
            }
          },
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.dialogContentHeader,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.headerTitle,
              children: content.visit_your_location
            }), /*#__PURE__*/jsx_runtime_.jsx((Close_default()), {
              className: classes.closeIcon,
              onClick: handleClose
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.underLine
          }), external_react_default().Children.toArray(Object.values(regionInfo).map((info, index) => /*#__PURE__*/jsx_runtime_.jsx(ContinentBlock, {
            title: getTitle(Object.keys(regionInfo)[index], content),
            info: info
          })))]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
      smDown: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
        className: classes.gridContainer,
        container: true,
        children: external_react_default().Children.toArray(Object.values(regionInfo).map((info, index) => /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          className: classes.gridItem,
          item: true,
          sm: Math.ceil(info.length / 5) * 3,
          children: /*#__PURE__*/jsx_runtime_.jsx(ContinentBlock, {
            title: Object.keys(regionInfo)[index],
            info: info
          })
        }, Object.keys(regionInfo)[index])))
      })
    })]
  });
};

/* harmony default export */ const RegionDialog_RegionDialog = (RegionDialog);
;// CONCATENATED MODULE: ./components/RegionDialog/index.js

/* harmony default export */ const components_RegionDialog = (RegionDialog_RegionDialog);
// EXTERNAL MODULE: ./config/routes/routes.js
var routes_routes = __webpack_require__(2621);
;// CONCATENATED MODULE: ./components/layout/HeaderLinks/headerLinksStyle.js
const headerLinksStyle = theme => ({
  list: {
    margin: 0,
    padding: '0',
    listStyle: 'none',
    height: '100%'
  },
  listItem: {
    position: 'relative',
    float: 'left',
    display: 'flex',
    height: '100%',
    width: 'auto',
    margin: '0',
    padding: '0',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '70px'
    }
  },
  button: {
    position: 'relative',
    color: '#434343',
    height: 'calc(100% - 20px)',
    fontFamily: 'FuturaPT',
    padding: '10px 16px 10px',
    fontWeight: '500',
    fontSize: '16px',
    borderRadius: '3px',
    textDecoration: 'none',
    margin: '0px',
    display: 'inline-flex',
    textTransform: 'none',
    lineHeight: 'normal',
    [theme.breakpoints.down('md')]: {
      padding: '10px 9px 10px'
    },
    [theme.breakpoints.down('sm')]: {
      fontFamily: 'Avenir',
      paddingLeft: '37px',
      width: '100%',
      margin: '0px',
      height: '70px',
      fontSize: '20px',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'flex-start'
    }
  },
  productList: {
    zIndex: 1200,
    backgroundColor: '#f5f5f5',
    transformOrigin: '50% 0 0',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    left: '0px',
    right: '0px',
    top: '78px',
    width: '100%',
    height: '85px',
    [theme.breakpoints.down('sm')]: {
      top: '70px',
      flexDirection: 'column',
      height: '140px'
    }
  },
  divider: {
    width: '1px',
    height: '30px',
    backgroundColor: '#434343',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  expandMore: {
    transition: 'transform .5s',
    transform: 'rotate(180deg)'
  },
  expandLess: {
    transition: 'transform .5s',
    transform: 'rotate(0)'
  },
  moveDown: {
    transition: 'transform .5s',
    transform: 'translate(0px, 140px)'
  },
  moveUp: {
    transition: 'transform .5s',
    transform: 'translate(0px, 0px)'
  },
  drawerDivider: {
    margin: '5px auto',
    width: 'calc(100% - 40px)',
    backgroundColor: '#434343',
    height: '1px'
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35px',
    height: '35px',
    marginRight: '10px'
  },
  accountButton: {
    display: 'flex',
    justifyContent: 'flex-start',
    paddingLeft: '37px',
    width: '100%',
    height: '100%'
  },
  accountText: {
    paddingLeft: '10px',
    fontFamily: 'Avenir',
    fontSize: '20px',
    color: '#434343'
  },
  flag: {
    position: 'relative',
    display: 'flex',
    width: '40px',
    height: '26px'
  },
  flagText: {
    color: '#434343',
    fontFamily: 'FuturaPT',
    textTransform: 'none',
    paddingLeft: '10px',
    fontSize: '20px',
    fontWeight: '500',
    height: 'auto',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      fontFamily: 'Avenir'
    }
  }
});

/* harmony default export */ const HeaderLinks_headerLinksStyle = (headerLinksStyle);
;// CONCATENATED MODULE: ./components/layout/HeaderLinks/HeaderLinks.jsx





















const HeaderLinks_useStyles = (0,makeStyles/* default */.Z)(HeaderLinks_headerLinksStyle);

const HeaderButton = ({
  item,
  onClick,
  showIcon = true
}) => {
  const classes = HeaderLinks_useStyles();
  const router = (0,router_.useRouter)();
  const theme = (0,useTheme/* default */.Z)();
  const smDown = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('sm'));
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: {
      pathname: item.path,
      query: router.query
    },
    passHref: true,
    children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
      className: classes.button,
      startIcon: showIcon ? smDown ? item.icon.smDown : item.icon.mdUp : null,
      onClick: onClick,
      children: item.title
    })
  });
};

const productDropdown = array => {
  var _array$find, _array$find2, _array$find3;

  const enableProduct = ((_array$find = array.find(item => item.key === routes_routes/* PAGE_KEYS.PRODUCTS */.m7.PRODUCTS)) === null || _array$find === void 0 ? void 0 : _array$find.enabled) === true;
  const enableFdn = ((_array$find2 = array.find(item => item.key === routes_routes/* PAGE_KEYS.FURBO_DOG_NANNY */.m7.FURBO_DOG_NANNY)) === null || _array$find2 === void 0 ? void 0 : _array$find2.enabled) === true;
  const enableFass = ((_array$find3 = array.find(item => item.key === 'NANNY_CAM_BUNDLE')) === null || _array$find3 === void 0 ? void 0 : _array$find3.enabled) === true;
  return enableProduct ? enableFdn || enableFass : enableFdn && enableFass;
};

const HeaderLinks = ({
  routes,
  onClose,
  content
}) => {
  var _REGION_INFO$region$t, _REGION_INFO$region$t2, _REGION_INFO$region$t3;

  const {
    0: openRegionList,
    1: setOpenRegionList
  } = (0,external_react_.useState)(false);
  const theme = (0,useTheme/* default */.Z)();
  const smDown = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('sm'), {
    noSsr: true
  });
  const {
    0: productOpen,
    1: setProductOpen
  } = (0,external_react_.useState)(smDown);
  const region = (0,external_react_redux_.useSelector)(state => state.region.code);
  const classes = HeaderLinks_useStyles();
  const isProductDropdown = productDropdown(routes);

  const pageOnClick = () => {
    onClose();
    setProductOpen(false);
  };

  const productOnClick = () => {
    setProductOpen(!productOpen);
  };

  const handleRegionEdit = () => {
    setOpenRegionList(!openRegionList);
  };

  const handleRegionListClose = () => {
    setOpenRegionList(false);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(List/* default */.Z, {
      className: classes.list,
      children: [isProductDropdown && /*#__PURE__*/jsx_runtime_.jsx(ListItem/* default */.Z, {
        className: classes.listItem,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Button/* default */.Z, {
          className: classes.button,
          onClick: () => productOnClick(),
          children: [content.our_products, /*#__PURE__*/jsx_runtime_.jsx((ExpandMore_default()), {
            className: productOpen ? classes.expandMore : classes.expandLess
          })]
        })
      }), external_react_default().Children.toArray(routes.map(item => {
        if (!item.enabled) {
          return null;
        }

        if (isProductDropdown && (item.key === routes_routes/* PAGE_KEYS.PRODUCTS */.m7.PRODUCTS || item.key === routes_routes/* PAGE_KEYS.FURBO_DOG_NANNY */.m7.FURBO_DOG_NANNY)) {
          return null;
        }

        return /*#__PURE__*/jsx_runtime_.jsx(ListItem/* default */.Z, {
          className: `${classes.listItem} ${smDown ? productOpen ? classes.moveDown : classes.moveUp : null}`,
          children: /*#__PURE__*/jsx_runtime_.jsx(HeaderButton, {
            item: item,
            onClick: pageOnClick,
            showIcon: isProductDropdown
          })
        });
      })), smDown && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ListItem/* default */.Z, {
          className: smDown ? productOpen ? classes.moveDown : classes.moveUp : null,
          children: /*#__PURE__*/jsx_runtime_.jsx(Divider/* default */.Z, {
            variant: "middle",
            className: classes.drawerDivider
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(ListItem/* default */.Z, {
          className: `${classes.listItem} ${smDown ? productOpen ? classes.moveDown : classes.moveUp : null}`,
          children: /*#__PURE__*/jsx_runtime_.jsx(button_AccountButton, {
            className: classes.accountButton,
            text: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.accountText,
              children: content.sign_in
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(ListItem/* default */.Z, {
          className: `${classes.listItem} ${smDown ? productOpen ? classes.moveDown : classes.moveUp : null}`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Button/* default */.Z, {
            className: classes.button,
            onClick: handleRegionEdit,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.flag,
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                src: (_REGION_INFO$region$t = navigation/* REGION_INFO */.w[region.toUpperCase()]) === null || _REGION_INFO$region$t === void 0 ? void 0 : _REGION_INFO$region$t.image,
                alt: (_REGION_INFO$region$t2 = navigation/* REGION_INFO */.w[region.toUpperCase()]) === null || _REGION_INFO$region$t2 === void 0 ? void 0 : _REGION_INFO$region$t2.code,
                layout: "fill",
                objectFit: "contain"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.flagText,
              children: (_REGION_INFO$region$t3 = navigation/* REGION_INFO */.w[region.toUpperCase()]) === null || _REGION_INFO$region$t3 === void 0 ? void 0 : _REGION_INFO$region$t3.country
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(components_RegionDialog, {
          open: openRegionList,
          handleClose: handleRegionListClose,
          content: content
        })]
      })]
    }), isProductDropdown && /*#__PURE__*/jsx_runtime_.jsx(Grow/* default */.Z, {
      in: productOpen,
      className: classes.productList,
      children: /*#__PURE__*/jsx_runtime_.jsx(List/* default */.Z, {
        children: external_react_default().Children.toArray(routes.map(item => {
          if (item.key !== routes_routes/* PAGE_KEYS.PRODUCTS */.m7.PRODUCTS && item.key !== routes_routes/* PAGE_KEYS.FURBO_DOG_NANNY */.m7.FURBO_DOG_NANNY && item.key !== 'NANNY_CAM_BUNDLE') {
            return null;
          }

          return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [item.key !== routes_routes/* PAGE_KEYS.PRODUCTS */.m7.PRODUCTS && /*#__PURE__*/jsx_runtime_.jsx(ListItem/* default */.Z, {
              className: classes.listItem,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.divider
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(ListItem/* default */.Z, {
              className: classes.listItem,
              children: /*#__PURE__*/jsx_runtime_.jsx(HeaderButton, {
                item: item,
                onClick: pageOnClick
              })
            })]
          });
        }))
      })
    })]
  });
};

HeaderLinks.defaultProps = {
  routes: []
};
/* harmony default export */ const HeaderLinks_HeaderLinks = (HeaderLinks);
;// CONCATENATED MODULE: ./components/layout/HeaderLinks/index.js

/* harmony default export */ const layout_HeaderLinks = (HeaderLinks_HeaderLinks);
;// CONCATENATED MODULE: ./components/button/ShopButton/shopButtonStyle.js
const shopButtonStyle = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '24px'
    }
  },
  button: {
    zIndex: 1000,
    width: '120px',
    height: '35px',
    color: '#ffffff',
    fontSize: '16px',
    lineHeight: '16px',
    fontFamily: 'FuturaPT',
    fontWeight: 500,
    backgroundColor: '#f16849',
    textTransform: 'none',
    borderRadius: '100px',
    '&,&:hover,&:focus': {
      backgroundColor: '#f16849'
    }
  }
});

/* harmony default export */ const ShopButton_shopButtonStyle = (shopButtonStyle);
;// CONCATENATED MODULE: ./components/button/ShopButton/ShopButton.jsx








const ShopButton_useStyles = (0,makeStyles/* default */.Z)(ShopButton_shopButtonStyle);

const ShopButton = ({
  className,
  text
}) => {
  const classes = ShopButton_useStyles();
  const btnClasses = `${classes.button} ${className || null}`;
  const region = (0,external_react_redux_.useSelector)(state => state.region.code);
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: {
        pathname: `/${region}/products/furbo-dog-camera`,
        query: router.query
      },
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        className: btnClasses,
        children: text
      })
    })
  });
};

/* harmony default export */ const ShopButton_ShopButton = (ShopButton);
;// CONCATENATED MODULE: ./components/button/ShopButton/index.js

/* harmony default export */ const button_ShopButton = (ShopButton_ShopButton);
;// CONCATENATED MODULE: ./components/button/ShopIconButton/shopIconButtonStyle.js
const shopIconButtonStyle = theme => ({
  button: {
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '55px',
    height: '55px',
    [theme.breakpoints.down('sm')]: {
      width: '45px',
      height: '45px'
    }
  },
  image: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45px',
    height: '45px',
    [theme.breakpoints.down('sm')]: {
      width: '35px',
      height: '35px'
    }
  }
});

/* harmony default export */ const ShopIconButton_shopIconButtonStyle = (shopIconButtonStyle);
;// CONCATENATED MODULE: ./components/button/ShopIconButton/ShopIconButton.jsx










const ShopIconButton_useStyles = (0,makeStyles/* default */.Z)(ShopIconButton_shopIconButtonStyle);

const ShopIconButton = () => {
  const classes = ShopIconButton_useStyles();
  const region = (0,external_react_redux_.useSelector)(state => state.region.code);
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: {
      pathname: `/${region}/products/furbo-dog-camera`,
      query: router.query
    },
    passHref: true,
    children: /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
      className: classes.button,
      children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
        className: classes.image,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          alt: "furbo-logo",
          src: shop,
          layout: "fill",
          objectFit: "contain"
        })
      })
    })
  });
};

/* harmony default export */ const ShopIconButton_ShopIconButton = (ShopIconButton);
;// CONCATENATED MODULE: ./components/button/ShopIconButton/index.js

/* harmony default export */ const button_ShopIconButton = (ShopIconButton_ShopIconButton);
;// CONCATENATED MODULE: ./components/button/MenuIconButton/menuIconButtonStyle.js
const menuIconButtonStyle = theme => ({
  button: {
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '55px',
    height: '55px',
    [theme.breakpoints.down('sm')]: {
      width: '45px',
      height: '45px'
    }
  },
  image: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45px',
    height: '45px',
    [theme.breakpoints.down('sm')]: {
      width: '35px',
      height: '35px'
    }
  }
});

/* harmony default export */ const MenuIconButton_menuIconButtonStyle = (menuIconButtonStyle);
;// CONCATENATED MODULE: ./components/button/MenuIconButton/MenuIconButton.jsx







const MenuIconButton_useStyles = (0,makeStyles/* default */.Z)(MenuIconButton_menuIconButtonStyle);

const MenuIconButton = ({
  onClick
}) => {
  const classes = MenuIconButton_useStyles();
  return /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
    className: classes.button,
    onClick: onClick,
    children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
      className: classes.image,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        alt: "furbo-logo",
        src: hamburger,
        layout: "fill",
        objectFit: "contain"
      })
    })
  });
};

/* harmony default export */ const MenuIconButton_MenuIconButton = (MenuIconButton);
;// CONCATENATED MODULE: ./components/button/MenuIconButton/index.js

/* harmony default export */ const button_MenuIconButton = (MenuIconButton_MenuIconButton);
;// CONCATENATED MODULE: ./config/routes/ca.js





const PAGE_PATHS = {
  [routes_routes/* PAGE_KEYS.HOME */.m7.HOME]: '/ca',
  [routes_routes/* PAGE_KEYS.PRODUCTS */.m7.PRODUCTS]: '/ca/products/furbo-dog-camera',
  [routes_routes/* PAGE_KEYS.FURBO_DOG_NANNY */.m7.FURBO_DOG_NANNY]: '/ca/products/furbo-dog-nanny',
  [routes_routes/* PAGE_KEYS.SAVING_LIVES */.m7.SAVING_LIVES]: '/ca/pages/saving-lives',
  [routes_routes/* PAGE_KEYS.FURBO_FOR_GOOD */.m7.FURBO_FOR_GOOD]: '/ca/pages/furbo-for-good',
  [routes_routes/* PAGE_KEYS.DESIGNED_FOR_DOGS */.m7.DESIGNED_FOR_DOGS]: '/ca/pages/designed-for-dogs',
  [routes_routes/* PAGE_KEYS.BLOGS */.m7.BLOGS]: '/ca/pages/blogs',
  [routes_routes/* PAGE_KEYS.PRESS */.m7.PRESS]: '/ca/pages/press-mention',
  [routes_routes/* PAGE_KEYS.BRAND_STORY */.m7.BRAND_STORY]: '/ca/pages/brand-story',
  [routes_routes/* PAGE_KEYS.ORDER_STATUS */.m7.ORDER_STATUS]: '/ca/pages/order-status',
  [routes_routes/* PAGE_KEYS.CART */.m7.CART]: '/ca/pages/cart'
};
const HEADER_ROUTES = content => [{
  enabled: content.enable_product,
  title: content.furbo_dog_camera,
  path: PAGE_PATHS[routes_routes/* PAGE_KEYS.PRODUCTS */.m7.PRODUCTS],
  key: routes_routes/* PAGE_KEYS.PRODUCTS */.m7.PRODUCTS,
  icon: {
    mdUp: /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        position: 'relative',
        top: '50%',
        display: 'flex',
        left: 0,
        width: '45px',
        height: '45px'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: furbo_dog_camera_logo,
        alt: "furbo-dog-camera-icon",
        layout: "fill",
        objectFit: "contain"
      })
    }),
    smDown: /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        position: 'relative',
        top: '50%',
        display: 'flex',
        left: 0,
        width: '45px',
        height: '45px'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: furbo_dog_camera_logo,
        alt: "furbo-dog-camera-icon",
        layout: "fill",
        objectFit: "contain"
      })
    })
  }
}, {
  enabled: content.enable_furbo_dog_nanny,
  title: content.furbo_dog_nanny,
  path: PAGE_PATHS[routes_routes/* PAGE_KEYS.FURBO_DOG_NANNY */.m7.FURBO_DOG_NANNY],
  key: routes_routes/* PAGE_KEYS.FURBO_DOG_NANNY */.m7.FURBO_DOG_NANNY,
  icon: {
    mdUp: /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        position: 'relative',
        top: '50%',
        display: 'flex',
        left: 0,
        width: '45px',
        height: '45px'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: furbo_dog_nanny_logo,
        alt: "furbo-dog-nanny-icon",
        layout: "fill",
        objectFit: "contain"
      })
    }),
    smDown: /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        position: 'relative',
        top: '50%',
        display: 'flex',
        left: 0,
        width: '45px',
        height: '45px'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: furbo_dog_nanny_logo,
        alt: "furbo-dog-nanny-icon",
        layout: "fill",
        objectFit: "contain"
      })
    })
  }
}, {
  enabled: content.enable_furbo_for_good,
  title: content.furbo_for_good,
  path: PAGE_PATHS[routes_routes/* PAGE_KEYS.FURBO_FOR_GOOD */.m7.FURBO_FOR_GOOD],
  key: routes_routes/* PAGE_KEYS.FURBO_FOR_GOOD */.m7.FURBO_FOR_GOOD,
  icon: /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
}, {
  enabled: content.enable_saving_lives,
  title: content.saving_lives,
  path: PAGE_PATHS[routes_routes/* PAGE_KEYS.SAVING_LIVES */.m7.SAVING_LIVES],
  key: routes_routes/* PAGE_KEYS.SAVING_LIVES */.m7.SAVING_LIVES,
  icon: /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
}, {
  enabled: content.enable_designed_for_dogs,
  title: content.designed_for_dogs,
  path: PAGE_PATHS[routes_routes/* PAGE_KEYS.DESIGNED_FOR_DOGS */.m7.DESIGNED_FOR_DOGS],
  key: routes_routes/* PAGE_KEYS.DESIGNED_FOR_DOGS */.m7.DESIGNED_FOR_DOGS,
  icon: /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
}];
;// CONCATENATED MODULE: ./components/layout/Header/headerStyle.js
const headerStyle = theme => ({
  appBar: {
    display: 'flex',
    border: '0',
    color: '#666666',
    width: '100%',
    height: 'auto',
    padding: '0px 0px 0px',
    borderBottom: 'solid 3px #f7cd3d',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    zIndex: 1100,
    [theme.breakpoints.down('sm')]: {
      borderBottom: 'none'
    }
  },
  outerContainer: {
    padding: '0px 50px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 15px 10px'
    }
  },
  toolbar: {
    minHeight: '50px',
    flex: '1',
    margin: '0px',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'nowrap',
    padding: '0px',
    height: '75px',
    [theme.breakpoints.down('sm')]: {
      height: '55px'
    }
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35px',
    height: '35px'
  },
  leftContainer: {
    width: 'auto',
    height: '75px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      height: '55px'
    }
  },
  rightContainer: {
    width: 'auto',
    height: '75px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      height: '55px'
    }
  },
  headerSpacing: {
    paddingLeft: '24px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0px'
    }
  },
  drawerPaper: {
    display: 'block',
    position: 'fixed',
    backgroundColor: '#f7f7f7',
    border: 'none',
    height: 'calc(100vh - 145px)',
    width: '300px',
    right: 'auto',
    top: '145px',
    left: '0',
    overflowY: 'auto',
    borderTop: 'none',
    textAlign: 'left',
    paddingRight: '0px',
    paddingLeft: '0px'
  },
  extraPadding: {
    top: '165px',
    height: 'calc(100vh - 165px)'
  },
  drawerContainer: {
    width: '100%',
    height: 'calc(100% + 150px)'
  },
  shopIconButton: {},
  pageLinks: {
    position: 'relative',
    display: 'flex',
    height: 'auto'
  },
  button: {
    padding: 6,
    [theme.breakpoints.down('sm')]: {
      padding: 5
    }
  },
  image: {
    width: '35px',
    height: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

/* harmony default export */ const Header_headerStyle = (headerStyle);
;// CONCATENATED MODULE: ./components/layout/Header/Header.jsx


















const Header_useStyles = (0,makeStyles/* default */.Z)(Header_headerStyle);

const Header = ({
  campaign,
  content,
  drawerOpen,
  setDrawerOpen
}) => {
  var _campaign$banner_type;

  const classes = Header_useStyles();
  const router = (0,router_.useRouter)();
  const isCountdown = campaign === null || campaign === void 0 ? void 0 : (_campaign$banner_type = campaign.banner_type) === null || _campaign$banner_type === void 0 ? void 0 : _campaign$banner_type.includes('Countdown');

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(AppBar/* default */.Z, {
    className: classes.appBar,
    elevation: 0,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        width: '100%'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(layout_Banner, {
        campaign: campaign
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
        maxWidth: "lg",
        className: classes.outerContainer,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Toolbar/* default */.Z, {
          className: classes.toolbar,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Hidden/* default */.Z, {
            mdUp: true,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.leftContainer,
              children: /*#__PURE__*/jsx_runtime_.jsx(button_MenuIconButton, {
                onClick: handleDrawerToggle
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(button_HomeButton, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.rightContainer,
              children: [/*#__PURE__*/jsx_runtime_.jsx(button_AccountIconButton, {}), router.pathname !== '/ca/products/furbo-dog-camera' && router.pathname !== '/ca/pages/cart' && /*#__PURE__*/jsx_runtime_.jsx(button_ShopIconButton, {
                className: classes.shopIconButton
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Hidden/* default */.Z, {
            smDown: true,
            children: [/*#__PURE__*/jsx_runtime_.jsx(button_HomeButton, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.rightContainer,
              children: [/*#__PURE__*/jsx_runtime_.jsx(layout_HeaderLinks, {
                routes: HEADER_ROUTES(content),
                content: content,
                onClose: () => setDrawerOpen(false)
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.headerSpacing
              }), /*#__PURE__*/jsx_runtime_.jsx(button_AccountIconButton, {}), router.pathname !== '/ca/products/furbo-dog-camera' && router.pathname !== '/ca/pages/cart' && /*#__PURE__*/jsx_runtime_.jsx(button_ShopButton, {
                text: content.shop_now
              })]
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
          mdUp: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(Drawer/* default */.ZP, {
            variant: "temporary",
            anchor: "left",
            open: drawerOpen,
            classes: {
              paper: `${isCountdown ? classes.extraPadding : null} ${classes.drawerPaper}`
            },
            BackdropProps: {
              invisible: true
            },
            onClose: handleDrawerToggle,
            elevation: 2,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.drawerContainer,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.pageLinks,
                children: /*#__PURE__*/jsx_runtime_.jsx(layout_HeaderLinks, {
                  routes: HEADER_ROUTES(content),
                  content: content,
                  onClose: () => setDrawerOpen(false)
                })
              })
            })
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const Header_Header = (Header);
;// CONCATENATED MODULE: ./components/layout/Header/index.js

/* harmony default export */ const layout_Header = (Header_Header);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(2543);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(5875);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AccordionSummary/AccordionSummary.js
var AccordionSummary = __webpack_require__(743);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AccordionDetails/AccordionDetails.js
var AccordionDetails = __webpack_require__(1201);
// EXTERNAL MODULE: ./components/layout/Footer/FooterButton.jsx
var FooterButton = __webpack_require__(8432);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputBase/InputBase.js + 1 modules
var InputBase = __webpack_require__(4741);
// EXTERNAL MODULE: ./config/images/general.js + 4 modules
var general = __webpack_require__(4737);
;// CONCATENATED MODULE: ./components/layout/Footer/emailInputStyle.js
const emailInputStyle = () => ({
  root: {
    marginTop: '10px',
    height: '30px',
    width: '100%'
  },
  form: {
    display: 'flex',
    flexDirection: 'row'
  },
  input: {
    backgroundColor: '#c6c6c6',
    width: 'calc(100% - 40px)',
    height: '30px',
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px'
  },
  submitButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitButtonContainer: {
    margin: 0,
    padding: 0,
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
    width: '32px',
    height: '30px',
    backgroundColor: '#f7cd3d',
    display: 'flex'
  },
  blackTriangle: {
    width: '10.5px',
    height: '12.5px'
  }
});

/* harmony default export */ const Footer_emailInputStyle = (emailInputStyle);
;// CONCATENATED MODULE: ./components/layout/Footer/EmailInput.jsx








const EmailInput_useStyles = (0,makeStyles/* default */.Z)(Footer_emailInputStyle);

const EmailInput = ({
  action
}) => {
  const classes = EmailInput_useStyles();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      className: classes.form,
      autoComplete: "off",
      action: action,
      method: "post",
      children: [/*#__PURE__*/jsx_runtime_.jsx(InputBase/* default */.Z, {
        className: classes.input,
        inputProps: {
          style: {
            padding: '0px 0px 0px 10px',
            fontFamily: 'Avenir'
          }
        },
        name: "EMAIL",
        type: "email",
        placeholder: "Email"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.submitButtonContainer,
        children: /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
          className: classes.submitButton,
          type: "submit",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            className: classes.blackTriangle,
            src: general/* BLACK_TRIANGLE_SVG */.sI,
            alt: "email"
          })
        })
      })]
    })
  });
};

/* harmony default export */ const Footer_EmailInput = (EmailInput);
// EXTERNAL MODULE: external "@material-ui/icons/Add"
var Add_ = __webpack_require__(3762);
var Add_default = /*#__PURE__*/__webpack_require__.n(Add_);
// EXTERNAL MODULE: external "@material-ui/icons/Remove"
var Remove_ = __webpack_require__(608);
var Remove_default = /*#__PURE__*/__webpack_require__.n(Remove_);
;// CONCATENATED MODULE: ./components/layout/Footer/footerAccordionStyle.js
const footerAccordionStyle = () => ({
  accordionHeader: {
    backgroundColor: '#434343',
    color: '#ffffff',
    fontWeight: '800',
    fontSize: '18px'
  },
  accordionList: {
    backgroundColor: '#434343',
    display: 'flex',
    flexDirection: 'column'
  }
});

/* harmony default export */ const Footer_footerAccordionStyle = (footerAccordionStyle);
;// CONCATENATED MODULE: ./components/layout/Footer/FooterAccordion.jsx











const FooterAccordion_useStyles = (0,makeStyles/* default */.Z)(Footer_footerAccordionStyle);
const FooterAccordion_AccordionSummary = (0,withStyles/* default */.Z)({
  root: {
    minHeight: '50px',
    height: '50px',
    padding: '0px',
    '&$expanded': {
      minHeight: '50px',
      height: '50px'
    }
  },
  content: {
    margin: 0,
    padding: '0px',
    '&$expanded': {
      margin: 0
    }
  },
  expanded: {}
})(AccordionSummary/* default */.Z);
const FooterAccordion_AccordionDetails = (0,withStyles/* default */.Z)({
  root: {
    padding: '0px'
  }
})(AccordionDetails/* default */.Z);
const FooterAccordion_Accordion = (0,withStyles/* default */.Z)({
  root: {
    boxShadow: 'none',
    '&::before': {
      display: 'none'
    }
  },
  expanded: {
    '&$expanded': {
      margin: 0
    }
  }
})(Accordion/* default */.Z);

const FooterAccordion = ({
  title,
  list
}) => {
  const classes = FooterAccordion_useStyles();
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);

  const handleChange = () => {
    setOpen(prev => !prev);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(FooterAccordion_Accordion, {
    elevation: 0,
    onChange: handleChange,
    children: [/*#__PURE__*/jsx_runtime_.jsx(FooterAccordion_AccordionSummary, {
      className: classes.accordionHeader,
      expandIcon: open === true ? /*#__PURE__*/jsx_runtime_.jsx((Remove_default()), {
        style: {
          color: '#ffffff'
        }
      }) : /*#__PURE__*/jsx_runtime_.jsx((Add_default()), {
        style: {
          color: '#ffffff'
        }
      }),
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx(FooterAccordion_AccordionDetails, {
      className: classes.accordionList,
      children: external_react_.Children.toArray(list.map(info => /*#__PURE__*/jsx_runtime_.jsx(FooterButton/* default */.Z, {
        info: info
      }, info.title)))
    })]
  });
};

/* harmony default export */ const Footer_FooterAccordion = (FooterAccordion);
;// CONCATENATED MODULE: ./components/layout/Footer/footerStyle.js
const footerStyle = theme => ({
  root: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#434343',
    fontFamily: 'Avenir',
    color: '#ffffff'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '40px 65px 0px',
    [theme.breakpoints.down('sm')]: {
      padding: '30px 30px 0px'
    }
  },
  gridContainer: {
    width: '100%',
    height: 'auto'
  },
  gridItem: {
    flexWrap: 'wrap',
    maxHeight: '160px'
  },
  gridTitle: {
    fontSize: '18px',
    fontWeight: '800',
    paddingBottom: '25px',
    fontFamily: 'Avenir',
    height: '55px',
    width: '100%'
  },
  gridItemContainer: {
    width: '100%',
    height: '120px',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  socialLinkContainer: {
    width: '100%',
    height: '55px',
    paddingBottom: '25px',
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
      paddingTop: '25px',
      paddingBottom: '0px'
    }
  },
  emailText: {
    fontWeight: 'bold',
    fontSize: '18px'
  },
  emailContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 0px 30px'
    }
  },
  divider: {
    backgroundColor: 'rgba(255, 255, 255, 0.6);',
    height: '1px',
    margin: '30px 0px 20px',
    [theme.breakpoints.down('sm')]: {
      margin: '30px 0px 15px'
    }
  },
  bottomGrid: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '30px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  termsLinkContainer: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '10px',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    }
  },
  termsLinkButtonContainer: {
    width: 'auto',
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  termsLinkText: {
    fontSize: '15px',
    fontWeight: '500',
    fontFamily: 'Avenir',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '5px'
    }
  },
  termsLinkButton: {
    padding: '0px 5px',
    textTransform: 'none',
    color: '#ffffff'
  },
  flagButton: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '10px',
    width: '150px'
  },
  flag: {
    display: 'flex',
    width: '40px',
    height: '26px'
  },
  flagText: {
    color: '#ffffff',
    fontFamily: 'Avenir',
    textTransform: 'none',
    paddingLeft: '15px',
    fontSize: '16px',
    fontWeight: '500'
  },
  accordionContainer: {
    position: 'absolute',
    width: '100vw',
    left: 'calc((100% - 100vw)/2)'
  },
  accordionDetails: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
    color: '#434343',
    fontFamily: 'Avenir'
  },
  accordionTitle: {
    backgroundColor: '#f7cd3d',
    fontSize: '16px',
    fontWeight: '500',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  hide: {
    display: 'none'
  }
});

/* harmony default export */ const Footer_footerStyle = (footerStyle);
// EXTERNAL MODULE: external "@material-ui/icons/Facebook"
var Facebook_ = __webpack_require__(2089);
var Facebook_default = /*#__PURE__*/__webpack_require__.n(Facebook_);
// EXTERNAL MODULE: external "@material-ui/icons/Instagram"
var Instagram_ = __webpack_require__(8162);
var Instagram_default = /*#__PURE__*/__webpack_require__.n(Instagram_);
// EXTERNAL MODULE: external "@material-ui/icons/YouTube"
var YouTube_ = __webpack_require__(7764);
var YouTube_default = /*#__PURE__*/__webpack_require__.n(YouTube_);
;// CONCATENATED MODULE: ./components/layout/Footer/socialMediaButtonStyle.js
const socialMediaButtonStyle = theme => ({
  iconButton: {
    width: '30px',
    height: '30px',
    marginLeft: '30px',
    padding: '5px',
    backgroundColor: 'white',
    '&,&:hover,&:focus': {
      backgroundColor: 'white'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0px',
      marginRight: '30px'
    }
  },
  icon: {
    width: '20px',
    height: '20px',
    color: '#434343'
  }
});

/* harmony default export */ const Footer_socialMediaButtonStyle = (socialMediaButtonStyle);
;// CONCATENATED MODULE: ./components/layout/Footer/SocialMediaButton.jsx









const SocialMediaButton_useStyles = (0,makeStyles/* default */.Z)(Footer_socialMediaButtonStyle);

const SocialMediaIcon = ({
  type
}) => {
  const classes = SocialMediaButton_useStyles();

  if (type === 'Facebook') {
    return /*#__PURE__*/jsx_runtime_.jsx((Facebook_default()), {
      className: classes.icon
    });
  } else if (type === 'Instagram') {
    return /*#__PURE__*/jsx_runtime_.jsx((Instagram_default()), {
      className: classes.icon
    });
  } else if (type === 'Youtube') {
    return /*#__PURE__*/jsx_runtime_.jsx((YouTube_default()), {
      className: classes.icon
    });
  } else {
    return /*#__PURE__*/jsx_runtime_.jsx((Facebook_default()), {
      className: classes.icon
    });
  }
};

const SocialMediaButton = ({
  info
}) => {
  const classes = SocialMediaButton_useStyles();
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: {
      pathname: info.link,
      query: router.query
    },
    passHref: true,
    children: /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
      className: classes.iconButton,
      children: /*#__PURE__*/jsx_runtime_.jsx(SocialMediaIcon, {
        type: info.type
      })
    }, info.type)
  });
};

/* harmony default export */ const Footer_SocialMediaButton = (SocialMediaButton);
;// CONCATENATED MODULE: ./components/layout/Footer/Footer.jsx


























const Footer_useStyles = (0,makeStyles/* default */.Z)(Footer_footerStyle);
const Footer_AccordionSummary = (0,withStyles/* default */.Z)({
  root: {
    minHeight: '50px',
    height: '50px',
    padding: '0px',
    '&$expanded': {
      minHeight: '50px',
      height: '50px'
    }
  },
  content: {
    margin: 0,
    padding: '0px',
    '&$expanded': {
      margin: 0
    }
  },
  expanded: {}
})(AccordionSummary/* default */.Z);
const Footer_AccordionDetails = (0,withStyles/* default */.Z)({
  root: {
    padding: '0px'
  }
})(AccordionDetails/* default */.Z);
const Footer_Accordion = (0,withStyles/* default */.Z)({
  root: {
    boxShadow: 'none',
    '&::before': {
      display: 'none'
    }
  },
  expanded: {
    '&$expanded': {
      margin: 0
    }
  }
})(Accordion/* default */.Z);
const date = new Date();

const Footer = ({
  content
}) => {
  var _REGION_INFO$region$t, _REGION_INFO$region$t2, _REGION_INFO$region$t3;

  const classes = Footer_useStyles();
  const router = (0,router_.useRouter)();
  const region = (0,external_react_redux_.useSelector)(state => state.region.code);
  const theme = (0,useTheme/* default */.Z)();
  const smDown = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('sm'), {
    noSsr: true
  });
  const {
    0: openRegionList,
    1: setOpenRegionList
  } = (0,external_react_.useState)(false);

  if ((0,helpers/* isEmpty */.x)(region)) {
    return null;
  }

  const handleRegionEdit = () => {
    setOpenRegionList(!openRegionList);

    if (!smDown) {
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight || document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      }, 300);
    }
  };

  const handleRegionListClose = () => {
    setOpenRegionList(false);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: classes.root,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
      maxWidth: "lg",
      className: classes.container,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Hidden/* default */.Z, {
        mdUp: true,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.emailContainer,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.emailText,
            children: content.email_input_title
          }), content.email_input_subtitle, /*#__PURE__*/jsx_runtime_.jsx(Footer_EmailInput, {
            action: content.email_input_action
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(Footer_FooterAccordion, {
          title: content.about,
          list: content.about_list
        }), /*#__PURE__*/jsx_runtime_.jsx(Footer_FooterAccordion, {
          title: content.customer_support,
          list: content.customer_support_list
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.socialLinkContainer,
          children: external_react_.Children.toArray(content.social_media_link.map(info => /*#__PURE__*/jsx_runtime_.jsx(Footer_SocialMediaButton, {
            info: info
          })))
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
        smDown: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
          container: true,
          className: classes.gridContainer,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
            item: true,
            className: classes.gridItem,
            md: 4,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.gridTitle,
              children: content.about
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.gridItemContainer,
              children: external_react_.Children.toArray(content.about_list.map(info => /*#__PURE__*/jsx_runtime_.jsx(FooterButton/* default */.Z, {
                info: info
              }, info.title)))
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
            item: true,
            className: classes.gridItem,
            md: 4,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.gridTitle,
              children: content.customer_support
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.gridItemContainer,
              children: external_react_.Children.toArray(content.customer_support_list.map(info => /*#__PURE__*/jsx_runtime_.jsx(FooterButton/* default */.Z, {
                info: info
              }, info.title)))
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
            item: true,
            className: classes.gridItem,
            md: 4,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.socialLinkContainer,
              children: external_react_.Children.toArray(content.social_media_link.map(info => /*#__PURE__*/jsx_runtime_.jsx(Footer_SocialMediaButton, {
                info: info
              })))
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.emailContainer,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.emailText,
                children: content.email_input_title
              }), content.email_input_subtitle, /*#__PURE__*/jsx_runtime_.jsx(Footer_EmailInput, {
                action: content.email_input_action
              })]
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Divider/* default */.Z, {
        variant: "middle",
        className: classes.divider
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.bottomGrid,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Button/* default */.Z, {
          className: classes.flagButton,
          onClick: handleRegionEdit,
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            className: classes.flag,
            src: (_REGION_INFO$region$t = navigation/* REGION_INFO */.w[region.toUpperCase()]) === null || _REGION_INFO$region$t === void 0 ? void 0 : _REGION_INFO$region$t.image,
            alt: (_REGION_INFO$region$t2 = navigation/* REGION_INFO */.w[region.toUpperCase()]) === null || _REGION_INFO$region$t2 === void 0 ? void 0 : _REGION_INFO$region$t2.code
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.flagText,
            children: (_REGION_INFO$region$t3 = navigation/* REGION_INFO */.w[region.toUpperCase()]) === null || _REGION_INFO$region$t3 === void 0 ? void 0 : _REGION_INFO$region$t3.country
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.termsLinkContainer,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: external_react_.Children.toArray(content.copyright_list.map((info, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: index !== 0 && '|'
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: {
                  pathname: info.link,
                  query: router.query
                },
                passHref: true,
                children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                  className: classes.termsLinkButton,
                  children: info.title
                })
              })]
            })))
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.termsLinkText,
            children: `© ${date.getFullYear()}. ${content.all_rights_reserved}`
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
        mdUp: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(components_RegionDialog, {
          open: openRegionList,
          handleClose: handleRegionListClose,
          content: content
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
        smDown: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.accordionContainer,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Footer_Accordion, {
              elevation: 0,
              expanded: openRegionList,
              children: [/*#__PURE__*/jsx_runtime_.jsx(Footer_AccordionSummary, {
                className: classes.hide
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Footer_AccordionDetails, {
                className: classes.accordionDetails,
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: classes.accordionTitle,
                  children: content.visit_your_location
                }), /*#__PURE__*/jsx_runtime_.jsx(components_RegionDialog, {
                  open: openRegionList,
                  handleClose: handleRegionListClose,
                  content: content
                })]
              })]
            })
          })
        })
      })]
    })
  });
};

/* harmony default export */ const Footer_Footer = (Footer);
;// CONCATENATED MODULE: ./components/layout/Footer/index.js

/* harmony default export */ const layout_Footer = (Footer_Footer);
;// CONCATENATED MODULE: ./components/layout/BaseLayout/baseLayoutStyle.js
const baseLayoutStyle = theme => ({
  container: {
    position: 'relative',
    padding: '155px 50px 0px 50px',
    [theme.breakpoints.down('sm')]: {
      padding: '145px 15px 0px 15px'
    }
  },
  extraPadding: {
    padding: '155px 15px 0px 15px'
  }
});

/* harmony default export */ const BaseLayout_baseLayoutStyle = (baseLayoutStyle);
;// CONCATENATED MODULE: ./components/layout/BaseLayout/BaseLayout.jsx









const BaseLayout_useStyles = (0,makeStyles/* default */.Z)(BaseLayout_baseLayoutStyle);

const BaseLayout = ({
  children,
  campaign,
  content
}) => {
  const classes = BaseLayout_useStyles();
  const {
    0: drawerOpen,
    1: setDrawerOpen
  } = (0,external_react_.useState)(false);
  const isCountdown = campaign.banner_type.includes('Countdown');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(layout_Header, {
      campaign: campaign,
      drawerOpen: drawerOpen,
      setDrawerOpen: setDrawerOpen,
      content: content
    }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
      maxWidth: "lg",
      className: `${classes.container} ${isCountdown ? classes.extraPadding : null}`,
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(layout_Footer, {
      content: content
    })]
  });
};

/* harmony default export */ const BaseLayout_BaseLayout = (BaseLayout);
;// CONCATENATED MODULE: ./components/layout/BaseLayout/index.js

/* harmony default export */ const layout_BaseLayout = (BaseLayout_BaseLayout);

/***/ }),

/***/ 8432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1120);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(282);
/* harmony import */ var _footerButtonStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7139);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);







const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(_footerButtonStyle__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z);

const FooterButton = ({
  info
}) => {
  const isExternalLink = info.link.substring(0, 5) === 'https' || info.link.substring(0, 4) === 'http';
  const isFunction = info.link.substring(0, 15) === 'javascript:void';
  const jsFunction = isFunction ? info.link.substring(16, info.link.length - 1) : '';
  const classes = useStyles();
  const region = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.region.code);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: classes.linkButtonContainer,
    children: [!isFunction && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__.default, {
      href: isExternalLink ? info.link : `/${region}${info.link}`,
      passHref: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        className: classes.linkButton,
        children: info.title
      })
    }), isFunction && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      className: classes.linkButton,
      onClick: () => eval(jsFunction),
      children: info.title
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterButton);

/***/ }),

/***/ 7139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const footerButtonStyle = theme => ({
  linkButtonContainer: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  linkButton: {
    textTransform: 'none',
    fontFamily: 'Avenir',
    width: 'auto',
    padding: '0px 3px',
    color: '#ffffff',
    justifyContent: 'flex-start',
    fontWeight: '500',
    fontSize: '16px',
    [theme.breakpoints.down('sm')]: {
      lineHeight: '35px'
    }
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerButtonStyle);

/***/ }),

/***/ 4737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "sI": () => (/* reexport */ black_triangle),
  "mp": () => (/* reexport */ path_long),
  "_o": () => (/* reexport */ path_short),
  "jK": () => (/* reexport */ play)
});

;// CONCATENATED MODULE: ./public/assets/images/general/path-short.svg
/* harmony default export */ const path_short = ({"src":"/_next/static/image/public/assets/images/general/path-short.6e1bd666bfcaee4671a3500a2b2ad532.svg","height":33,"width":16});
;// CONCATENATED MODULE: ./public/assets/images/general/path-long.svg
/* harmony default export */ const path_long = ({"src":"/_next/static/image/public/assets/images/general/path-long.0052f73044e7098f34e179d0ce482906.svg","height":31,"width":15});
;// CONCATENATED MODULE: ./public/assets/images/general/play.svg
/* harmony default export */ const play = ({"src":"/_next/static/image/public/assets/images/general/play.e4ab21f16fee197f1d293a009fde03db.svg","height":25,"width":25});
;// CONCATENATED MODULE: ./public/assets/images/general/black-triangle.svg
/* harmony default export */ const black_triangle = ({"src":"/_next/static/image/public/assets/images/general/black-triangle.0c8388c2dfe8495eb64f51cc23e10396.svg","height":13,"width":11});
;// CONCATENATED MODULE: ./config/images/general.js






/***/ }),

/***/ 2108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$y": () => (/* binding */ fetchBrandStoryPageData),
  "VJ": () => (/* binding */ fetchCampaignData),
  "q5": () => (/* binding */ fetchCartPageData),
  "q6": () => (/* binding */ fetchDfdPageData),
  "uO": () => (/* binding */ fetchFdnPageData),
  "Qs": () => (/* binding */ fetchFfgPageData),
  "ZC": () => (/* binding */ fetchHeaderFooterData),
  "pW": () => (/* binding */ fetchHomepageData),
  "l7": () => (/* binding */ fetchOrderStatusPageData),
  "jR": () => (/* binding */ fetchProductPageData),
  "Ok": () => (/* binding */ fetchSavingLivesPageData),
  "D2": () => (/* binding */ fetchSeoData)
});

// EXTERNAL MODULE: external "@prismicio/client"
var client_ = __webpack_require__(8009);
var client_default = /*#__PURE__*/__webpack_require__.n(client_);
;// CONCATENATED MODULE: ./config/prismic.js

const apiEndpoint = "https://furbo-prismic.cdn.prismic.io/api/v2";
const accessToken = "MC5ZUnlvUFJJQUFDZ0E4RVlF.JO-_ve-_ve-_vSrvv73vv73vv70eQO-_ve-_vRwG77-9QDHvv73vv71fAisCR3bvv702SO-_vQ7vv73vv70";
const client = client_default().client(apiEndpoint, {
  accessToken
});
;// CONCATENATED MODULE: ./src/prismicData.js

const fetchCampaignData = async language => {
  const data = await client.getSingle('campaign', {
    lang: language,
    fetchLinks: ['shop_button.shop_button_text', 'shop_button.center', 'video_button.watch_video_text', 'video_button.center', 'video_button.video_link']
  });
  return data.data;
};
const fetchSeoData = async language => {
  const data = await client.getSingle('seo_manager', {
    lang: language
  });
  return data.data;
};
const fetchHomepageData = async language => {
  const data = await client.getSingle('homepage_section', {
    lang: language,
    fetchLinks: ['grid_element.content', 'shop_button.shop_button_text', 'shop_button.center', 'learn_button.learn_button_text', 'learn_button.color', 'learn_button.link']
  });
  return data.data.body;
};
const fetchProductPageData = async language => {
  const data = await client.getSingle('product_page_section', {
    lang: language,
    fetchLinks: ['product_button.product_name', 'product_button.button_text', 'product_button.product_info', 'product_button.product_type', 'grid_element.content', 'shop_button.shop_button_text', 'shop_button.center', 'learn_button.learn_button_text', 'learn_button.color', 'learn_button.link']
  });
  return data.data;
};
const fetchFdnPageData = async language => {
  const data = await client.getSingle('fdn_page_section', {
    lang: language,
    fetchLinks: ['grid_element.content', 'video_button.watch_video_text', 'video_button.center', 'video_button.video_link', 'shop_button.shop_button_text', 'shop_button.center', 'learn_button.learn_button_text', 'learn_button.color', 'learn_button.link', 'sign_in_button.sign_in_button_text', 'sign_in_button.center']
  });
  return data.data;
};
const fetchFfgPageData = async language => {
  const data = await client.getSingle('ffg_page_section', {
    lang: language,
    fetchLinks: ['learn_button.learn_button_text', 'learn_button.color', 'learn_button.link', 'shop_button.shop_button_text', 'shop_button.center']
  });
  return data.data;
};
const fetchSavingLivesPageData = async language => {
  const data = await client.getSingle('saving_lives_page_section', {
    lang: language,
    fetchLinks: ['learn_button.learn_button_text', 'learn_button.color', 'learn_button.link', 'custom_button.text', 'custom_button.color', 'custom_button.link', 'custom_button.center', 'shop_button.shop_button_text', 'shop_button.center']
  });
  return data.data;
};
const fetchDfdPageData = async language => {
  const data = await client.getSingle('dfd_page_section', {
    lang: language,
    fetchLinks: ['grid_element.content', 'shop_button.shop_button_text', 'shop_button.center']
  });
  return data.data;
};
const fetchCartPageData = async language => {
  const data = await client.getSingle('cart_page', {
    lang: language
  });
  return data.data;
};
const fetchBrandStoryPageData = async language => {
  const data = await client.getSingle('brand_story_page', {
    lang: language
  });
  return data.data;
};
const fetchOrderStatusPageData = async language => {
  const data = await client.getSingle('order_status_page', {
    lang: language
  });
  return data.data;
};
const fetchHeaderFooterData = async language => {
  const data = await client.getSingle('header_footer', {
    lang: language
  });
  return data.data;
};

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;