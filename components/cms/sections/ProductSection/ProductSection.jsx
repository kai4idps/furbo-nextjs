import { Children } from 'react';
import RenderSlice from 'components/cms/RenderSlice';

const ProductSection = ({ productPage }) => {
  return (
    <>
      {Children.toArray(
        productPage.body.map((slice) => (
          <RenderSlice
            type={slice.slice_type}
            primary={slice.primary}
            items={slice.items}
          />
        )),
      )}
    </>
  );
};

export default ProductSection;
