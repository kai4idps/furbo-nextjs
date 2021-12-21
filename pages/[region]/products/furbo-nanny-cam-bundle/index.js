import FaasSection from 'components/cms/sections/FaasSection';
import BaseLayout from 'components/layout/BaseLayout';
import SeoManager from 'components/SeoManager';
import {
  fetchCampaignData,
  fetchFaasPageData,
  fetchSeoData,
  fetchHeaderFooterData,
} from 'src/prismicData';
import Error from 'pages/404';
import { REVALIDATE_TIME } from 'config/common';
import { REGION_INFO, PATHS } from 'config/navigation';

const Faas = ({ campaign, faasPage, seo, content }) => {
  return (
    <>
      {content.enable_faas && (
        <>
          <SeoManager seo={seo} />
          <BaseLayout campaign={campaign} content={content}>
            <FaasSection faasPage={faasPage} />
          </BaseLayout>
        </>
      )}
      {!content.enable_faas && <Error campaign={campaign} content={content} />}
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const language = REGION_INFO[params.region].language;
  const contentData = await fetchHeaderFooterData(language);
  const campaignData = await fetchCampaignData(language);
  if (contentData.enable_faas !== true) {
    return {
      props: {
        campaign: campaignData,
        content: contentData,
      },
      revalidate: REVALIDATE_TIME,
    };
  }
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
