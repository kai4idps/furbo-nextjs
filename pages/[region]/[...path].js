import Error from 'pages/404';
import { fetchCampaignData, fetchHeaderFooterData } from 'src/prismicData';
import { REGION_INFO } from 'config/navigation';

const CatchAllPage = ({ campaign, content }) => {
  return <Error campaign={campaign} content={content} />;
};

export const getServerSideProps = async ({ params }) => {
  const { region } = params;
  const language = REGION_INFO[region.toUpperCase()].language;
  const campaignData = await fetchCampaignData(language);
  const contentData = await fetchHeaderFooterData(language);
  return {
    props: {
      campaign: campaignData,
      content: contentData,
    },
  };
};

export default CatchAllPage;
