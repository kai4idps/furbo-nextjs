import React from 'react';
import RenderSectionSlice from 'components/cms/RenderSectionSlice';

const FurboForGoodSection = ({ ffgPage }) => {
  return (
    <>
      {React.Children.toArray(
        ffgPage.body.map((slice) => RenderSectionSlice(slice)),
      )}
    </>
  );
};

export default FurboForGoodSection;
