import React from 'react';
import RenderSectionSlice from 'components/cms/RenderSectionSlice';

const ProductSection = ({ productPage }) => {
  return (
    <>
      {React.Children.toArray(
        productPage.body.map((slice) => RenderSectionSlice(slice)),
      )}
    </>
  );
};

export default ProductSection;
