"use strict";
(() => {
var exports = {};
exports.id = 862;
exports.ids = [862];
exports.modules = {

/***/ 2199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ order_status),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./components/layout/BaseLayout/index.js + 53 modules
var BaseLayout = __webpack_require__(550);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./redux/features/order/orderSlice.js
var orderSlice = __webpack_require__(6224);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(5477);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(3832);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/FormControl.js
var FormControl = __webpack_require__(4436);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js + 19 modules
var TextField = __webpack_require__(6580);
// EXTERNAL MODULE: ./components/Image/index.js + 1 modules
var Image = __webpack_require__(4592);
// EXTERNAL MODULE: ./src/helpers.js
var helpers = __webpack_require__(1710);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Collapse/Collapse.js
var Collapse = __webpack_require__(6037);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(9895);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Table/Table.js
var Table = __webpack_require__(2302);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableBody/TableBody.js
var TableBody = __webpack_require__(9613);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableCell/TableCell.js
var TableCell = __webpack_require__(8222);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js
var TableContainer = __webpack_require__(6847);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableHead/TableHead.js
var TableHead = __webpack_require__(3750);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableRow/TableRow.js
var TableRow = __webpack_require__(7394);
;// CONCATENATED MODULE: ./components/cms/OrderStatusPage/orderDetailStyle.js
const orderDetailStyle = theme => ({
  detailText: {
    fontFamily: 'Avenir',
    fontSize: '12px',
    color: '#444444',
    padding: '10px'
  },
  detailTextTitle: {
    fontFamily: 'Avenir',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  table: {
    borderRadius: '5px'
  },
  tableHeader: {
    backgroundColor: '#cccccc'
  },
  cellRightBottomBorder: {
    fontFamily: 'Avenir',
    fontSize: '16px',
    borderRight: '1px solid black',
    borderBottom: '1px solid black',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px'
    }
  },
  cellRightBorder: {
    fontFamily: 'Avenir',
    fontSize: '16px',
    borderRight: '1px solid black',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px'
    }
  },
  cellBottomBorder: {
    fontFamily: 'Avenir',
    fontSize: '16px',
    borderBottom: '1px solid black',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px'
    }
  },
  cellLeftBottomBorder: {
    fontFamily: 'Avenir',
    borderLeft: '1px black solid',
    borderBottom: '1px solid black',
    fontSize: '16px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px'
    }
  },
  productTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Avenir',
    fontSize: '16px',
    padding: '0px 20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px'
    }
  },
  flexbox: {
    display: 'flex'
  }
});

/* harmony default export */ const OrderStatusPage_orderDetailStyle = (orderDetailStyle);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/cms/OrderStatusPage/OrderDetail.jsx
















const useStyles = (0,makeStyles/* default */.Z)(OrderStatusPage_orderDetailStyle);

const OrderDetail = ({
  open,
  orderStatusPage
}) => {
  const order = (0,external_react_redux_.useSelector)(state => state.order);
  const classes = useStyles();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Collapse/* default */.Z, {
    in: open,
    timeout: "auto",
    unmountOnExit: true,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
      container: true,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
        item: true,
        xl: 4,
        lg: 4,
        md: 6,
        sm: 6,
        xs: 12,
        className: classes.detailText,
        style: {
          width: 200
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.detailTextTitle,
          children: orderStatusPage.billing_information
        }), order.billingInfo.name, /*#__PURE__*/jsx_runtime_.jsx("br", {}), order.billingInfo.address1, /*#__PURE__*/jsx_runtime_.jsx("br", {}), `${order.billingInfo.city}, ${order.billingInfo.province_code} ${order.billingInfo.zip} ${order.billingInfo.country_code}`]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
        item: true,
        xl: 4,
        lg: 4,
        md: 6,
        sm: 6,
        xs: 12,
        className: classes.detailText,
        style: {
          width: 200
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.detailTextTitle,
          children: orderStatusPage.shipping_information
        }), order.shippingInfo.name, /*#__PURE__*/jsx_runtime_.jsx("br", {}), order.shippingInfo.address1, /*#__PURE__*/jsx_runtime_.jsx("br", {}), `${order.shippingInfo.city}, ${order.shippingInfo.province_code} ${order.shippingInfo.zip} ${order.shippingInfo.country_code}`]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(TableContainer/* default */.Z, {
      className: classes.table,
      component: Paper/* default */.Z,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Table/* default */.Z, {
        size: "small",
        style: {
          minWidth: '750px'
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(TableHead/* default */.Z, {
          className: classes.tableHeader,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(TableRow/* default */.Z, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
              className: classes.cellRightBottomBorder,
              style: {
                width: 500
              },
              align: "center",
              children: orderStatusPage.product
            }), /*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
              className: classes.cellRightBottomBorder,
              align: "center",
              style: {
                width: 100
              },
              children: orderStatusPage.price
            }), /*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
              className: classes.cellBottomBorder,
              align: "center",
              style: {
                width: 150
              },
              children: orderStatusPage.total
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TableBody/* default */.Z, {
          children: [order.itemList.map(orderItem => /*#__PURE__*/(0,jsx_runtime_.jsxs)(TableRow/* default */.Z, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
              className: classes.cellBottomBorder,
              align: "left",
              scope: "row",
              style: {
                padding: 0
              },
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: classes.flexbox,
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: classes.cellRightBorder,
                  style: {
                    width: 115,
                    minWidth: 115,
                    height: 110,
                    padding: '5px 5px 5px 10px'
                  },
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                    alt: orderStatusPage.product_list.find(item => item.info.id === orderItem.product_id).image.alt,
                    src: orderStatusPage.product_list.find(item => item.info.id === orderItem.product_id).image.url,
                    width: 100,
                    height: 100
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: classes.productTitle,
                  children: orderItem.title
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
              className: classes.cellLeftBottomBorder,
              align: "center",
              children: orderItem.pre_tax_price
            }), /*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
              className: classes.cellLeftBottomBorder,
              align: "center",
              children: orderItem.pre_tax_price
            })]
          })), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TableRow/* default */.Z, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
              className: classes.cellRightBottomBorder,
              align: "left",
              scope: "row",
              colSpan: 2,
              children: orderStatusPage.product_subtotal
            }), /*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
              className: classes.cellBottomBorder,
              align: "center",
              children: order.subtotalPrice
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TableRow/* default */.Z, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
              className: classes.cellRightBottomBorder,
              align: "left",
              scope: "row",
              colSpan: 2,
              children: orderStatusPage.tax
            }), /*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
              className: classes.cellBottomBorder,
              align: "center",
              children: order.totalTax
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TableRow/* default */.Z, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
              className: classes.cellRightBottomBorder,
              align: "left",
              scope: "row",
              colSpan: 2,
              children: `${orderStatusPage.shipping} (${order.shippingList.code})`
            }), /*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
              className: classes.cellBottomBorder,
              align: "center",
              children: order.shippingList.price
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TableRow/* default */.Z, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
              className: classes.cellRightBottomBorder,
              align: "left",
              scope: "row",
              colSpan: 2,
              children: orderStatusPage.subtotal
            }), /*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
              className: classes.cellBottomBorder,
              align: "center",
              children: order.totalPrice
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TableRow/* default */.Z, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(TableCell/* default */.Z, {
              className: classes.cellRightBottomBorder,
              align: "left",
              scope: "row",
              colSpan: 2,
              children: [orderStatusPage.discounts, ' ', !(0,helpers/* isEmpty */.x)(order.discountInfo) ? `(${order.discountInfo.code})` : null]
            }), /*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
              className: classes.cellBottomBorder,
              align: "center",
              children: !(0,helpers/* isEmpty */.x)(order.discountInfo) ? `-${order.discountInfo.amount}` : 0.0
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TableRow/* default */.Z, {
            className: classes.tableHeader,
            children: [/*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
              className: classes.cellRightBorder,
              style: {
                fontWeight: 'bold'
              },
              align: "center",
              scope: "row",
              colSpan: 2,
              children: orderStatusPage.total_price
            }), /*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
              scope: "row",
              align: "center",
              style: {
                fontWeight: 'bold'
              },
              children: `${order.currency} ${order.totalPrice}`
            })]
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const OrderStatusPage_OrderDetail = (OrderDetail);
;// CONCATENATED MODULE: ./components/cms/OrderStatusPage/orderStatusPageStyle.js
const orderStatusStyle = theme => ({
  root: {
    padding: 0
  },
  title: {
    textAlign: 'center',
    fontFamily: 'FuturaPT',
    padding: '20px 0px 20px',
    fontSize: '34px'
  },
  subtitle: {
    fontFamily: 'Avenir',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  text: {
    fontFamily: 'Avenir',
    fontSize: '14px',
    padding: '10px 0px 10px'
  },
  label: {
    fontFamily: 'Avenir',
    fontSize: '16px',
    padding: '10px 0px 10px',
    fontWeight: 'bold'
  },
  textField: {
    width: '100%'
  },
  buttonContainer: {
    padding: '30px 0px 20px'
  },
  button: {
    textTransform: 'none',
    fontFamily: 'FuturaPT',
    fontSize: '18px',
    backgroundColor: '#efefef',
    padding: '6px 80px 2px',
    border: '1px solid #999999'
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    width: '25%',
    justifyContent: 'space-between',
    textAlign: 'center'
  },
  infoHeading: {
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '10px'
    }
  },
  infoContent: {
    display: 'flex',
    fontFamily: 'Avenir',
    justifyContent: 'center',
    fontSize: '12px',
    alignItems: 'center',
    height: '40px'
  },
  detailButton: {
    textTransform: 'none',
    padding: '2px 8px',
    fontFamily: 'Avenir',
    fontSize: '12px',
    alignItems: 'center'
  },
  greyContainer: {
    width: '100%',
    backgroundColor: '#f6f6f6',
    padding: '10px',
    border: 'solid 1px #d2d2d2',
    borderRadius: '5px'
  },
  itemInfoContainer: {
    width: '100%'
  },
  itemInfo: {
    width: '100%',
    border: '1px solid #d2d2d2',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px'
  },
  itemProcessStatus: {
    width: '100%',
    fontFamily: 'Avenir',
    fontSize: '16px',
    textAlign: 'center',
    padding: '5px',
    backgroundColor: '#cccccc'
  },
  itemShippingStatus: {
    width: '100%',
    fontFamily: 'Avenir',
    fontSize: '16px',
    textAlign: 'center',
    padding: '5px',
    backgroundColor: '#eeeeee',
    marginBottom: '10px'
  },
  itemContent: {
    display: 'flex'
  },
  itemText: {
    flex: 1,
    margin: '10px 10px 0px'
  },
  itemTextTitle: {
    fontFamily: 'Avenir',
    fontSize: '13px',
    fontWeight: 'bold'
  },
  infoText: {
    fontFamily: 'Avenir',
    fontSize: '12px',
    color: '#444444'
  },
  spinnerContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px'
  }
});

/* harmony default export */ const orderStatusPageStyle = (orderStatusStyle);
;// CONCATENATED MODULE: ./components/cms/OrderStatusPage/OrderStatusPage.jsx
















const OrderStatusPage_useStyles = (0,makeStyles/* default */.Z)(orderStatusPageStyle);

const OrderStatusPage = ({
  orderStatusPage
}) => {
  const classes = OrderStatusPage_useStyles();
  const dispatch = (0,external_react_redux_.useDispatch)();
  const order = (0,external_react_redux_.useSelector)(state => state.order);
  const {
    0: email,
    1: setEmail
  } = (0,external_react_.useState)('');
  const {
    0: number,
    1: setNumber
  } = (0,external_react_.useState)('');
  const {
    0: error,
    1: setError
  } = (0,external_react_.useState)(false);
  const {
    0: openDetail,
    1: setOpenDetail
  } = (0,external_react_.useState)(false);

  const handleFindOrderButton = () => {
    if ((0,helpers/* isEmpty */.x)(email) || (0,helpers/* isEmpty */.x)(number)) {
      setError(true);
      return;
    }

    if (!(0,helpers/* validateExpression */.H)(/\S+@\S+\.\S+/, email)) {
      setError(true);
      return;
    }

    const normalizeNumber = number.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"?]/g
    /* eslint-disable-line */
    , '');
    dispatch((0,orderSlice/* fetchOrder */.G7)({
      email,
      number: normalizeNumber
    }));
  };

  const handleBackButton = () => {
    dispatch((0,orderSlice/* initOrderStatus */.uj)());
  };

  const handleOpenDetailClick = () => {
    setOpenDetail(!openDetail);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
    className: classes.root,
    maxWidth: "md",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.title,
      children: orderStatusPage.title
    }), order.status === 'idle' && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.subtitle,
        children: orderStatusPage.subtitle
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.text,
        children: orderStatusPage.input_prompt
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FormControl/* default */.Z, {
        variant: "outlined",
        style: {
          width: '100%'
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.label,
          children: orderStatusPage.email_address
        }), /*#__PURE__*/jsx_runtime_.jsx(TextField/* default */.Z, {
          className: classes.textField,
          size: "small",
          id: "email-address",
          value: email,
          variant: "outlined",
          onChange: e => setEmail(e.target.value)
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.label,
          children: orderStatusPage.order_number
        }), /*#__PURE__*/jsx_runtime_.jsx(TextField/* default */.Z, {
          className: classes.textField,
          size: "small",
          id: "order-number",
          value: number,
          variant: "outlined",
          onChange: e => setNumber(e.target.value)
        })]
      }), error && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.text,
        style: {
          color: 'red'
        },
        children: orderStatusPage.error_prompt
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.buttonContainer,
        children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          onClick: handleFindOrderButton,
          className: classes.button,
          children: orderStatusPage.find_order
        })
      })]
    }), order.status === 'loading' && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.spinnerContainer,
      children: /*#__PURE__*/jsx_runtime_.jsx(CircularProgress/* default */.Z, {})
    }), order.status === 'succeeded' && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.greyContainer,
        style: {
          display: 'flex',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.info,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.infoHeading,
            children: orderStatusPage.order_placed
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.infoContent,
            children: new Date(order.createdAt).toISOString().slice(0, 10).replace(/-/g, '/')
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.info,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.infoHeading,
            children: orderStatusPage.total
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.infoContent,
            children: order.totalPrice
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.info,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.infoHeading,
            children: orderStatusPage.ship_to
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.infoContent,
            children: order.name
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.info,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.infoHeading,
            children: `${orderStatusPage.order} #${order.id}`
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.infoContent,
            children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
              variant: "contained",
              className: classes.detailButton,
              onClick: handleOpenDetailClick,
              disableElevation: true,
              children: orderStatusPage.order_details
            })
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(OrderStatusPage_OrderDetail, {
        orderStatusPage: orderStatusPage,
        open: openDetail
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.subtitle,
        style: {
          margin: '10px'
        },
        children: [order.fulfillmentStatus === 'fulfilled' && `${orderStatusPage.order_status}: ${orderStatusPage.fulfilled}`, order.fulfillmentStatus === 'partial' && `${orderStatusPage.order_status}: ${orderStatusPage.partially_fulfillment}`, order.fulfillmentStatus !== 'partial' && order.fulfillmentStatus !== 'fulfilled' && `${orderStatusPage.order_status}: ${orderStatusPage.partially_fulfillment}`]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.itemInfoContainer,
        children: order.itemList.map(orderItem => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.itemInfo,
          children: [orderItem.fulfillment_status !== 'fulfilled' && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.itemProcessStatus,
              children: orderStatusPage.being_processed
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.itemShippingStatus,
              children: orderStatusPage.not_shipped
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.itemContent,
            children: [/*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
              alt: orderStatusPage.product_list.find(item => item.info.id === orderItem.product_id).image.alt,
              src: orderStatusPage.product_list.find(item => item.info.id === orderItem.product_id).image.url,
              width: 100,
              height: 100
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.itemText,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.itemTextTitle,
                children: orderItem.name
              }), orderItem.pre_tax_price, " ", order.currency]
            })]
          })]
        }))
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.buttonContainer,
        children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          onClick: handleBackButton,
          className: classes.button,
          children: orderStatusPage.back
        })
      })]
    }), order.status === 'failed' && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.greyContainer,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.subtitle,
          children: orderStatusPage.not_found
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.infoText,
          children: orderStatusPage.troubleshoot
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.buttonContainer,
        children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          onClick: handleBackButton,
          className: classes.button,
          children: orderStatusPage.back
        })
      })]
    })]
  });
};

/* harmony default export */ const OrderStatusPage_OrderStatusPage = (OrderStatusPage);
;// CONCATENATED MODULE: ./components/cms/OrderStatusPage/index.js

/* harmony default export */ const cms_OrderStatusPage = (OrderStatusPage_OrderStatusPage);
// EXTERNAL MODULE: ./components/SeoManager/index.js + 1 modules
var SeoManager = __webpack_require__(6211);
// EXTERNAL MODULE: ./redux/configureStore.js
var configureStore = __webpack_require__(7290);
// EXTERNAL MODULE: ./redux/features/region/regionSlice.js
var regionSlice = __webpack_require__(9520);
// EXTERNAL MODULE: ./src/prismicData.js + 1 modules
var prismicData = __webpack_require__(2108);
// EXTERNAL MODULE: ./config/common.js
var common = __webpack_require__(7695);
// EXTERNAL MODULE: ./config/navigation.js
var navigation = __webpack_require__(6780);
;// CONCATENATED MODULE: ./pages/ca/pages/order-status/index.js











const OrderStatus = ({
  campaign,
  seo,
  content,
  orderStatusPage
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
      children: /*#__PURE__*/jsx_runtime_.jsx(cms_OrderStatusPage, {
        orderStatusPage: orderStatusPage
      })
    })]
  });
};

const getStaticProps = configureStore/* wrapper.getStaticProps */.Y.getStaticProps(store => async () => {
  const campaignData = await (0,prismicData/* fetchCampaignData */.VJ)('en-ca');
  const orderStatusPageData = await (0,prismicData/* fetchOrderStatusPageData */.l7)('en-ca');
  const contentData = await (0,prismicData/* fetchHeaderFooterData */.ZC)('en-ca');
  const seoData = await (0,prismicData/* fetchSeoData */.D2)('en-ca');
  const orderStatusSeo = seoData.list.find(item => item.component_key === 'ORDER_STATUS');
  store.dispatch((0,regionSlice/* updateRegion */.IS)(navigation/* REGION_INFO.CA */.w.CA));
  return {
    props: {
      campaign: campaignData,
      seo: orderStatusSeo,
      content: contentData,
      orderStatusPage: orderStatusPageData
    },
    revalidate: common/* REVALIDATE_TIME */.Oi
  };
});
/* harmony default export */ const order_status = (OrderStatus);

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
var __webpack_exports__ = __webpack_require__.X(0, [523,248,719,520,356,626], () => (__webpack_exec__(2199)));
module.exports = __webpack_exports__;

})();