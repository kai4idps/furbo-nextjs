import { Children } from 'react';
import RenderSlice from 'components/cms/RenderSlice';

const FurboForGoodSection = ({ savingLivesPage }) => {
  return (
    <>
      {Children.toArray(
        savingLivesPage.body.map((slice) => (
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

export default FurboForGoodSection;
