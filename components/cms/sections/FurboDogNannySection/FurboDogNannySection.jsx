import React from 'react';
import RenderSectionSlice from 'components/cms/RenderSectionSlice';

const FurboDogNannySection = ({ fdnPage }) => {
  return (
    <>
      {React.Children.toArray(
        fdnPage.body.map((slice) => RenderSectionSlice(slice)),
      )}
    </>
  );
};

export default FurboDogNannySection;
