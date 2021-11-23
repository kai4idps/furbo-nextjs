import BaseLayout from 'components/layout/BaseLayout';
import { fetchCampaignData, fetchHeaderFooterData } from 'src/prismicData';
import { REVALIDATE_TIME } from 'config/common';
import { REGION_INFO, PATHS } from 'config/navigation';
import FourOfFour from 'components/cms/FourOfFour';

const FourOhFour = ({ campaign, content }) => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <BaseLayout campaign={campaign} content={content}>
        <FourOfFour content={content.image_404} />
      </BaseLayout>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const code = params.region.toUpperCase();
  const language = REGION_INFO[code].language;
  const campaignData = await fetchCampaignData(language);
  const contentData = await fetchHeaderFooterData(language);

  return {
    props: {
      campaign: campaignData,
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

export default FourOhFour;
