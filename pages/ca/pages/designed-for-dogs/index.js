import DesignedForDogsSection from 'components/cms/sections/DesignedForDogsSection';
import BaseLayout from 'components/layout/BaseLayout';
import SeoManager from 'components/SeoManager';
import { wrapper } from 'redux/configureStore';
import { updateRegion } from 'redux/features/region/regionSlice';
import {
  fetchCampaignData,
  fetchDfdPageData,
  fetchSeoData,
  fetchHeaderFooterData,
} from 'src/prismicData';
import { REVALIDATE_TIME } from 'config/common';
import { REGION_INFO } from 'config/navigation';

const DesignedForDogs = ({ campaign, dfdPage, seo, content }) => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <SeoManager seo={seo} />
      <BaseLayout campaign={campaign} content={content}>
        <DesignedForDogsSection dfdPage={dfdPage} />
      </BaseLayout>
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const campaignData = await fetchCampaignData('en-ca');
  const dfdPageData = await fetchDfdPageData('en-ca');
  const contentData = await fetchHeaderFooterData('en-ca');
  const seoData = await fetchSeoData('en-ca');
  const dfdSeo = seoData.list.find(
    (item) => item.component_key === 'DESIGNED_FOR_DOGS',
  );
  store.dispatch(updateRegion(REGION_INFO.CA));
  return {
    props: {
      campaign: campaignData,
      dfdPage: dfdPageData,
      seo: dfdSeo,
      content: contentData,
    },
    revalidate: REVALIDATE_TIME,
  };
});

export default DesignedForDogs;
