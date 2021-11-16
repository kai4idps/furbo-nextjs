import { Children } from 'react';
import RenderSlice from 'components/cms/RenderSlice';

const FurboDogNannySection = ({ fdnPage }) => {
  return (
    <>
      {Children.toArray(
        fdnPage.body.map((slice) => (
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

export default FurboDogNannySection;
