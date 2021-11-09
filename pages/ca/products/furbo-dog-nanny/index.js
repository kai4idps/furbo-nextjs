import FurboDogNannySection from 'components/cms/sections/FurboDogNannySection';
import BaseLayout from 'components/layout/BaseLayout';
import SeoManager from 'components/SeoManager';
import { wrapper } from 'redux/configureStore';
import { updateRegion } from 'redux/features/region/regionSlice';
import {
  fetchCampaignData,
  fetchFdnPageData,
  fetchSeoData,
  fetchHeaderFooterData,
} from 'src/prismicData';
import { REVALIDATE_TIME } from 'config/common';
import { REGION_INFO } from 'config/navigation';

const FurboDogNanny = ({ campaign, fdnPage, seo, content }) => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <SeoManager seo={seo} />
      <BaseLayout campaign={campaign} content={content}>
        <FurboDogNannySection fdnPage={fdnPage} />
      </BaseLayout>
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const campaignData = await fetchCampaignData('en-ca');
  const fdnPageData = await fetchFdnPageData('en-ca');
  const contentData = await fetchHeaderFooterData('en-ca');
  const seoData = await fetchSeoData('en-ca');
  const FdnSeo = seoData.list.find(
    (item) => item.component_key === 'FURBO_DOG_NANNY',
  );
  store.dispatch(updateRegion(REGION_INFO.CA));
  return {
    props: {
      campaign: campaignData,
      fdnPage: fdnPageData,
      seo: FdnSeo,
      content: contentData,
    },
    revalidate: REVALIDATE_TIME,
  };
});

export default FurboDogNanny;
