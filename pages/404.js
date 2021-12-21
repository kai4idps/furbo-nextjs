import BaseLayout from 'components/layout/BaseLayout';
import { fetchCampaignData, fetchHeaderFooterData } from 'src/prismicData';
import { REVALIDATE_TIME } from 'config/common';
import FallbackPage from 'components/cms/FallbackPage';

const Fallback = ({ campaign, content }) => {
  return (
    <BaseLayout campaign={campaign} content={content}>
      <FallbackPage content={content.image_404} />
    </BaseLayout>
  );
};

export const getStaticProps = async () => {
  const campaignData = await fetchCampaignData('en-us');
  const contentData = await fetchHeaderFooterData('en-us');
  return {
    props: {
      campaign: campaignData,
      content: contentData,
    },
    revalidate: REVALIDATE_TIME,
  };
};

export default Fallback;
