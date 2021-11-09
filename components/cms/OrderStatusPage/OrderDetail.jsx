import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { isEmpty } from 'src/helpers';
import styles from './orderDetailStyle';

const useStyles = makeStyles(styles);

const OrderDetail = ({ open, orderStatusPage }) => {
  const order = useSelector((state) => state.order);
  const classes = useStyles();
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Grid container>
        <Grid
          item
          xl={4}
          lg={4}
          md={6}
          sm={6}
          xs={12}
          className={classes.detailText}
          style={{ width: 200 }}
        >
          <div className={classes.detailTextTitle}>
            {orderStatusPage.billing_information}
          </div>
          {order.billingInfo.name}
          <br />
          {order.billingInfo.address1}
          <br />
          {`${order.billingInfo.city}, ${order.billingInfo.province_code} ${order.billingInfo.zip} ${order.billingInfo.country_code}`}
        </Grid>
        <Grid
          item
          xl={4}
          lg={4}
          md={6}
          sm={6}
          xs={12}
          className={classes.detailText}
          style={{ width: 200 }}
        >
          <div className={classes.detailTextTitle}>
            {orderStatusPage.shipping_information}
          </div>
          {order.shippingInfo.name}
          <br />
          {order.shippingInfo.address1}
          <br />
          {`${order.shippingInfo.city}, ${order.shippingInfo.province_code} ${order.shippingInfo.zip} ${order.shippingInfo.country_code}`}
        </Grid>
      </Grid>
      <TableContainer className={classes.table} component={Paper}>
        <Table
          size="small"
          style={{
            minWidth: '750px',
          }}
        >
          <TableHead className={classes.tableHeader}>
            <TableRow>
              <TableCell
                className={classes.cellRightBottomBorder}
                style={{ width: 500 }}
                align="center"
              >
                {orderStatusPage.product}
              </TableCell>
              <TableCell
                className={classes.cellRightBottomBorder}
                align="center"
                style={{ width: 100 }}
              >
                {orderStatusPage.price}
              </TableCell>
              <TableCell
                className={classes.cellBottomBorder}
                align="center"
                style={{ width: 150 }}
              >
                {orderStatusPage.total}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {order.itemList.map((orderItem) => (
              <TableRow>
                <TableCell
                  className={classes.cellBottomBorder}
                  align="left"
                  scope="row"
                  style={{ padding: 0 }}
                >
                  <div className={classes.flexbox}>
                    <div
                      className={classes.cellRightBorder}
                      style={{
                        width: 115,
                        minWidth: 115,
                        height: 110,
                        padding: '5px 5px 5px 10px',
                      }}
                    >
                      <Image
                        alt={
                          orderStatusPage.product_list.find(
                            (item) => item.info.id === orderItem.product_id,
                          ).image.alt
                        }
                        src={
                          orderStatusPage.product_list.find(
                            (item) => item.info.id === orderItem.product_id,
                          ).image.url
                        }
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className={classes.productTitle}>
                      {orderItem.title}
                    </div>
                  </div>
                </TableCell>
                <TableCell
                  className={classes.cellLeftBottomBorder}
                  align="center"
                >
                  {orderItem.pre_tax_price}
                </TableCell>
                <TableCell
                  className={classes.cellLeftBottomBorder}
                  align="center"
                >
                  {orderItem.pre_tax_price}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell
                className={classes.cellRightBottomBorder}
                align="left"
                scope="row"
                colSpan={2}
              >
                {orderStatusPage.product_subtotal}
              </TableCell>
              <TableCell className={classes.cellBottomBorder} align="center">
                {order.subtotalPrice}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                className={classes.cellRightBottomBorder}
                align="left"
                scope="row"
                colSpan={2}
              >
                {orderStatusPage.tax}
              </TableCell>
              <TableCell className={classes.cellBottomBorder} align="center">
                {order.totalTax}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                className={classes.cellRightBottomBorder}
                align="left"
                scope="row"
                colSpan={2}
              >
                {`${orderStatusPage.shipping} (${order.shippingList.code})`}
              </TableCell>
              <TableCell className={classes.cellBottomBorder} align="center">
                {order.shippingList.price}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                className={classes.cellRightBottomBorder}
                align="left"
                scope="row"
                colSpan={2}
              >
                {orderStatusPage.subtotal}
              </TableCell>
              <TableCell className={classes.cellBottomBorder} align="center">
                {order.totalPrice}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                className={classes.cellRightBottomBorder}
                align="left"
                scope="row"
                colSpan={2}
              >
                {orderStatusPage.discounts}{' '}
                {!isEmpty(order.discountInfo)
                  ? `(${order.discountInfo.code})`
                  : null}
              </TableCell>
              <TableCell className={classes.cellBottomBorder} align="center">
                {!isEmpty(order.discountInfo)
                  ? `-${order.discountInfo.amount}`
                  : 0.0}
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableHeader}>
              <TableCell
                className={classes.cellRightBorder}
                style={{ fontWeight: 'bold' }}
                align="center"
                scope="row"
                colSpan={2}
              >
                {orderStatusPage.total_price}
              </TableCell>
              <TableCell
                scope="row"
                align="center"
                style={{ fontWeight: 'bold' }}
              >{`${order.currency} ${order.totalPrice}`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Collapse>
  );
};

OrderDetail.propTypes = {
  open: PropTypes.bool.isRequired,
  orderStatusPage: PropTypes.object.isRequired,
};
export default OrderDetail;
