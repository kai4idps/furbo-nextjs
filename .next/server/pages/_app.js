"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
;// CONCATENATED MODULE: external "@material-ui/core/CssBaseline"
const CssBaseline_namespaceObject = require("@material-ui/core/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./config/common.js
var common = __webpack_require__(658);
// EXTERNAL MODULE: ./config/navigation.js
var navigation = __webpack_require__(9459);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./config/images/flags.js + 16 modules
var flags = __webpack_require__(3892);
;// CONCATENATED MODULE: ./redux/features/region/regionSlice.js





const initialState = {
    country: null,
    language: null,
    code: null,
    group: null,
    image: null,
    status: 'idle',
    error: null
};
const fetchRegion = (0,toolkit_.createAsyncThunk)('region/fetchRegion', async ()=>{
    const response = await external_axios_default().get(common/* LOCALE_API */.Zo, {
        headers: {
        }
    });
    const code = response.data.Country === 'GB' ? 'UK' : response.data.Country;
    const info = (navigation/* REGION_INFO */.w === null || navigation/* REGION_INFO */.w === void 0 ? void 0 : navigation/* REGION_INFO */.w[code]) || navigation/* REGION_INFO.US */.w.US;
    return info;
});
const regionSlice = (0,toolkit_.createSlice)({
    name: 'region',
    initialState,
    reducers: {
        updateRegion: (state, action)=>{
            const { country , code , language , group , image  } = action.payload;
            state.country = country;
            state.code = code;
            state.language = language;
            state.group = group;
            state.image = image;
        },
        fallbackRegion: (state)=>{
            state.country = 'United State';
            state.code = 'us';
            state.language = 'en-us';
            state.group = 'Americas';
            state.image = flags/* FLAG_US */.bl;
        }
    },
    extraReducers: {
        [fetchRegion.pending]: (state, action)=>{
            state.status = 'loading';
        },
        [fetchRegion.fulfilled]: (state, action)=>{
            state.status = 'succeeded';
            const { country , code , language , group , image  } = action.payload;
            state.country = country;
            state.code = code;
            state.language = language;
            state.group = group;
            state.image = image;
        },
        [fetchRegion.rejected]: (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        }
    }
});
const { updateRegion , fallbackRegion  } = regionSlice.actions;
/* harmony default export */ const region_regionSlice = (regionSlice.reducer);

// EXTERNAL MODULE: ./config/routes/routes.js
var routes = __webpack_require__(6381);
// EXTERNAL MODULE: ./src/helpers.js
var helpers = __webpack_require__(1470);
;// CONCATENATED MODULE: ./components/Redirect/Redirect.jsx







const Redirect = ()=>{
    const router = (0,router_.useRouter)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        var ref, ref1;
        const path = router.query.region;
        const matchInfo = routes/* VALID_ROUTES.find */.JQ.find((route)=>route.path === `/${path}`
        ) || routes/* VALID_ROUTES.0 */.JQ[0];
        const regionInfo = navigation/* REGION_INFO */.w === null || navigation/* REGION_INFO */.w === void 0 ? void 0 : navigation/* REGION_INFO */.w[(ref1 = matchInfo.code) === null || ref1 === void 0 ? void 0 : ref1.toUpperCase()];
        if (!(0,helpers/* isEmpty */.x)(regionInfo)) {
            dispatch(updateRegion(regionInfo));
        } else {
            dispatch(fetchRegion());
        }
    }, [
        router
    ]);
    return null;
};
/* harmony default export */ const Redirect_Redirect = (Redirect);

// EXTERNAL MODULE: ./redux/features/product/productSlice.js
var productSlice = __webpack_require__(8890);
// EXTERNAL MODULE: ./redux/features/order/orderSlice.js
var orderSlice = __webpack_require__(8022);
;// CONCATENATED MODULE: ./redux/configureStore.js




const preloadState = {
};
const store = (0,toolkit_.configureStore)({
    reducer: {
        region: region_regionSlice,
        product: productSlice/* default */.ZP,
        order: orderSlice/* default */.ZP
    },
    devTools: 'production' !== 'production',
    preloadState
});

;// CONCATENATED MODULE: ./styles/theme.js

const theme = (0,styles_.createTheme)({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
            tablet: 640,
            laptop: 1024,
            desktop: 1280
        }
    },
    palette: {
        yellow: '#f7cd3d'
    }
});
/* harmony default export */ const styles_theme = (theme);

;// CONCATENATED MODULE: ./styles/mainStyle.js
const mainStyle = (theme)=>({
        root: {
            '& h1': {
                fontFamily: 'FuturaPT',
                fontSize: '30px',
                fontWeight: 500,
                color: 'inherit',
                margin: 0,
                [theme.breakpoints.down('sm')]: {
                    fontSize: '21px'
                }
            },
            '& h2': {
                fontFamily: 'FuturaPT',
                fontSize: '24px',
                fontWeight: 500,
                color: 'inherit',
                margin: 0,
                [theme.breakpoints.down('sm')]: {
                    fontSize: '18px'
                }
            },
            '& h3': {
                fontFamily: 'FuturaPT',
                fontSize: '21px',
                fontWeight: 500,
                color: 'inherit',
                margin: 0,
                [theme.breakpoints.down('sm')]: {
                    fontSize: '16px'
                }
            },
            '& h4': {
                fontFamily: 'Avenir',
                fontSize: '24px',
                fontWeight: 800,
                color: 'inherit',
                margin: 0,
                [theme.breakpoints.down('sm')]: {
                    fontSize: '16px'
                }
            },
            '& h5': {
                fontFamily: 'Avenir',
                fontSize: '24px',
                fontWeight: 500,
                color: 'inherit',
                margin: 0,
                [theme.breakpoints.down('sm')]: {
                    fontSize: '16px'
                }
            },
            '& h6': {
                fontFamily: 'Avenir',
                fontSize: '18px',
                fontWeight: 800,
                color: 'inherit',
                margin: 0,
                [theme.breakpoints.down('sm')]: {
                    fontSize: '14px'
                }
            },
            '& p': {
                fontFamily: 'Avenir',
                color: 'inherit',
                margin: 0
            }
        }
    })
;
/* harmony default export */ const styles_mainStyle = (mainStyle);

;// CONCATENATED MODULE: ./pages/_app.js













const useStyles = (0,styles_.makeStyles)(styles_mainStyle);
const MyApp = ({ Component , pageProps  })=>{
    const classes = useStyles();
    (0,external_react_.useEffect)(()=>{
        const initGtmOnEvent = (event)=>{
            initGtm();
            event.currentTarget.removeEventListener(event.type, initGtmOnEvent);
        };
        const initGtm = ()=>{
            if (window.gtmDidInit) {
                return;
            }
            window.gtmDidInit = true;
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.onload = ()=>{
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: 'gtm.js',
                    'gtm.start': new Date().getTime(),
                    'gtm.uniqueEventId': 0
                });
            };
            script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-N37W29C';
            document.head.appendChild(script);
        };
        document.addEventListener('DOMContentLoaded', ()=>{
            document.addEventListener('scroll', initGtmOnEvent);
            document.addEventListener('mousemove', initGtmOnEvent);
            document.addEventListener('touchstart', initGtmOnEvent);
            setTimeout(initGtm, common/* GTM_DELAY_TIME */.z_);
        });
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Furbo"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
                theme: styles_theme,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_redux_.Provider, {
                        store: store,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Redirect_Redirect, {
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: classes.root,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                    ...pageProps
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [862,772,22], () => (__webpack_exec__(7330)));
module.exports = __webpack_exports__;

})();