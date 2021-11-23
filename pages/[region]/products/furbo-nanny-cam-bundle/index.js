import FaasSection from 'components/cms/sections/FaasSection';
import BaseLayout from 'components/layout/BaseLayout';
import SeoManager from 'components/SeoManager';
import {
  fetchCampaignData,
  fetchFaasPageData,
  fetchSeoData,
  fetchHeaderFooterData,
} from 'src/prismicData';
import { REVALIDATE_TIME } from 'config/common';
import { REGION_INFO, PATHS } from 'config/navigation';

const Faas = ({ campaign, faasPage, seo, content }) => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <SeoManager seo={seo} />
      <BaseLayout campaign={campaign} content={content}>
        <FaasSection faasPage={faasPage} />
      </BaseLayout>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const code = params.region.toUpperCase();
  const language = REGION_INFO[code].language;
  const contentData = await fetchHeaderFooterData(language);
  if (contentData.enable_faas !== true) {
    return {
      notFound: true,
    };
  }
  const campaignData = await fetchCampaignData(language);
  const faasPageData = await fetchFaasPageData(language);
  const seoData = await fetchSeoData(language);
  const FdnSeo = seoData.list.find((item) => item.component_key === 'FAAS');
  return {
    props: {
      campaign: campaignData,
      seo: FdnSeo,
      content: contentData,
      faasPage: faasPageData,
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

export default Faas;
