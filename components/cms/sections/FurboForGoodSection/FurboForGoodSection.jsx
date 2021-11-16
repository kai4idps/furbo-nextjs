import { Children } from 'react';
import RenderSlice from 'components/cms/RenderSlice';

const FurboForGoodSection = ({ ffgPage }) => {
  return (
    <>
      {Children.toArray(
        ffgPage.body.map((slice) => (
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
