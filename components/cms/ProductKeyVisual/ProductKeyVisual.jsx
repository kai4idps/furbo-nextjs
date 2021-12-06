import { Children, useMemo } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { RichText } from 'prismic-reactjs';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import VisibleSensorAnimation from 'components/VisibleSensorAnimation';
import RenderElement from 'components/cms/RenderElement';
import ProductSlide from './ProductSlide';
import ShopButton from 'components/button/ShopButton';
import { isEmpty } from 'src/helpers';
import styles from './productKeyVisualStyle';

const useStyles = makeStyles(styles);

const ProductKeyVisual = ({ productPage }) => {
  const classes = useStyles();
  const router = useRouter();
  const { region, productId } = router.query;

  const productInfo = useMemo(() => {
    return isEmpty(productId)
      ? productPage.product_list[0][`product_info_${region}`]
      : productPage.product_list.find(
          (item) => +item[`product_info_${region}`].product_id === +productId,
        )?.[`product_info_${region}`] ||
          productPage.product_list[0][`product_info_${region}`];
  }, [productId, region, productPage.product_list]);

  const slides = isEmpty(productId)
    ? productPage.product_slides
    : [
        {
          slide: {
            height: 500,
            width: 500,
            kind: 'image',
            url: productInfo.image.src,
          },
        },
        ...productPage.product_slides.slice(1),
      ];

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
            <ProductSlide slides={slides} />
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
                {isEmpty(productId) ? (
                  RichText.render(productPage.title)
                ) : (
                  <h1>{productInfo.title}</h1>
                )}
              </div>
              <div className={classes.subtitle}>
                {isEmpty(productId) ? (
                  RichText.render(productPage.subtitle)
                ) : (
                  <p>{productInfo.description}</p>
                )}
              </div>
              {isEmpty(productId) && (
                <div
                  className={classes.colorText}
                  style={{
                    color: `${productPage.text_color}`,
                  }}
                >
                  {RichText.render(productPage.color_text)}
                </div>
              )}
            </Hidden>
            {isEmpty(productId) &&
              Children.toArray(
                productPage.product_button.map((item, index) => (
                  <>
                    {index !== 0 && <br />}
                    <RenderElement
                      type={item.button.type}
                      data={item.button.data}
                    />
                  </>
                )),
              )}
            {!isEmpty(productId) && (
              <ShopButton className={classes.shopButton} text={'Shop Now'} />
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
