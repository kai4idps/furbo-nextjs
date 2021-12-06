import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import Paper from '@material-ui/core/Paper';
import Image from 'components/Image';
import ShopButton from 'components/cms/elements/ShopButton';
import LearnButton from 'components/cms/elements/LearnButton';
import { CURRENCY } from 'config/common';
import { isEmpty } from 'src/helpers';
import styles from './productButtonStyle';

const useStyles = makeStyles(styles);

const ProductButton = ({
  productInfo,
  productName,
  productType,
  productText = '',
  buttonText,
}) => {
  const classes = useStyles();
  const router = useRouter();
  const { region } = router.query;

  useEffect(() => {
    if (!isEmpty(productInfo)) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'view_product',
        product_id: productInfo.product_id,
        product_name: productInfo.title,
        currency: CURRENCY[region],
        value: productInfo.price,
      });
    }
  }, [productInfo, region]);

  const addToCart = () => {
    if (!isEmpty(productInfo)) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'add_to_cart',
        items: [
          {
            item_id: productInfo.product_id,
            item_name: productInfo.title,
            price: productInfo.price,
            quantity: 1,
          },
        ],
        currency: CURRENCY[region],
        value: productInfo.price,
      });
    }
  };

  return (
    <Paper className={classes.buttonPaper} elevation={3}>
      <Image
        className={classes.productImage}
        alt={productInfo.image.alt}
        src={productInfo.image.src}
      />
      <div className={classes.buttonText}>
        {productName}
        {productType === 'Furbo Dog Camera' && (
          <div>
            <span className={classes.price}>${productInfo.price}</span>
            {'   '}
            <span className={classes.originalPrice}>
              ${productInfo.compare_at_price}
            </span>
          </div>
        )}
        {productType !== 'Furbo Dog Camera' && (
          <div className={classes.price}>{productText}</div>
        )}
      </div>
      <div className={classes.buttonContainer}>
        {productType === 'Furbo Dog Camera' && (
          <ShopButton
            className={classes.shopButton}
            shopButtonText={buttonText}
            center={true}
            onClick={addToCart}
          />
        )}
        {productType === 'Furbo Nanny Cam Bundle' && (
          <LearnButton
            className={classes.learnButton}
            color="Grey"
            learnButtonText={buttonText}
            link={`/${region}/products/furbo-nanny-cam-bundle`}
          />
        )}
      </div>
    </Paper>
  );
};

export default ProductButton;

ProductButton.propTypes = {
  productInfo: PropTypes.object,
  productName: PropTypes.string.isRequired,
  productType: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
