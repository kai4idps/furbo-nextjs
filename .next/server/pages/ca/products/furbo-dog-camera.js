"use strict";
(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 9144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ furbo_dog_camera),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: external "prismic-reactjs"
var external_prismic_reactjs_ = __webpack_require__(3437);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Hidden/Hidden.js + 3 modules
var Hidden = __webpack_require__(1543);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(9895);
// EXTERNAL MODULE: ./components/VisibleSensorAnimation/index.js + 1 modules
var VisibleSensorAnimation = __webpack_require__(8516);
// EXTERNAL MODULE: ./components/Image/index.js + 1 modules
var Image = __webpack_require__(4592);
// EXTERNAL MODULE: ./components/cms/elements/ShopButton/index.js + 2 modules
var ShopButton = __webpack_require__(2440);
// EXTERNAL MODULE: ./config/common.js
var common = __webpack_require__(7695);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: external "@material-ui/icons/PlayCircleOutline"
var PlayCircleOutline_ = __webpack_require__(4889);
var PlayCircleOutline_default = /*#__PURE__*/__webpack_require__.n(PlayCircleOutline_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/Video/index.js + 1 modules
var Video = __webpack_require__(7971);
// EXTERNAL MODULE: external "react-responsive-carousel"
var external_react_responsive_carousel_ = __webpack_require__(2242);
// EXTERNAL MODULE: ./config/images/general.js + 4 modules
var general = __webpack_require__(4737);
;// CONCATENATED MODULE: ./components/cms/ProductKeyVisual/productSlideStyle.js
const productSlideStyle = theme => ({
  root: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  center: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  indicatorContainerLeft: {
    backgroundColor: 'white',
    width: 'auto',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'column'
  },
  indicatorContainerRight: {
    backgroundColor: 'white',
    width: 'auto',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column'
  },
  indicatorContainer: {
    backgroundColor: 'transparent',
    width: '100%' // height: '100%',

  },
  carouselContainer: {
    backgroundColor: 'white',
    top: '100px',
    width: '100%',
    height: 'auto'
  },
  button: {
    padding: '0px'
  },
  buttonContainer: {
    backgroundColor: 'white',
    margin: '10px',
    width: '62px',
    height: '62px'
  },
  buttonIcon: {
    width: '60px',
    height: '60px'
  },
  slide: {
    backgroundColor: 'white',
    padding: '30px',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      height: '100%',
      width: '100%'
    }
  },
  slideImage: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%'
  },
  slideVideo: {
    backgroundColor: 'white',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: '100%',
    height: '100%'
  },
  arrow: {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
    backgroundColor: '#f7cd3d',
    padding: '0px',
    color: '#fff',
    '&,&:hover,&:focus': {
      backgroundColor: '#f7cd3d'
    }
  }
});

/* harmony default export */ const ProductKeyVisual_productSlideStyle = (productSlideStyle);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/cms/ProductKeyVisual/ProductSlide.jsx
















const useStyles = (0,makeStyles/* default */.Z)(ProductKeyVisual_productSlideStyle);

const RenderIndicator = ({
  item,
  index,
  changeSlideFunc,
  currentSlide
}) => {
  const classes = useStyles();
  return /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
    role: "button",
    onClick: () => changeSlideFunc(index),
    onKeyDown: () => changeSlideFunc(index),
    tabIndex: index,
    className: classes.button,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.buttonContainer,
      style: {
        border: index === currentSlide ? '1px solid black' : '1px solid #999999'
      },
      children: [item.slide.kind === 'image' && /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
        className: classes.buttonIcon,
        alt: item.slide.name,
        src: item.slide.url
      }), item.slide.kind !== 'image' && /*#__PURE__*/jsx_runtime_.jsx((PlayCircleOutline_default()), {
        className: classes.buttonIcon,
        style: {
          color: '#999999',
          backgroundColor: 'black'
        }
      })]
    })
  }, item.slide.name);
};

const ProductSlide = props => {
  const {
    slides
  } = props;
  const classes = useStyles();
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = (0,external_react_.useState)(0);

  const changeSlide = index => {
    setCurrentSlide(index);
  };

  const updateCurrentSlide = index => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
      container: true,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
        smDown: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
          item: true,
          xl: 4,
          lg: 4,
          md: 4,
          sm: 12,
          xs: 12,
          className: classes.center,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.indicatorContainerLeft,
            children: external_react_default().Children.toArray(slides.map((item, index) => {
              if (index >= 5) {
                return null;
              }

              return /*#__PURE__*/jsx_runtime_.jsx(RenderIndicator, {
                item: item,
                index: index,
                changeSlideFunc: changeSlide,
                currentSlide: currentSlide
              });
            }))
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.indicatorContainerRight,
            children: external_react_default().Children.toArray(slides.map((item, index) => {
              if (index < 5) {
                return null;
              }

              return /*#__PURE__*/jsx_runtime_.jsx(RenderIndicator, {
                item: item,
                index: index,
                changeSlideFunc: changeSlide,
                currentSlide: currentSlide
              });
            }))
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
        item: true,
        xl: 8,
        lg: 8,
        md: 8,
        sm: 12,
        xs: 12,
        className: classes.center,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.carouselContainer,
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_responsive_carousel_.Carousel, {
            swipeable: true,
            showArrows: false,
            showThumbs: false,
            dynamicHeight: false,
            showIndicators: false,
            infiniteLoop: false,
            autoplay: false,
            selectedItem: currentSlide,
            onChange: updateCurrentSlide,
            children: external_react_default().Children.toArray(slides.map(item => {
              return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: classes.slide,
                children: [item.slide.kind === 'image' && /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
                  className: classes.slideImage,
                  alt: item.slide.name,
                  src: item.slide.url
                }), item.slide.kind !== 'image' && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                    className: classes.slideImage,
                    alt: item.slide.name,
                    src: general/* PLAY_ICON_SVG */.jK
                  }), /*#__PURE__*/jsx_runtime_.jsx(Video/* default */.Z, {
                    className: classes.slideVideo,
                    src: item.slide.url,
                    title: item.slide.name,
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    playsInline: true
                  })]
                })]
              });
            }))
          })
        })
      })]
    })
  });
};

/* harmony default export */ const ProductKeyVisual_ProductSlide = (ProductSlide);
// EXTERNAL MODULE: ./src/helpers.js
var helpers = __webpack_require__(1710);
;// CONCATENATED MODULE: ./components/cms/ProductKeyVisual/productKeyVisualStyle.js
const productKeyVisualStyle = theme => ({
  root: {
    height: 'auto',
    width: '100%',
    marginBottom: '10px'
  },
  leftGrid: {
    backgroundColor: 'transparent'
  },
  rightGrid: {
    backgroundColor: 'transparent',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      padding: '0px'
    }
  },
  buttonPaper: {
    width: '100%',
    display: 'flex',
    borderRadius: '10px',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      height: '100px'
    }
  },
  productImage: {
    width: '100px',
    height: '100px',
    borderRadius: '10px'
  },
  buttonText: {
    fontFamily: 'FuturaPT',
    flexGrow: 1,
    paddingLeft: '10px',
    fontSize: '22px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      width: 'calc(100% - 100px - 125px)'
    },
    '@media (max-width: 350px)': {
      fontSize: '16px'
    }
  },
  price: {
    fontFamily: 'FuturaPT',
    fontSize: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px'
    },
    '@media (max-width: 350px)': {
      fontSize: '12px'
    }
  },
  originalPrice: {
    fontFamily: 'Avenir',
    fontSize: '20px',
    textDecoration: 'line-through',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px'
    },
    '@media (max-width: 350px)': {
      fontSize: '12px'
    }
  },
  buttonContainer: {
    display: 'flex',
    alignSelf: 'center',
    paddingRight: '20px',
    [theme.breakpoints.down('sm')]: {
      paddingRight: '10px'
    }
  },
  shopButton: {
    color: '#434343',
    width: '115px',
    height: '40px',
    backgroundColor: '#f7cd3d',
    borderRadius: '100px',
    '&,&:hover,&:focus': {
      backgroundColor: '#f7cd3d',
      height: '40px'
    },
    '@media (max-width: 350px)': {
      fontSize: '16px',
      width: '85px',
      height: '30px',
      '&,&:hover,&:focus': {
        height: '30px'
      }
    }
  },
  title: {
    color: '#434343'
  },
  subtitle: {
    paddingTop: '20px',
    color: '#434343'
  },
  colorText: {
    paddingBottom: '20px'
  }
});

/* harmony default export */ const ProductKeyVisual_productKeyVisualStyle = (productKeyVisualStyle);
;// CONCATENATED MODULE: ./components/cms/ProductKeyVisual/ProductKeyVisual.jsx

















const ProductKeyVisual_useStyles = (0,makeStyles/* default */.Z)(ProductKeyVisual_productKeyVisualStyle);

const RenderButton = ({
  item
}) => {
  const classes = ProductKeyVisual_useStyles();
  const region = (0,external_react_redux_.useSelector)(state => state.region.code);

  const addToCart = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'add_to_cart',
      items: [{
        item_id: item.product_info.variants[0].id,
        item_name: item.product_info.title,
        price: item.product_info.variants[0].price,
        quantity: 1
      }],
      currency: common/* CURRENCY */.wA[region.toUpperCase()],
      value: item.product_info.variants[0].price
    });
  };

  (0,external_react_.useEffect)(() => {
    if (!(0,helpers/* isEmpty */.x)(region)) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'view_product',
        product_id: item.product_info.variants[0].id,
        product_name: item.product_info.title,
        currency: common/* CURRENCY */.wA[region.toUpperCase()],
        value: item.product_info.variants[0].price
      });
    }
  }, [region, item]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Paper/* default */.Z, {
    className: classes.buttonPaper,
    elevation: 3,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
      className: classes.productImage,
      alt: item.product_info.title,
      src: item.product_info.image.src
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.buttonText,
      children: [item.product_name, /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: classes.price,
          children: ["$", item.product_info.variants[0].price]
        }), '   ', /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: classes.originalPrice,
          children: ["$", item.product_info.variants[0].compare_at_price]
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.buttonContainer,
      children: item.product_type === 'Furbo Dog Camera' && /*#__PURE__*/jsx_runtime_.jsx(ShopButton/* default */.Z, {
        className: classes.shopButton,
        shopButtonText: item.button_text,
        center: true,
        onClick: addToCart
      })
    })]
  });
};

const ProductKeyVisual = ({
  productPage
}) => {
  const classes = ProductKeyVisual_useStyles();
  return /*#__PURE__*/jsx_runtime_.jsx(VisibleSensorAnimation/* default */.Z, {
    animation: "grow",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.root,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
        container: true,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          className: classes.leftGrid,
          item: true,
          xl: 7,
          lg: 7,
          md: 7,
          sm: 12,
          xs: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx(ProductKeyVisual_ProductSlide, {
            slides: productPage.product_slides
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
          className: classes.rightGrid,
          item: true,
          xl: 5,
          lg: 5,
          md: 5,
          sm: 12,
          xs: 12,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Hidden/* default */.Z, {
            smDown: true,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.title,
              children: external_prismic_reactjs_.RichText.render(productPage.title)
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.subtitle,
              children: external_prismic_reactjs_.RichText.render(productPage.subtitle)
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.colorText,
              style: {
                color: `${productPage.text_color}`
              },
              children: external_prismic_reactjs_.RichText.render(productPage.color_text)
            })]
          }), external_react_default().Children.toArray(productPage.product_button.map(item => /*#__PURE__*/jsx_runtime_.jsx(RenderButton, {
            item: item.button.data
          })))]
        })]
      })
    })
  });
};

/* harmony default export */ const ProductKeyVisual_ProductKeyVisual = (ProductKeyVisual);
;// CONCATENATED MODULE: ./components/cms/ProductKeyVisual/index.js

/* harmony default export */ const cms_ProductKeyVisual = (ProductKeyVisual_ProductKeyVisual);
// EXTERNAL MODULE: ./components/cms/slices/KeyVisualSlice/index.js + 2 modules
var KeyVisualSlice = __webpack_require__(7441);
// EXTERNAL MODULE: ./components/cms/slices/CardsCarouselSlice/index.js + 2 modules
var CardsCarouselSlice = __webpack_require__(9557);
// EXTERNAL MODULE: ./components/cms/slices/SmartAlertsSlice/index.js + 2 modules
var SmartAlertsSlice = __webpack_require__(1301);
// EXTERNAL MODULE: ./components/cms/slices/FeatureBlockSlice/index.js + 2 modules
var FeatureBlockSlice = __webpack_require__(1384);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(2543);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(5875);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AccordionSummary/AccordionSummary.js
var AccordionSummary = __webpack_require__(743);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AccordionDetails/AccordionDetails.js
var AccordionDetails = __webpack_require__(1201);
// EXTERNAL MODULE: external "@material-ui/icons/Add"
var Add_ = __webpack_require__(3762);
var Add_default = /*#__PURE__*/__webpack_require__.n(Add_);
// EXTERNAL MODULE: external "@material-ui/icons/Remove"
var Remove_ = __webpack_require__(608);
var Remove_default = /*#__PURE__*/__webpack_require__.n(Remove_);
;// CONCATENATED MODULE: ./components/cms/slices/AccordionFeatureListSlice/accordionFeatureListSliceStyle.js
const accordionFeatureListSliceStyle = theme => ({
  root: {
    height: 'auto',
    width: '100%'
  },
  header: {
    backgroundColor: '#f7cd3d',
    height: '70px',
    fontFamily: 'FuturaPT',
    fontSize: '32px',
    borderTop: '1px solid white',
    borderBottom: '1px solid white',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px'
    }
  },
  gridLeft: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 20px 0px',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 5px 0px'
    },
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center'
    }
  },
  gridRight: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 20px 0px',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 5px 0px'
    }
  },
  accordionItem: {
    width: '340px',
    backgroundColor: 'transparent',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center'
    }
  },
  itemHeader: {
    backgroundColor: 'transparent',
    height: '40px',
    lineHeight: '40px',
    fontFamily: 'Avenir',
    color: '#434343',
    fontSize: '18px',
    fontWeight: 800,
    borderBottom: '1px solid #c3c3c3',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      fontWeight: 500
    }
  },
  itemImage: {
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10px'
  },
  itemTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemContent: {
    fontSize: '15px',
    fontFamily: 'Avenir',
    color: '#434343',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '65px'
  },
  expandIcon: {
    color: '#f7cd3d'
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

/* harmony default export */ const AccordionFeatureListSlice_accordionFeatureListSliceStyle = (accordionFeatureListSliceStyle);
;// CONCATENATED MODULE: ./components/cms/slices/AccordionFeatureListSlice/AccordionFeatureListSlice.jsx

















const AccordionFeatureListSlice_useStyles = (0,makeStyles/* default */.Z)(AccordionFeatureListSlice_accordionFeatureListSliceStyle);
const AccordionSummaryCenter = (0,withStyles/* default */.Z)({
  content: {
    textAlign: 'center',
    flexGrow: 0
  }
})(AccordionSummary/* default */.Z);
const AccordionFeatureListSlice_AccordionSummary = (0,withStyles/* default */.Z)({
  root: {
    minHeight: '50px',
    '&$expanded': {
      minHeight: '50px'
    }
  },
  content: {
    margin: 0,
    '&$expanded': {
      margin: 0
    }
  },
  expandIcon: {
    pRemoveing: 3
  },
  expanded: {}
})(AccordionSummary/* default */.Z);
const AccordionFeatureListSlice_AccordionDetails = (0,withStyles/* default */.Z)({
  root: {
    padding: '10px 0px 0px 0px'
  }
})(AccordionDetails/* default */.Z);
const AccordionFeatureListSlice_Accordion = (0,withStyles/* default */.Z)({
  expanded: {
    '&$expanded': {
      margin: 0
    }
  }
})(Accordion/* default */.Z);

const FeatureItem = props => {
  const classes = AccordionFeatureListSlice_useStyles();
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);
  const {
    item
  } = props;

  const handleChange = () => {
    setOpen(!open);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(AccordionFeatureListSlice_Accordion, {
    elevation: 0,
    className: classes.accordionItem,
    onChange: handleChange,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(AccordionFeatureListSlice_AccordionSummary, {
      className: classes.itemHeader,
      "aria-controls": item.feature_name,
      id: item.feature_name,
      expandIcon: open ? /*#__PURE__*/jsx_runtime_.jsx((Remove_default()), {
        className: classes.expandIcon
      }) : /*#__PURE__*/jsx_runtime_.jsx((Add_default()), {
        className: classes.expandIcon
      }),
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.itemImage,
        children: /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
          className: classes.center,
          src: item.feature_icon.url,
          alt: item.feature_icon.alt,
          type: "image/svg+xml"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.itemTitle,
        children: item.feature_name
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(AccordionFeatureListSlice_AccordionDetails, {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.itemContent,
        children: external_prismic_reactjs_.RichText.render(item.feature_content)
      })
    })]
  });
};

const FeatureGrid = props => {
  const {
    content
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: external_react_default().Children.toArray(content.map(item => /*#__PURE__*/jsx_runtime_.jsx(FeatureItem, {
      item: item
    })))
  });
};

const AccordionFeatureListSlice = props => {
  const classes = AccordionFeatureListSlice_useStyles();
  const {
    title,
    content
  } = props;
  const {
    0: leftGridContent,
    1: setLeftGridContent
  } = (0,external_react_.useState)();
  const {
    0: rightGridContent,
    1: setRightGridContent
  } = (0,external_react_.useState)();
  (0,external_react_.useEffect)(() => {
    const left = content.filter(item => item.grid_position === 'Left');
    const right = content.filter(item => item.grid_position === 'Right');
    setLeftGridContent(left);
    setRightGridContent(right);
  }, [content]);

  if ((0,helpers/* isEmpty */.x)(leftGridContent) && (0,helpers/* isEmpty */.x)(rightGridContent)) {
    return null;
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(AccordionFeatureListSlice_Accordion, {
      expanded: true,
      elevation: 0,
      children: [/*#__PURE__*/jsx_runtime_.jsx(AccordionSummaryCenter, {
        className: classes.header,
        "aria-controls": "key-features-header",
        id: "key-features-header",
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx(AccordionFeatureListSlice_AccordionDetails, {
        children: /*#__PURE__*/jsx_runtime_.jsx(VisibleSensorAnimation/* default */.Z, {
          animation: "grow",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
            container: true,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
              className: classes.gridLeft,
              item: true,
              xl: 6,
              lg: 6,
              md: 6,
              sm: 6,
              xs: 12,
              children: [/*#__PURE__*/jsx_runtime_.jsx(FeatureGrid, {
                content: leftGridContent
              }), /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
                smUp: true,
                children: /*#__PURE__*/jsx_runtime_.jsx(FeatureGrid, {
                  content: rightGridContent
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
              xsDown: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
                className: classes.gridRight,
                item: true,
                xl: 6,
                lg: 6,
                md: 6,
                sm: 6,
                xs: 12,
                children: /*#__PURE__*/jsx_runtime_.jsx(FeatureGrid, {
                  content: rightGridContent
                })
              })
            })]
          })
        })
      })]
    })
  });
};

/* harmony default export */ const AccordionFeatureListSlice_AccordionFeatureListSlice = (AccordionFeatureListSlice);
;// CONCATENATED MODULE: ./components/cms/slices/AccordionFeatureListSlice/index.js

/* harmony default export */ const slices_AccordionFeatureListSlice = (AccordionFeatureListSlice_AccordionFeatureListSlice);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(8920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(3457);
// EXTERNAL MODULE: external "@material-ui/icons/ExpandMore"
var ExpandMore_ = __webpack_require__(5887);
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);
;// CONCATENATED MODULE: ./components/cms/slices/AccordionKeyVisualSlice/accordionKeyVisualSliceStyle.js
const accordionKeyVisualSliceStyle = theme => ({
  root: {
    height: 'auto',
    width: '100%'
  },
  header: {
    backgroundColor: '#f7cd3d',
    height: '70px',
    fontFamily: 'FuturaPT',
    fontSize: '32px',
    borderTop: '1px solid white',
    borderBottom: '1px solid white',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px'
    }
  },
  content: {
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
      minHeight: '600px'
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '450px'
    }
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingLeft: '50px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '10px',
      textAlign: 'center'
    }
  },
  subtitle: {
    width: '100%',
    padding: '10px 0px',
    color: '#434343',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  textContent: {
    color: '#434343',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  }
});

/* harmony default export */ const AccordionKeyVisualSlice_accordionKeyVisualSliceStyle = (accordionKeyVisualSliceStyle);
;// CONCATENATED MODULE: ./components/cms/slices/AccordionKeyVisualSlice/AccordionKeyVisualSlice.jsx












const AccordionKeyVisualSlice_useStyles = (0,makeStyles/* default */.Z)(AccordionKeyVisualSlice_accordionKeyVisualSliceStyle);
const AccordionKeyVisualSlice_AccordionSummaryCenter = (0,withStyles/* default */.Z)({
  content: {
    textAlign: 'center',
    flexGrow: 0
  }
})(AccordionSummary/* default */.Z);
const AccordionKeyVisualSlice_AccordionDetails = (0,withStyles/* default */.Z)({
  root: {
    padding: '10px 0px 0px 0px'
  }
})(AccordionDetails/* default */.Z);
const AccordionKeyVisualSlice_Accordion = (0,withStyles/* default */.Z)({
  expanded: {
    '&$expanded': {
      margin: 0
    }
  }
})(Accordion/* default */.Z);

const AccordionKeyVisualSlice = props => {
  const classes = AccordionKeyVisualSlice_useStyles();
  const {
    expand,
    title,
    subtitle,
    textContent,
    backgroundImageDesktop,
    backgroundImageMobile
  } = props;
  const theme = (0,useTheme/* default */.Z)();
  const smDown = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('sm'));
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(expand);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(AccordionKeyVisualSlice_Accordion, {
      elevation: 0,
      expanded: open,
      onChange: () => setOpen(!open),
      children: [/*#__PURE__*/jsx_runtime_.jsx(AccordionKeyVisualSlice_AccordionSummaryCenter, {
        className: classes.header,
        "aria-controls": title,
        id: title,
        expandIcon: /*#__PURE__*/jsx_runtime_.jsx((ExpandMore_default()), {
          style: {
            color: 'white'
          }
        }),
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx(AccordionKeyVisualSlice_AccordionDetails, {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.content,
          style: {
            backgroundImage: smDown ? `url(${backgroundImageMobile.url})` : `url(${backgroundImageDesktop.url})`,
            height: smDown ? 'auto' : backgroundImageDesktop.dimensions.height
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
            container: true,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
              item: true,
              xl: 5,
              lg: 5,
              md: 5,
              className: classes.grid,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.subtitle,
                children: external_prismic_reactjs_.RichText.render(subtitle)
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.textContent,
                children: external_prismic_reactjs_.RichText.render(textContent)
              })]
            })
          })
        })
      })]
    })
  });
};

/* harmony default export */ const AccordionKeyVisualSlice_AccordionKeyVisualSlice = (AccordionKeyVisualSlice);
;// CONCATENATED MODULE: ./components/cms/slices/AccordionKeyVisualSlice/index.js

/* harmony default export */ const slices_AccordionKeyVisualSlice = (AccordionKeyVisualSlice_AccordionKeyVisualSlice);
;// CONCATENATED MODULE: ./components/cms/slices/AccordionListSlice/accordionListSliceStyle.js
const accordionListSliceStyle = theme => ({
  root: {
    height: 'auto',
    width: '100%'
  },
  header: {
    backgroundColor: '#f7cd3d',
    height: '70px',
    fontFamily: 'FuturaPT',
    fontSize: '32px',
    borderTop: '1px solid white',
    borderBottom: '1px solid white',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px'
    }
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 20px 0px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 5px 0px'
    }
  },
  accordionItem: {
    width: '800px',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center'
    }
  },
  itemHeader: {
    height: '40px',
    lineHeight: '40px',
    borderBottom: '1px solid #e2e2e2',
    color: '#434343',
    [theme.breakpoints.down('xs')]: {
      lineHeight: '20px'
    }
  },
  itemContent: {
    fontSize: '15px',
    lineHeight: 'auto',
    color: '#434343',
    padding: '5px 30px 10px 20px',
    fontFamily: 'Avenir'
  }
});

/* harmony default export */ const AccordionListSlice_accordionListSliceStyle = (accordionListSliceStyle);
;// CONCATENATED MODULE: ./components/cms/slices/AccordionListSlice/AccordionListSlice.jsx












const AccordionListSlice_useStyles = (0,makeStyles/* default */.Z)(AccordionListSlice_accordionListSliceStyle);
const AccordionListSlice_AccordionSummaryCenter = (0,withStyles/* default */.Z)({
  content: {
    textAlign: 'center',
    flexGrow: 0
  }
})(AccordionSummary/* default */.Z);
const AccordionListSlice_AccordionSummary = (0,withStyles/* default */.Z)({
  root: {
    minHeight: '60px',
    padding: '0px 5px',
    '&$expanded': {
      minHeight: '60px'
    }
  },
  content: {
    margin: 0,
    '&$expanded': {
      margin: 0
    }
  },
  expanded: {}
})(AccordionSummary/* default */.Z);
const AccordionListSlice_AccordionDetails = (0,withStyles/* default */.Z)({
  root: {
    padding: '10px 0px 0px 0px'
  }
})(AccordionDetails/* default */.Z);
const AccordionListSlice_Accordion = (0,withStyles/* default */.Z)({
  expanded: {
    '&$expanded': {
      margin: 0
    }
  }
})(Accordion/* default */.Z);

const CustomAccordion = ({
  item
}) => {
  const classes = AccordionListSlice_useStyles();
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);

  const handleChange = () => {
    setOpen(prev => !prev);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(AccordionListSlice_Accordion, {
    elevation: 0,
    className: classes.accordionItem,
    onChange: handleChange,
    children: [/*#__PURE__*/jsx_runtime_.jsx(AccordionListSlice_AccordionSummary, {
      className: classes.itemHeader,
      expandIcon: open === true ? /*#__PURE__*/jsx_runtime_.jsx((Remove_default()), {
        style: {
          color: '#f7cd3d'
        }
      }) : /*#__PURE__*/jsx_runtime_.jsx((Add_default()), {
        style: {
          color: '#f7cd3d'
        }
      }),
      children: external_prismic_reactjs_.RichText.render(item.content_title)
    }), /*#__PURE__*/jsx_runtime_.jsx(AccordionListSlice_AccordionDetails, {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.itemContent,
        children: external_prismic_reactjs_.RichText.render(item.content_text)
      })
    })]
  });
};

const AccordionListSlice = props => {
  const classes = AccordionListSlice_useStyles();
  const {
    expand,
    title,
    content
  } = props;
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(expand);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(AccordionListSlice_Accordion, {
      elevation: 0,
      expanded: open,
      onChange: () => setOpen(!open),
      children: [/*#__PURE__*/jsx_runtime_.jsx(AccordionListSlice_AccordionSummaryCenter, {
        className: classes.header,
        "aria-controls": title,
        id: title,
        expandIcon: /*#__PURE__*/jsx_runtime_.jsx((ExpandMore_default()), {
          style: {
            color: 'white'
          }
        }),
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx(AccordionListSlice_AccordionDetails, {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.content,
          children: external_react_default().Children.toArray(content.map(item => /*#__PURE__*/jsx_runtime_.jsx(CustomAccordion, {
            item: item
          })))
        })
      })]
    })
  });
};

/* harmony default export */ const AccordionListSlice_AccordionListSlice = (AccordionListSlice);
;// CONCATENATED MODULE: ./components/cms/slices/AccordionListSlice/index.js

/* harmony default export */ const slices_AccordionListSlice = (AccordionListSlice_AccordionListSlice);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Divider/Divider.js
var Divider = __webpack_require__(5517);
;// CONCATENATED MODULE: ./components/cms/slices/AccordionSpecsListSlice/accordionSpecsListSliceStyle.js
const specStyle = theme => ({
  root: {
    height: 'auto',
    width: '100%'
  },
  header: {
    backgroundColor: '#f7cd3d',
    height: '70px',
    fontFamily: 'FuturaPT',
    fontSize: '32px',
    borderTop: '1px solid white',
    borderBottom: '1px solid white',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px'
    }
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 'auto',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      padding: '20px 0px 20px',
      fontSize: '22px'
    }
  },
  specImg: {
    width: '800px',
    height: '800px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto'
    }
  },
  table: {
    width: '100%',
    maxWidth: '800px'
  },
  row: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '10px 10px 10px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  columnLeft: {
    display: 'flex',
    justifyContent: 'center',
    flexBasis: '25%',
    color: '#434343',
    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%',
      padding: '15px 0px 15px',
      alignItems: 'flex-start'
    }
  },
  columnRight: {
    fontSize: '16px',
    lineHeight: '30px',
    flexBasis: '75%',
    paddingLeft: '20px',
    color: '#434343',
    [theme.breakpoints.down('sm')]: {
      padding: '0px',
      flexBasis: '100%',
      fontSize: '14px'
    }
  }
});

/* harmony default export */ const accordionSpecsListSliceStyle = (specStyle);
;// CONCATENATED MODULE: ./components/cms/slices/AccordionSpecsListSlice/AccordionSpecsListSlice.jsx













const AccordionSpecsListSlice_useStyles = (0,makeStyles/* default */.Z)(accordionSpecsListSliceStyle);
const AccordionSpecsListSlice_AccordionSummaryCenter = (0,withStyles/* default */.Z)({
  content: {
    textAlign: 'center',
    flexGrow: 0
  }
})(AccordionSummary/* default */.Z);
const AccordionSpecsListSlice_AccordionDetails = (0,withStyles/* default */.Z)({
  root: {
    padding: '10px 0px 0px 0px'
  }
})(AccordionDetails/* default */.Z);
const AccordionSpecsListSlice_Accordion = (0,withStyles/* default */.Z)({
  expanded: {
    '&$expanded': {
      margin: 0
    }
  }
})(Accordion/* default */.Z);

const AccordionSpecsListSlice = props => {
  const classes = AccordionSpecsListSlice_useStyles();
  const {
    expand,
    title,
    mainImage,
    content
  } = props;
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(expand);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(AccordionSpecsListSlice_Accordion, {
      elevation: 0,
      expanded: open,
      onChange: () => setOpen(!open),
      children: [/*#__PURE__*/jsx_runtime_.jsx(AccordionSpecsListSlice_AccordionSummaryCenter, {
        className: classes.header,
        "aria-controls": "specs-header",
        id: "specs-header",
        expandIcon: /*#__PURE__*/jsx_runtime_.jsx((ExpandMore_default()), {
          style: {
            color: 'white'
          }
        }),
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx(AccordionSpecsListSlice_AccordionDetails, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.content,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
              className: classes.specImg,
              alt: mainImage.alt,
              src: mainImage.url
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.table,
            children: external_react_default().Children.toArray(content.map((item, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: classes.row,
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: classes.columnLeft,
                  children: external_prismic_reactjs_.RichText.render(item.item)
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: classes.columnRight,
                  children: external_prismic_reactjs_.RichText.render(item.item_content)
                })]
              }), index !== content.length - 1 && /*#__PURE__*/jsx_runtime_.jsx(Divider/* default */.Z, {})]
            })))
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const AccordionSpecsListSlice_AccordionSpecsListSlice = (AccordionSpecsListSlice);
;// CONCATENATED MODULE: ./components/cms/slices/AccordionSpecsListSlice/index.js

/* harmony default export */ const slices_AccordionSpecsListSlice = (AccordionSpecsListSlice_AccordionSpecsListSlice);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(8463);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(1907);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(9614);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(9912);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Collapse/Collapse.js
var Collapse = __webpack_require__(6037);
;// CONCATENATED MODULE: ./components/cms/slices/AccordionCardsSlice/customCardStyle.js
const customCardStyle = () => ({
  card: {},
  cardHeader: {
    padding: '8px 8px 0px'
  },
  avatar: {
    height: '35px',
    width: 'auto'
  },
  cardTitle: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '16px'
  },
  cardSubtitle: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'red',
    fontSize: '16px'
  },
  cardImage: {
    height: 'auto',
    width: 'auto',
    marginRight: '16px'
  },
  cardAction: {
    margin: '10px 10px 10px',
    fontSize: '14px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '0px',
    '&:last-child': {
      paddingBottom: '0px'
    }
  }
});

/* harmony default export */ const AccordionCardsSlice_customCardStyle = (customCardStyle);
;// CONCATENATED MODULE: ./components/cms/slices/AccordionCardsSlice/CustomCard.jsx














const CustomCard_useStyles = (0,makeStyles/* default */.Z)(AccordionCardsSlice_customCardStyle);

const CustomCard = props => {
  const {
    title,
    titleIcon,
    subtitle,
    subtitleIcon,
    short,
    content
  } = props;
  const classes = CustomCard_useStyles();
  const {
    0: expanded,
    1: setExpanded
  } = (0,external_react_.useState)(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const customHtml = (type, element, content) => {
    var _element$data, _element$data$url;

    if ((0,helpers/* isEmpty */.x)(element)) {
      return null;
    }

    if (element !== null && element !== void 0 && (_element$data = element.data) !== null && _element$data !== void 0 && (_element$data$url = _element$data.url) !== null && _element$data$url !== void 0 && _element$data$url.includes('#')) {
      return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          style: {
            color: '#0645ad',
            border: 'none',
            backgroundColor: 'transparent',
            fontSize: '18px',
            fontFamily: 'Avenir'
          },
          onClick: handleExpandClick,
          children: content
        })
      }, `${type}-${JSON.stringify(element)}`);
    }

    return null;
  };

  return /*#__PURE__*/jsx_runtime_.jsx(VisibleSensorAnimation/* default */.Z, {
    animation: "grow",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* default */.Z, {
      className: classes.card,
      elevation: 0,
      children: [/*#__PURE__*/jsx_runtime_.jsx(CardHeader/* default */.Z, {
        className: classes.cardHeader,
        title: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.cardTitle,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
            className: classes.cardImage,
            src: titleIcon.url,
            alt: titleIcon.alt
          }), external_prismic_reactjs_.RichText.render(title)]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(CardHeader/* default */.Z, {
        className: classes.cardHeader,
        title: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.cardSubtitle,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
            className: classes.cardImage,
            src: subtitleIcon.url,
            alt: subtitleIcon.alt
          }), external_prismic_reactjs_.RichText.render(subtitle)]
        })
      }), !expanded && /*#__PURE__*/jsx_runtime_.jsx(CardActions/* default */.Z, {
        className: classes.cardAction,
        disableSpacing: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_prismic_reactjs_.RichText, {
          render: short,
          htmlSerializer: customHtml
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Collapse/* default */.Z, {
        in: expanded,
        timeout: "auto",
        unmountOnExit: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(CardContent/* default */.Z, {
          className: classes.cardAction,
          children: external_prismic_reactjs_.RichText.render(content)
        })
      })]
    })
  });
};

/* harmony default export */ const AccordionCardsSlice_CustomCard = (CustomCard);
;// CONCATENATED MODULE: ./components/cms/slices/AccordionCardsSlice/accordionCardsStyle.js
const accordionCardsStyle = theme => ({
  root: {
    height: 'auto',
    width: '100%'
  },
  header: {
    backgroundColor: '#f7cd3d',
    height: '70px',
    fontFamily: 'FuturaPT',
    fontSize: '32px',
    borderTop: '1px solid white',
    borderBottom: '1px solid white',
    [theme.breakpoints.down('xs')]: {
      fontSize: '24px'
    }
  },
  gridTitle: {
    textAlign: 'center',
    display: 'flex',
    padding: '10px 20px 0px',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  gridContainer: {
    maxWidth: '950px'
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 10px 0px',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 5px 0px'
    },
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center'
    }
  }
});

/* harmony default export */ const AccordionCardsSlice_accordionCardsStyle = (accordionCardsStyle);
;// CONCATENATED MODULE: ./components/cms/slices/AccordionCardsSlice/AccordionCardsSlice.jsx












const AccordionCardsSlice_useStyles = (0,makeStyles/* default */.Z)(AccordionCardsSlice_accordionCardsStyle);
const AccordionCardsSlice_AccordionSummaryCenter = (0,withStyles/* default */.Z)({
  content: {
    textAlign: 'center',
    flexGrow: 0
  }
})(AccordionSummary/* default */.Z);
const AccordionCardsSlice_Accordion = (0,withStyles/* default */.Z)({
  expanded: {
    '&$expanded': {
      margin: 0
    }
  }
})(Accordion/* default */.Z);

const AccordionCardsSlice = props => {
  const classes = AccordionCardsSlice_useStyles();
  const {
    expand,
    title,
    tableTitle,
    content
  } = props;
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(expand);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(AccordionCardsSlice_Accordion, {
      elevation: 0,
      expanded: open,
      onChange: () => setOpen(!open),
      children: [/*#__PURE__*/jsx_runtime_.jsx(AccordionCardsSlice_AccordionSummaryCenter, {
        className: classes.header,
        expandIcon: /*#__PURE__*/jsx_runtime_.jsx((ExpandMore_default()), {
          style: {
            color: 'white'
          }
        }),
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx(AccordionDetails/* default */.Z, {
        className: classes.center,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
          container: true,
          className: classes.gridContainer,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
            className: classes.gridTitle,
            item: true,
            xl: 12,
            lg: 12,
            md: 12,
            sm: 12,
            xs: 12,
            children: external_prismic_reactjs_.RichText.render(tableTitle)
          }), external_react_default().Children.toArray(content.map(item => /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
            className: classes.gridItem,
            item: true,
            xl: 6,
            lg: 6,
            md: 6,
            sm: 6,
            xs: 12,
            children: /*#__PURE__*/jsx_runtime_.jsx(AccordionCardsSlice_CustomCard, {
              title: item.card_title,
              titleIcon: item.card_title_icon,
              subtitle: item.card_subtitle,
              subtitleIcon: item.card_subtitle_icon,
              short: item.card_content,
              content: item.card_expand_content
            })
          })))]
        })
      })]
    })
  });
};

/* harmony default export */ const AccordionCardsSlice_AccordionCardsSlice = (AccordionCardsSlice);
;// CONCATENATED MODULE: ./components/cms/slices/AccordionCardsSlice/index.js

/* harmony default export */ const slices_AccordionCardsSlice = (AccordionCardsSlice_AccordionCardsSlice);
;// CONCATENATED MODULE: ./components/cms/sections/ProductSection/ProductSection.jsx













const renderSlice = slice => {
  if (slice.slice_type === 'key_visual') {
    return /*#__PURE__*/jsx_runtime_.jsx(KeyVisualSlice/* default */.Z, {
      title: slice.primary.title,
      subtitle: slice.primary.subtitle,
      titleUnderline: slice.primary.title_underline,
      gridAlign: slice.primary.grid_align,
      textAlign: slice.primary.text_align,
      mobileGridHeight: slice.primary.mobile_grid_height,
      backgroundImageDesktop: slice.primary.background_image_desktop,
      backgroundImageMobile: slice.primary.background_image_mobile,
      bannerImageMobile: slice.primary.banner_image_mobile,
      content: slice.items
    });
  } else if (slice.slice_type === 'cards_carousel') {
    return /*#__PURE__*/jsx_runtime_.jsx(CardsCarouselSlice/* default */.Z, {
      headingComponents: slice.primary.heading_components,
      title: slice.primary.title,
      subtitle: slice.primary.subtitle,
      titleUnderline: slice.primary.title_underline,
      titleArrow: slice.primary.title_arrow,
      backgroundColor: slice.primary.background_color,
      content: slice.items
    });
  } else if (slice.slice_type === 'smart_alerts') {
    return /*#__PURE__*/jsx_runtime_.jsx(SmartAlertsSlice/* default */.Z, {
      title: slice.primary.title,
      titleIcon: slice.primary.title_icon,
      titleUnderline: slice.primary.title_underline,
      subtitle: slice.primary.subtitle,
      backgroundImageDesktop: slice.primary.background_image_desktop,
      backgroundImageMobile: slice.primary.background_image_mobile,
      content: slice.items,
      textContent: slice.primary.text_content
    });
  } else if (slice.slice_type === 'feature_block') {
    return /*#__PURE__*/jsx_runtime_.jsx(FeatureBlockSlice/* default */.Z, {
      title: slice.primary.title,
      titleIcon: slice.primary.title_icon,
      titleUnderline: slice.primary.title_underline,
      subtitle: slice.primary.subtitle,
      subtitleUnderline: slice.primary.subtitle_underline,
      textContent: slice.primary.text_content,
      gridAlign: slice.primary.grid_align,
      mediaContentDesktop: slice.primary.media_content_desktop,
      mediaContentMobile: slice.primary.media_content_mobile,
      mediaContentCenter: slice.primary.media_content_center,
      content: slice.items
    });
  } else if (slice.slice_type === 'accordion_feature_list') {
    return /*#__PURE__*/jsx_runtime_.jsx(slices_AccordionFeatureListSlice, {
      title: slice.primary.accordion_title,
      content: slice.items
    });
  } else if (slice.slice_type === 'accordion_key_visual') {
    return /*#__PURE__*/jsx_runtime_.jsx(slices_AccordionKeyVisualSlice, {
      expand: slice.primary.expand,
      title: slice.primary.accordion_title,
      subtitle: slice.primary.accordion_subtitle,
      textContent: slice.primary.accordion_text_content,
      backgroundImageDesktop: slice.primary.accordion_background_image_desktop,
      backgroundImageMobile: slice.primary.accordion_background_image_mobile
    });
  } else if (slice.slice_type === 'accordion_list') {
    return /*#__PURE__*/jsx_runtime_.jsx(slices_AccordionListSlice, {
      expand: slice.primary.expand,
      title: slice.primary.accordion_title,
      content: slice.items
    });
  } else if (slice.slice_type === 'accordion_specs_list') {
    return /*#__PURE__*/jsx_runtime_.jsx(slices_AccordionSpecsListSlice, {
      expand: slice.primary.expand,
      title: slice.primary.accordion_title,
      mainImage: slice.primary.main_image,
      content: slice.items
    });
  } else if (slice.slice_type === 'accordion_cards') {
    return /*#__PURE__*/jsx_runtime_.jsx(slices_AccordionCardsSlice, {
      expand: slice.primary.expand,
      title: slice.primary.accordion_title,
      tableTitle: slice.primary.table_title,
      content: slice.items
    });
  }

  return null;
};

const ProductSection = ({
  productPage
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: external_react_default().Children.toArray(productPage.body.map(slice => renderSlice(slice)))
  });
};

/* harmony default export */ const ProductSection_ProductSection = (ProductSection);
;// CONCATENATED MODULE: ./components/cms/sections/ProductSection/index.js

/* harmony default export */ const sections_ProductSection = (ProductSection_ProductSection);
// EXTERNAL MODULE: ./components/layout/BaseLayout/index.js + 53 modules
var BaseLayout = __webpack_require__(550);
// EXTERNAL MODULE: ./components/SeoManager/index.js + 1 modules
var SeoManager = __webpack_require__(6211);
// EXTERNAL MODULE: ./redux/configureStore.js
var configureStore = __webpack_require__(7290);
// EXTERNAL MODULE: ./redux/features/region/regionSlice.js
var regionSlice = __webpack_require__(9520);
// EXTERNAL MODULE: ./src/prismicData.js + 1 modules
var prismicData = __webpack_require__(2108);
// EXTERNAL MODULE: ./config/navigation.js
var navigation = __webpack_require__(6780);
;// CONCATENATED MODULE: ./pages/ca/products/furbo-dog-camera/index.js












const Product = ({
  campaign,
  productPage,
  seo,
  content
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: {
      backgroundColor: 'white'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(SeoManager/* default */.Z, {
      seo: seo
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(BaseLayout/* default */.Z, {
      campaign: campaign,
      content: content,
      children: [/*#__PURE__*/jsx_runtime_.jsx(cms_ProductKeyVisual, {
        productPage: productPage
      }), /*#__PURE__*/jsx_runtime_.jsx(sections_ProductSection, {
        productPage: productPage
      })]
    })]
  });
};

const getStaticProps = configureStore/* wrapper.getStaticProps */.Y.getStaticProps(store => async () => {
  const campaignData = await (0,prismicData/* fetchCampaignData */.VJ)('en-ca');
  const productPageData = await (0,prismicData/* fetchProductPageData */.jR)('en-ca');
  const contentData = await (0,prismicData/* fetchHeaderFooterData */.ZC)('en-ca');
  const seoData = await (0,prismicData/* fetchSeoData */.D2)('en-ca');
  const ProductSeo = seoData.list.find(item => item.component_key === 'PRODUCTS');
  store.dispatch((0,regionSlice/* updateRegion */.IS)(navigation/* REGION_INFO.CA */.w.CA));
  return {
    props: {
      campaign: campaignData,
      productPage: productPageData,
      seo: ProductSeo,
      content: contentData
    },
    revalidate: common/* REVALIDATE_TIME */.Oi
  };
});
/* harmony default export */ const furbo_dog_camera = (Product);

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

/***/ 1969:
/***/ ((module) => {

module.exports = require("@material-ui/icons/KeyboardArrowLeft");

/***/ }),

/***/ 4953:
/***/ ((module) => {

module.exports = require("@material-ui/icons/KeyboardArrowRight");

/***/ }),

/***/ 4889:
/***/ ((module) => {

module.exports = require("@material-ui/icons/PlayCircleOutline");

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

/***/ 9290:
/***/ ((module) => {

module.exports = require("react-lazy-load-image-component");

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

/***/ 4253:
/***/ ((module) => {

module.exports = require("react-visibility-sensor");

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
var __webpack_exports__ = __webpack_require__.X(0, [523,248,571,956,520,356,626,440,516,757,954,441,971,557,384,301], () => (__webpack_exec__(9144)));
module.exports = __webpack_exports__;

})();