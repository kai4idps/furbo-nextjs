import { Children } from 'react';
import dynamic from 'next/dynamic';
const DynamicRenderSlice = dynamic(() => import('components/cms/RenderSlice'), {
  loading: () => <></>,
});

const HomeSection = ({ homepage }) => {
  return (
    <>
      {Children.toArray(
        homepage.map((slice) => (
          <DynamicRenderSlice
            type={slice.slice_type}
            primary={slice.primary}
            items={slice.items}
          />
        )),
      )}
    </>
  );
};

export default HomeSection;
