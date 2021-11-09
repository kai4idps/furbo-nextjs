import Head from 'next/head';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import parse from 'html-react-parser';

const SeoManager = ({ seo }) => {
  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="title" content={seo.meta_title}></meta>
      <meta name="description" content={seo.meta_description}></meta>
      {parse(RichText.asText(seo.custom_code))}
    </Head>
  );
};

SeoManager.propTypes = {
  seo: PropTypes.object.isRequired,
};

export default SeoManager;
