import BaseLayout from 'components/layout/BaseLayout';
import CookiePolicyPage from 'components/cms/CookiePolicyPage';
import { fetchCampaignData, fetchHeaderFooterData } from 'src/prismicData';
import { REGION_INFO } from 'config/navigation';

const CookiePolicy = ({ campaign, content }) => {
  return (
    <BaseLayout campaign={campaign} content={content}>
      <CookiePolicyPage
        title={content.cookie_consent_title}
        content={content.cookie_consent_content}
      />
    </BaseLayout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const language = REGION_INFO[params.region].language;
  const campaignData = await fetchCampaignData(language);
  const contentData = await fetchHeaderFooterData(language);

  if (contentData.enable_cookie_consent !== true) {
    return {
      redirect: {
        permanent: false,
        destination: `/${params.region}`,
      },
    };
  }

  return {
    props: {
      campaign: campaignData,
      content: contentData,
    },
  };
};

export default CookiePolicy;
