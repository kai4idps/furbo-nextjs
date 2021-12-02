import { useEffect, useState, Children } from 'react';
import PropTypes from 'prop-types';
import Image from 'components/Image';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { CHECKOUT_URL, CUSTOM_CHECKOUT_URL } from 'config/checkout';
import { CURRENCY } from 'config/common';
import { isEmpty } from 'src/helpers';
import styles from './cartPageStyle';

const useStyles = makeStyles(styles);

const CartPage = ({ cartPage }) => {
  const classes = useStyles();
  const router = useRouter();
  const { region, productId } = router.query;

  const productInfo = useMemo(() => {
    return isEmpty(productId)
      ? cartPage.product_list[0][`product_info_${region}`]
      : cartPage.product_list.find(
          (item) => +item[`product_info_${region}`].product_id === +productId,
        )?.[`product_info_${region}`] ||
          cartPage.product_list[0][`product_info_${region}`];
  }, [productId, region, cartPage.product_list]);

  const price = +productInfo.price;
  const originalPrice = +productInfo.compare_at_price;
  const quantityLimit = +cartPage.quantity_limit;
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'view_cart',
      items: [
        {
          item_id: productInfo.product_id,
          item_name: productInfo.title,
          price: price,
          quantity: quantity,
        },
      ],
      currency: CURRENCY[region.toUpperCase()],
      value: price,
    });
  }, [productInfo, quantity, price, cartPage, region]);

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

  return (
    <>
      <div className={classes.yourShoppingCart}>
        {cartPage.your_shopping_cart}
      </div>
      <Container className={classes.container} maxWidth="md">
        <div className={classes.imageContainer}>
          <NextImage
            src={
              isEmpty(productId)
                ? cartPage.product_image.url
                : productInfo.image.src
            }
            layout="fill"
            alt="shopping-cart-kv"
          />
        </div>
        <div className={classes.content}>
          <div className={classes.contentTitle}>
            <div className={classes.borderTop} />
            <div className={classes.contentTitleText}>
              {isEmpty(productId) ? cartPage.title : productInfo.title}
            </div>
            <div className={classes.borderBottom} />
          </div>
          <div className={classes.serviceContainer}>
            {Children.toArray(
              cartPage.product_detail.map((item) => (
                <div className={classes.service}>
                  <Image
                    className={classes.serviceIcons}
                    alt={item.icon.alt}
                    src={item.icon.url}
                    type="image/svg+xml"
                  />
                  <div className={classes.serviceText}>{item.detail}</div>
                </div>
              )),
            )}
          </div>
          <div className={classes.priceContainer}>
            <div className={classes.priceText}>
              <span className={classes.origin}>
                {`$${price.toFixed(0)}`}
                <sup className={classes.cents}>
                  {`.${(price % 1).toFixed(2).substring(2)}`}
                </sup>
              </span>
              <span className={classes.remove}>
                {`$${originalPrice.toFixed(0)}`}
                <sup className={classes.cents} style={{ fontSize: '10px' }}>
                  {`.${(originalPrice % 1).toFixed(2).substring(2)}`}
                </sup>
              </span>
              <div className={classes.save}>
                {`${cartPage.save} $${(originalPrice - price).toFixed(0)}(${(
                  (1 - price / originalPrice || 0) * 100
                ).toFixed(0)}%)`}
              </div>
              <div className={classes.tax}>{cartPage.excluding_tax}</div>
            </div>
          </div>
          <div className={classes.buttonContainer}>
            {cartPage.quantity}
            <ButtonGroup className={classes.quantityButtonGroup}>
              <Button className={classes.buttonMinus} onClick={handleDecrement}>
                <RemoveIcon className={classes.icon} />
              </Button>
              <Button className={classes.buttonQuantity}>{quantity}</Button>
              <Button className={classes.buttonAdd} onClick={handleIncrement}>
                <AddIcon className={classes.icon} />
              </Button>
            </ButtonGroup>
            <Button
              href={
                isEmpty(productId)
                  ? CHECKOUT_URL(region, quantity)
                  : CUSTOM_CHECKOUT_URL(
                      region,
                      productInfo.variant_id,
                      quantity,
                    )
              }
              id="checkout-button"
              className={classes.checkoutButton}
            >
              {cartPage.checkout}
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

CartPage.propTypes = {
  cartPage: PropTypes.object.isRequired,
};

export default CartPage;
