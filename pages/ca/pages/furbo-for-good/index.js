import FurboForGoodSection from 'components/cms/sections/FurboForGoodSection';
import BaseLayout from 'components/layout/BaseLayout';
import SeoManager from 'components/SeoManager';
import { wrapper } from 'redux/configureStore';
import { updateRegion } from 'redux/features/region/regionSlice';
import {
  fetchCampaignData,
  fetchFfgPageData,
  fetchSeoData,
  fetchHeaderFooterData,
} from 'src/prismicData';
import { REVALIDATE_TIME } from 'config/common';
import { REGION_INFO } from 'config/navigation';

const FurboForGood = ({ campaign, ffgPage, seo, content }) => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <SeoManager seo={seo} />
      <BaseLayout campaign={campaign} content={content}>
        <FurboForGoodSection ffgPage={ffgPage} />
      </BaseLayout>
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const campaignData = await fetchCampaignData('en-ca');
  const ffgPageData = await fetchFfgPageData('en-ca');
  const contentData = await fetchHeaderFooterData('en-ca');
  const seoData = await fetchSeoData('en-ca');
  const ffgSeo = seoData.list.find(
    (item) => item.component_key === 'FURBO_FOR_GOOD',
  );
  store.dispatch(updateRegion(REGION_INFO.CA));
  return {
    props: {
      campaign: campaignData,
      ffgPage: ffgPageData,
      seo: ffgSeo,
      content: contentData,
    },
    revalidate: REVALIDATE_TIME,
  };
});

export default FurboForGood;
