import { Children } from 'react';
import dynamic from 'next/dynamic';
const DynamicRenderSlice = dynamic(() => import('components/cms/RenderSlice'), {
  loading: () => <></>,
});

const FaasSection = ({ faasPage }) => {
  return (
    <>
      {Children.toArray(
        faasPage.body.map((slice) => (
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

export default FaasSection;
