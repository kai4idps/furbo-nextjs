import { Children } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { RichText } from 'prismic-reactjs';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import VisibleSensorAnimation from 'components/VisibleSensorAnimation';
import RenderElement from 'components/cms/RenderElement';
import ProductSlide from './ProductSlide';
import styles from './productKeyVisualStyle';

const useStyles = makeStyles(styles);

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
            {Children.toArray(
              productPage.product_button.map((item) => (
                <RenderElement
                  type={item.button.type}
                  data={item.button.data}
                />
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
