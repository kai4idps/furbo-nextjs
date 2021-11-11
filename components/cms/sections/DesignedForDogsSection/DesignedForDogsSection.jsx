import React from 'react';
import RenderSectionSlice from 'components/cms/RenderSectionSlice';

const DesignedForDogsSection = ({ dfdPage }) => {
  return (
    <>
      {React.Children.toArray(
        dfdPage.body.map((slice) => RenderSectionSlice(slice)),
      )}
    </>
  );
};

export default DesignedForDogsSection;
