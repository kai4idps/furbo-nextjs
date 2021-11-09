import BaseLayout from 'components/layout/BaseLayout';
import BrandStoryPage from 'components/cms/BrandStoryPage';
import SeoManager from 'components/SeoManager';
import { wrapper } from 'redux/configureStore';
import { updateRegion } from 'redux/features/region/regionSlice';
import {
  fetchCampaignData,
  fetchBrandStoryPageData,
  fetchSeoData,
  fetchHeaderFooterData,
} from 'src/prismicData';
import { REVALIDATE_TIME } from 'config/common';
import { REGION_INFO } from 'config/navigation';

const BrandStory = ({ campaign, seo, content, brandStoryPage }) => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <SeoManager seo={seo} />
      <BaseLayout campaign={campaign} content={content}>
        <BrandStoryPage brandStoryPage={brandStoryPage} />
      </BaseLayout>
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const campaignData = await fetchCampaignData('en-ca');
  const contentData = await fetchHeaderFooterData('en-ca');
  const brandStoryPageData = await fetchBrandStoryPageData('en-ca');
  const seoData = await fetchSeoData('en-ca');
  const dfdSeo = seoData.list.find(
    (item) => item.component_key === 'BRAND_STORY',
  );
  store.dispatch(updateRegion(REGION_INFO.CA));
  return {
    props: {
      campaign: campaignData,
      seo: dfdSeo,
      content: contentData,
      brandStoryPage: brandStoryPageData,
    },
    revalidate: REVALIDATE_TIME,
  };
});

export default BrandStory;
