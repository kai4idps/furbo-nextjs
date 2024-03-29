import SavingLivesKeyVisual from 'components/cms/SavingLivesKeyVisual';
import SavingLivesSection from 'components/cms/sections/SavingLivesSection';
import BaseLayout from 'components/layout/BaseLayout';
import SeoManager from 'components/SeoManager';
import {
  fetchCampaignData,
  fetchSavingLivesPageData,
  fetchSeoData,
  fetchHeaderFooterData,
} from 'src/prismicData';
import { REVALIDATE_TIME } from 'config/common';
import { REGION_INFO, PATHS } from 'config/navigation';

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

export const getStaticProps = async ({ params }) => {
  const code = params.region.toUpperCase();
  const language = REGION_INFO[code].language;
  const campaignData = await fetchCampaignData(language);
  const savingLivesPageData = await fetchSavingLivesPageData(language);
  const contentData = await fetchHeaderFooterData(language);
  const seoData = await fetchSeoData(language);
  const savingLivesSeo = seoData.list.find(
    (item) => item.component_key === 'SAVING_LIVES',
  );
  return {
    props: {
      campaign: campaignData,
      savingLivesPage: savingLivesPageData,
      seo: savingLivesSeo,
      content: contentData,
    },
    revalidate: REVALIDATE_TIME,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: PATHS,
    fallback: false,
  };
};

export default SavingLives;
