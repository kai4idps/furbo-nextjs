import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { RichText } from 'prismic-reactjs';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import VisibleSensorAnimation from 'components/VisibleSensorAnimation';
import Image from 'components/Image';
import ShopButton from 'components/cms/elements/ShopButton';
import { CURRENCY } from 'config/common';
import ProductSlide from './ProductSlide';
import { isEmpty } from 'src/helpers';
import styles from './productKeyVisualStyle';

const useStyles = makeStyles(styles);

const RenderButton = ({ item }) => {
  const classes = useStyles();

  const region = useSelector((state) => state.region.code);

  const addToCart = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'add_to_cart',
      items: [
        {
          item_id: item.product_info.variants[0].id,
          item_name: item.product_info.title,
          price: item.product_info.variants[0].price,
          quantity: 1,
        },
      ],
      currency: CURRENCY[region.toUpperCase()],
      value: item.product_info.variants[0].price,
    });
  };

  useEffect(() => {
    if (!isEmpty(region)) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'view_product',
        product_id: item.product_info.variants[0].id,
        product_name: item.product_info.title,
        currency: CURRENCY[region.toUpperCase()],
        value: item.product_info.variants[0].price,
      });
    }
  }, [region, item]);

  return (
    <Paper className={classes.buttonPaper} elevation={3}>
      <Image
        className={classes.productImage}
        alt={item.product_info.title}
        src={item.product_info.image.src}
      />
      <div className={classes.buttonText}>
        {item.product_name}
        <div>
          <span className={classes.price}>
            ${item.product_info.variants[0].price}
          </span>
          {'   '}
          <span className={classes.originalPrice}>
            ${item.product_info.variants[0].compare_at_price}
          </span>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        {item.product_type === 'Furbo Dog Camera' && (
          <ShopButton
            className={classes.shopButton}
            shopButtonText={item.button_text}
            center={true}
            onClick={addToCart}
          />
        )}
      </div>
    </Paper>
  );
};

RenderButton.propTypes = {
  item: PropTypes.object.isRequired,
};

const ProductKeyVisual = ({ productPage }) => {
  const classes = useStyles();
  return (
    <VisibleSensorAnimation animation="grow">
      <div className={classes.root}>
        <Grid container>
          <Grid
            className={classes.leftGrid}
            item
            xl={7}
            lg={7}
            md={7}
            sm={12}
            xs={12}
          >
            <ProductSlide slides={productPage.product_slides} />
          </Grid>
          <Grid
            className={classes.rightGrid}
            item
            xl={5}
            lg={5}
            md={5}
            sm={12}
            xs={12}
          >
            <Hidden smDown>
              <div className={classes.title}>
                {RichText.render(productPage.title)}
              </div>
              <div className={classes.subtitle}>
                {RichText.render(productPage.subtitle)}
              </div>
              <div
                className={classes.colorText}
                style={{
                  color: `${productPage.text_color}`,
                }}
              >
                {RichText.render(productPage.color_text)}
              </div>
            </Hidden>
            {React.Children.toArray(
              productPage.product_button.map((item) => (
                <RenderButton item={item.button.data} />
              )),
            )}
          </Grid>
        </Grid>
      </div>
    </VisibleSensorAnimation>
  );
};

ProductKeyVisual.propTypes = {
  productPage: PropTypes.object.isRequired,
};

export default ProductKeyVisual;
