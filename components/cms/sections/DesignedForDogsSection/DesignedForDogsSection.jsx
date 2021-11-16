import { Children } from 'react';
import RenderSlice from 'components/cms/RenderSlice';

const DesignedForDogsSection = ({ dfdPage }) => {
  return (
    <>
      {Children.toArray(
        dfdPage.body.map((slice) => (
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

export default DesignedForDogsSection;
