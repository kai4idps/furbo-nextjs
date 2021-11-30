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
import { CHECKOUT_URL } from 'config/checkout';
import { CURRENCY } from 'config/common';
import styles from './cartPageStyle';

const useStyles = makeStyles(styles);

const CartPage = ({ cartPage }) => {
  const classes = useStyles();
  const price = +cartPage.product_info?.variants[0]?.price;
  const originalPrice = +cartPage.product_info?.variants[0]?.compare_at_price;
  const quantityLimit = +cartPage.quantity_limit;
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { region } = router.query;

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'view_cart',
      items: [
        {
          item_id: cartPage.product_info?.variants[0].id,
          item_name: cartPage.product_info.title,
          price: price,
          quantity: quantity,
        },
      ],
      currency: CURRENCY[region.toUpperCase()],
      value: price,
    });
  }, [quantity, price, cartPage, region]);

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
            src={cartPage.product_image.url}
            layout="fill"
            alt="shopping-cart-kv"
          />
        </div>
        <div className={classes.content}>
          <div className={classes.contentTitle}>
            <div className={classes.borderTop} />
            <div className={classes.contentTitleText}>{cartPage.title}</div>
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
                  (1 - price / originalPrice) *
                  100
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
              href={CHECKOUT_URL(region, quantity)}
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
