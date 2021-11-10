"use strict";
(() => {
var exports = {};
exports.id = 623;
exports.ids = [623];
exports.modules = {

/***/ 7834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cart),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./components/layout/BaseLayout/index.js + 53 modules
var BaseLayout = __webpack_require__(550);
// EXTERNAL MODULE: ./components/SeoManager/index.js + 1 modules
var SeoManager = __webpack_require__(6211);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/Image/index.js + 1 modules
var Image = __webpack_require__(4592);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ButtonGroup/ButtonGroup.js
var ButtonGroup = __webpack_require__(4837);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(3832);
// EXTERNAL MODULE: external "@material-ui/icons/Add"
var Add_ = __webpack_require__(3762);
var Add_default = /*#__PURE__*/__webpack_require__.n(Add_);
// EXTERNAL MODULE: external "@material-ui/icons/Remove"
var Remove_ = __webpack_require__(608);
var Remove_default = /*#__PURE__*/__webpack_require__.n(Remove_);
;// CONCATENATED MODULE: ./config/checkout.js
const CHECKOUT_URL = (region, quantity) => {
  if (region === 'us') {
    return `https://furbo-dog-camera.myshopify.com/cart/21266488961:${quantity},34559072731181:1?channel=buy_button`;
  } else if (region === 'ca') {
    return `https://furbo-ca.myshopify.com/cart/32267984840:${quantity},31909699125331:1`;
  }

  return `https://furbo-dog-camera.myshopify.com/cart/21266488961:${quantity},34559072731181:1?channel=buy_button`;
};
// EXTERNAL MODULE: ./config/common.js
var common = __webpack_require__(7695);
;// CONCATENATED MODULE: ./components/cms/CartPage/cartPageStyle.js
const cartPageStyle = theme => ({
  yourShoppingCart: {
    textAlign: 'center',
    fontFamily: 'FuturaPT',
    padding: '20px 0px 20px',
    fontSize: '28px',
    backgroundColor: '#f0f0f0',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 0px 10px',
      fontSize: '22px'
    }
  },
  container: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px 0px 30px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      height: 'auto'
    }
  },
  imageContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: '320px',
      height: '320px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '280px',
      height: '280px'
    }
  },
  content: {
    maxWidth: '560px',
    height: '100%',
    flexDirection: 'column',
    padding: '0px 20px 0px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px'
    }
  },
  contentTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '20px 0px 20px'
  },
  contentTitleText: {
    padding: '25px 0px',
    textAlign: 'center',
    fontFamily: 'FuturaPT',
    fontSize: '32px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px'
    }
  },
  borderTop: {
    width: '120px',
    borderBottom: '2px solid black'
  },
  borderBottom: {
    width: '120px',
    borderTop: '2px solid black'
  },
  serviceContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'center',
    width: '100%',
    height: 'auto',
    padding: '0px 0px 20px'
  },
  service: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '160px',
    [theme.breakpoints.down('sm')]: {
      width: '140px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '120px'
    },
    '@media (max-width: 400px)': {
      width: '90px'
    }
  },
  serviceIcons: {
    width: '55px',
    height: '55px'
  },
  serviceText: {
    fontSize: '16px',
    textAlign: 'center',
    fontFamily: 'Avenir',
    padding: '0px 10px 0px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px'
    }
  },
  priceContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  priceText: {
    fontFamily: 'Avenir',
    fontSize: '32px',
    padding: '5px 0px 25px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px'
    }
  },
  origin: {
    marginRight: '10px'
  },
  remove: {
    textDecoration: 'line-through',
    color: '#888888',
    fontSize: '16px'
  },
  cents: {
    fontSize: '18px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '10px'
    }
  },
  save: {
    color: 'red',
    fontSize: '16px',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px'
    }
  },
  tax: {
    fontSize: '16px',
    textAlign: 'center'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: '16px',
    fontFamily: 'Avenir',
    color: '#968f8b'
  },
  icon: {
    widht: '20px',
    height: '20px'
  },
  quantityButtonGroup: {
    padding: '10px 0px 10px'
  },
  buttonMinus: {
    backgroundColor: '#e8e8e8',
    fontSize: '20px',
    border: 'none',
    padding: '10px 10px 10px 25px',
    borderTopLeftRadius: '25px',
    borderBottomLeftRadius: '25px',
    height: '40px',
    width: '40px',
    '&,&:hover,&:focus': {
      backgroundColor: '#e8e8e8'
    }
  },
  buttonQuantity: {
    backgroundColor: '#e8e8e8',
    fontSize: '20px',
    border: 'none',
    height: '40px',
    width: '80px',
    '&,&:hover,&:focus': {
      backgroundColor: '#e8e8e8'
    }
  },
  buttonAdd: {
    backgroundColor: '#e8e8e8',
    fontSize: '20px',
    border: 'none',
    padding: '10px 25px 10px 10px',
    borderTopRightRadius: '25px',
    borderBottomRightRadius: '25px',
    height: '40px',
    width: '40px',
    '&,&:hover,&:focus': {
      backgroundColor: '#e8e8e8'
    }
  },
  checkoutButton: {
    color: 'white',
    backgroundColor: '#f2775b',
    fontFamily: 'FuturaPT',
    textTransform: 'none',
    width: '180px',
    height: '50px',
    borderRadius: '35px',
    fontSize: '24px',
    padding: '25px',
    '&,&:hover,&:focus': {
      backgroundColor: '#f2775b'
    }
  }
});

/* harmony default export */ const CartPage_cartPageStyle = (cartPageStyle);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/cms/CartPage/CartPage.jsx
















const useStyles = (0,makeStyles/* default */.Z)(CartPage_cartPageStyle);

const CartPage = ({
  cartPage
}) => {
  const classes = useStyles();
  const price = +cartPage.product_info.variants[0].price;
  const originalPrice = +cartPage.product_info.variants[0].compare_at_price;
  const quantityLimit = +cartPage.quantity_limit;
  const {
    0: quantity,
    1: setQuantity
  } = (0,external_react_.useState)(1);
  const region = (0,external_react_redux_.useSelector)(state => state.region.code);
  (0,external_react_.useEffect)(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'view_cart',
      items: [{
        item_id: cartPage.product_info.variants[0].id,
        item_name: cartPage.product_info.title,
        price: price,
        quantity: quantity
      }],
      currency: common/* CURRENCY */.wA[region.toUpperCase()],
      value: price
    });
  }, [quantity]);

  const handleIncrement = () => {
    if (quantity < quantityLimit) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.yourShoppingCart,
      children: cartPage.your_shopping_cart
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
      className: classes.container,
      maxWidth: "md",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.imageContainer,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: cartPage.product_image.url,
          layout: "fill",
          alt: "shopping-cart-kv"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.content,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.contentTitle,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.borderTop
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.contentTitleText,
            children: cartPage.title
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.borderBottom
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.serviceContainer,
          children: external_react_.Children.toArray(cartPage.product_detail.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.service,
            children: [/*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
              className: classes.serviceIcons,
              alt: item.icon.alt,
              src: item.icon.url,
              type: "image/svg+xml"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.serviceText,
              children: item.detail
            })]
          })))
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.priceContainer,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.priceText,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: classes.origin,
              children: [`$${price.toFixed(0)}`, /*#__PURE__*/jsx_runtime_.jsx("sup", {
                className: classes.cents,
                children: `.${(price % 1).toFixed(2).substring(2)}`
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: classes.remove,
              children: [`$${originalPrice.toFixed(0)}`, /*#__PURE__*/jsx_runtime_.jsx("sup", {
                className: classes.cents,
                style: {
                  fontSize: '10px'
                },
                children: `.${(originalPrice % 1).toFixed(2).substring(2)}`
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.save,
              children: `${cartPage.save} $${(originalPrice - price).toFixed(0)}(${((1 - price / originalPrice) * 100).toFixed(0)}%)`
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.tax,
              children: cartPage.excluding_tax
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.buttonContainer,
          children: [cartPage.quantity, /*#__PURE__*/(0,jsx_runtime_.jsxs)(ButtonGroup/* default */.Z, {
            className: classes.quantityButtonGroup,
            children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
              className: classes.buttonMinus,
              onClick: handleDecrement,
              children: /*#__PURE__*/jsx_runtime_.jsx((Remove_default()), {
                className: classes.icon
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
              className: classes.buttonQuantity,
              children: quantity
            }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
              className: classes.buttonAdd,
              onClick: handleIncrement,
              children: /*#__PURE__*/jsx_runtime_.jsx((Add_default()), {
                className: classes.icon
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
            href: CHECKOUT_URL(region, quantity),
            className: classes.checkoutButton,
            children: cartPage.checkout
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ const CartPage_CartPage = (CartPage);
;// CONCATENATED MODULE: ./components/cms/CartPage/index.js

/* harmony default export */ const cms_CartPage = (CartPage_CartPage);
// EXTERNAL MODULE: ./redux/configureStore.js
var configureStore = __webpack_require__(7290);
// EXTERNAL MODULE: ./redux/features/region/regionSlice.js
var regionSlice = __webpack_require__(9520);
// EXTERNAL MODULE: ./src/prismicData.js + 1 modules
var prismicData = __webpack_require__(2108);
// EXTERNAL MODULE: ./config/navigation.js
var navigation = __webpack_require__(6780);
;// CONCATENATED MODULE: ./pages/ca/pages/cart/index.js











const Cart = ({
  campaign,
  seo,
  content,
  cartPage
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: {
      backgroundColor: 'white'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(SeoManager/* default */.Z, {
      seo: seo
    }), /*#__PURE__*/jsx_runtime_.jsx(BaseLayout/* default */.Z, {
      campaign: campaign,
      content: content,
      children: /*#__PURE__*/jsx_runtime_.jsx(cms_CartPage, {
        cartPage: cartPage
      })
    })]
  });
};

const getStaticProps = configureStore/* wrapper.getStaticProps */.Y.getStaticProps(store => async () => {
  const campaignData = await (0,prismicData/* fetchCampaignData */.VJ)('en-ca');
  const contentData = await (0,prismicData/* fetchHeaderFooterData */.ZC)('en-ca');
  const cartPageData = await (0,prismicData/* fetchCartPageData */.q5)('en-ca');
  const seoData = await (0,prismicData/* fetchSeoData */.D2)('en-ca');
  const cartSeo = seoData.list.find(item => item.component_key === 'CART');
  store.dispatch((0,regionSlice/* updateRegion */.IS)(navigation/* REGION_INFO.CA */.w.CA));
  return {
    props: {
      campaign: campaignData,
      seo: cartSeo,
      content: contentData,
      cartPage: cartPageData
    },
    revalidate: common/* REVALIDATE_TIME */.Oi
  };
});
/* harmony default export */ const cart = (Cart);

/***/ }),

/***/ 3762:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ 8777:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ 5887:
/***/ ((module) => {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ 2089:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Facebook");

/***/ }),

/***/ 8162:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Instagram");

/***/ }),

/***/ 608:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Remove");

/***/ }),

/***/ 7764:
/***/ ((module) => {

module.exports = require("@material-ui/icons/YouTube");

/***/ }),

/***/ 4047:
/***/ ((module) => {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ 9137:
/***/ ((module) => {

module.exports = require("@material-ui/system");

/***/ }),

/***/ 2958:
/***/ ((module) => {

module.exports = require("@material-ui/utils");

/***/ }),

/***/ 8009:
/***/ ((module) => {

module.exports = require("@prismicio/client");

/***/ }),

/***/ 6139:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3536:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 9638:
/***/ ((module) => {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ 7051:
/***/ ((module) => {

module.exports = require("html-react-parser");

/***/ }),

/***/ 2744:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 3437:
/***/ ((module) => {

module.exports = require("prismic-reactjs");

/***/ }),

/***/ 4229:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2268:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 2242:
/***/ ((module) => {

module.exports = require("react-responsive-carousel");

/***/ }),

/***/ 3810:
/***/ ((module) => {

module.exports = require("react-transition-group");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [523,248,837,520,356,626], () => (__webpack_exec__(7834)));
module.exports = __webpack_exports__;

})();