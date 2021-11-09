import { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrder, initOrderStatus } from 'redux/features/order/orderSlice';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Image from 'components/Image';
import { isEmpty, validateExpression } from 'src/helpers';
import OrderDetail from './OrderDetail';
import styles from './orderStatusPageStyle';

const useStyles = makeStyles(styles);

const OrderStatusPage = ({ orderStatusPage }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);

  const handleFindOrderButton = () => {
    if (isEmpty(email) || isEmpty(number)) {
      setError(true);
      return;
    }
    if (!validateExpression(/\S+@\S+\.\S+/, email)) {
      setError(true);
      return;
    }
    const normalizeNumber = number.replace(
      /[.,\/#!$%\^&\*;:{}=\-_`~()'"?]/g /* eslint-disable-line */,
      '',
    );
    dispatch(fetchOrder({ email, number: normalizeNumber }));
  };

  const handleBackButton = () => {
    dispatch(initOrderStatus());
  };

  const handleOpenDetailClick = () => {
    setOpenDetail(!openDetail);
  };

  return (
    <Container className={classes.root} maxWidth="md">
      <div className={classes.title}>{orderStatusPage.title}</div>
      {order.status === 'idle' && (
        <>
          <div className={classes.subtitle}>{orderStatusPage.subtitle}</div>
          <div className={classes.text}>{orderStatusPage.input_prompt}</div>
          <FormControl variant="outlined" style={{ width: '100%' }}>
            <div className={classes.label}>{orderStatusPage.email_address}</div>
            <TextField
              className={classes.textField}
              size="small"
              id="email-address"
              value={email}
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className={classes.label}>{orderStatusPage.order_number}</div>
            <TextField
              className={classes.textField}
              size="small"
              id="order-number"
              value={number}
              variant="outlined"
              onChange={(e) => setNumber(e.target.value)}
            />
          </FormControl>
          {error && (
            <div className={classes.text} style={{ color: 'red' }}>
              {orderStatusPage.error_prompt}
            </div>
          )}
          <div className={classes.buttonContainer}>
            <Button onClick={handleFindOrderButton} className={classes.button}>
              {orderStatusPage.find_order}
            </Button>
          </div>
        </>
      )}
      {order.status === 'loading' && (
        <div className={classes.spinnerContainer}>
          <CircularProgress />
        </div>
      )}
      {order.status === 'succeeded' && (
        <>
          <div
            className={classes.greyContainer}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div className={classes.info}>
              <div className={classes.infoHeading}>
                {orderStatusPage.order_placed}
              </div>
              <div className={classes.infoContent}>
                {new Date(order.createdAt)
                  .toISOString()
                  .slice(0, 10)
                  .replace(/-/g, '/')}
              </div>
            </div>
            <div className={classes.info}>
              <div className={classes.infoHeading}>{orderStatusPage.total}</div>
              <div className={classes.infoContent}>{order.totalPrice}</div>
            </div>
            <div className={classes.info}>
              <div className={classes.infoHeading}>
                {orderStatusPage.ship_to}
              </div>
              <div className={classes.infoContent}>{order.name}</div>
            </div>
            <div className={classes.info}>
              <div
                className={classes.infoHeading}
              >{`${orderStatusPage.order} #${order.id}`}</div>
              <div className={classes.infoContent}>
                <Button
                  variant="contained"
                  className={classes.detailButton}
                  onClick={handleOpenDetailClick}
                  disableElevation
                >
                  {orderStatusPage.order_details}
                </Button>
              </div>
            </div>
          </div>
          <OrderDetail orderStatusPage={orderStatusPage} open={openDetail} />
          <div className={classes.subtitle} style={{ margin: '10px' }}>
            {order.fulfillmentStatus === 'fulfilled' &&
              `${orderStatusPage.order_status}: ${orderStatusPage.fulfilled}`}
            {order.fulfillmentStatus === 'partial' &&
              `${orderStatusPage.order_status}: ${orderStatusPage.partially_fulfillment}`}
            {order.fulfillmentStatus !== 'partial' &&
              order.fulfillmentStatus !== 'fulfilled' &&
              `${orderStatusPage.order_status}: ${orderStatusPage.partially_fulfillment}`}
          </div>
          <div className={classes.itemInfoContainer}>
            {order.itemList.map((orderItem) => (
              <div className={classes.itemInfo}>
                {orderItem.fulfillment_status !== 'fulfilled' && (
                  <>
                    <div className={classes.itemProcessStatus}>
                      {orderStatusPage.being_processed}
                    </div>
                    <div className={classes.itemShippingStatus}>
                      {orderStatusPage.not_shipped}
                    </div>
                  </>
                )}
                <div className={classes.itemContent}>
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
                  <div className={classes.itemText}>
                    <div className={classes.itemTextTitle}>
                      {orderItem.name}
                    </div>
                    {orderItem.pre_tax_price} {order.currency}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={classes.buttonContainer}>
            <Button onClick={handleBackButton} className={classes.button}>
              {orderStatusPage.back}
            </Button>
          </div>
        </>
      )}
      {order.status === 'failed' && (
        <div>
          <div className={classes.greyContainer}>
            <div className={classes.subtitle}>{orderStatusPage.not_found}</div>
            <div className={classes.infoText}>
              {orderStatusPage.troubleshoot}
            </div>
          </div>
          <div className={classes.buttonContainer}>
            <Button onClick={handleBackButton} className={classes.button}>
              {orderStatusPage.back}
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
};

OrderStatusPage.propTypes = {
  orderStatusPage: PropTypes.object.isRequired,
};

export default OrderStatusPage;
