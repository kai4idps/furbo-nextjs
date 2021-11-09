import SavingLivesKeyVisual from 'components/cms/SavingLivesKeyVisual';
import SavingLivesSection from 'components/cms/sections/SavingLivesSection';
import BaseLayout from 'components/layout/BaseLayout';
import SeoManager from 'components/SeoManager';
import { wrapper } from 'redux/configureStore';
import { updateRegion } from 'redux/features/region/regionSlice';
import {
  fetchCampaignData,
  fetchSavingLivesPageData,
  fetchSeoData,
  fetchHeaderFooterData,
} from 'src/prismicData';
import { REVALIDATE_TIME } from 'config/common';
import { REGION_INFO } from 'config/navigation';

const SavingLives = ({ campaign, savingLivesPage, seo, content }) => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <SeoManager seo={seo} />
      <BaseLayout campaign={campaign} content={content}>
        <SavingLivesKeyVisual savingLivesPage={savingLivesPage} />
        <SavingLivesSection savingLivesPage={savingLivesPage} />
      </BaseLayout>
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const campaignData = await fetchCampaignData('en-ca');
  const savingLivesPageData = await fetchSavingLivesPageData('en-ca');
  const contentData = await fetchHeaderFooterData('en-ca');
  const seoData = await fetchSeoData('en-ca');
  const savingLivesSeo = seoData.list.find(
    (item) => item.component_key === 'SAVING_LIVES',
  );
  store.dispatch(updateRegion(REGION_INFO.CA));
  return {
    props: {
      campaign: campaignData,
      savingLivesPage: savingLivesPageData,
      seo: savingLivesSeo,
      content: contentData,
    },
    revalidate: REVALIDATE_TIME,
  };
});

export default SavingLives;
