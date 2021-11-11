import React from 'react';
import RenderSectionSlice from 'components/cms/RenderSectionSlice';

const HomeSection = ({ homepage }) => {
  return (
    <>
      {React.Children.toArray(
        homepage.map((slice) => RenderSectionSlice(slice)),
      )}
    </>
  );
};

export default HomeSection;
