import React from 'react';
import RenderSectionSlice from 'components/cms/RenderSectionSlice';

const FurboForGoodSection = ({ savingLivesPage }) => {
  return (
    <>
      {React.Children.toArray(
        savingLivesPage.body.map((slice) => RenderSectionSlice(slice)),
      )}
    </>
  );
};

export default FurboForGoodSection;
