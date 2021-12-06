import PropTypes from 'prop-types';
import AccordionCardsSlice from 'components/cms/slices/AccordionCardsSlice';
import AccordionFeatureListSlice from 'components/cms/slices/AccordionFeatureListSlice';
import AccordionKeyVisualSlice from 'components/cms/slices/AccordionKeyVisualSlice';
import AccordionListSlice from 'components/cms/slices/AccordionListSlice';
import AccordionSpecsListSlice from 'components/cms/slices/AccordionSpecsListSlice';
import CardsCarouselSlice from 'components/cms/slices/CardsCarouselSlice';
import FeatureBlockSlice from 'components/cms/slices/FeatureBlockSlice';
import ImageSlice from 'components/cms/slices/ImageSlice';
import InfoCardSlice from 'components/cms/slices/InfoCardSlice';
import KeyVisualSlice from 'components/cms/slices/KeyVisualSlice';
import LogoSliderSlice from 'components/cms/slices/LogoSliderSlice';
import SmartAlertsSlice from 'components/cms/slices/SmartAlertsSlice';
import SplitLayoutSlice from 'components/cms/slices/SplitLayoutSlice';
import TwoCardsSlice from 'components/cms/slices/TwoCardsSlice';
import ComparisonTableSlice from 'components/cms/slices/ComparisonTableSlice';
import { isEmpty } from 'src/helpers';

const RenderSlice = ({ type, primary, items }) => {
  if (isEmpty(type) || isEmpty(primary)) {
    return null;
  }
  switch (type) {
    case 'accordion_feature_list':
      return (
        <AccordionFeatureListSlice
          title={primary.accordion_title}
          content={items}
        />
      );
    case 'accordion_key_visual':
      return (
        <AccordionKeyVisualSlice
          expand={primary.expand}
          title={primary.accordion_title}
          subtitle={primary.accordion_subtitle}
          textContent={primary.accordion_text_content}
          backgroundImageDesktop={primary.accordion_background_image_desktop}
          backgroundImageMobile={primary.accordion_background_image_mobile}
        />
      );
    case 'accordion_list':
      return (
        <AccordionListSlice
          expand={primary.expand}
          title={primary.accordion_title}
          content={items}
        />
      );
    case 'accordion_specs_list':
      return (
        <AccordionSpecsListSlice
          expand={primary.expand}
          title={primary.accordion_title}
          mainImage={primary.main_image}
          content={items}
        />
      );
    case 'accordion_cards':
      return (
        <AccordionCardsSlice
          expand={primary.expand}
          title={primary.accordion_title}
          tableTitle={primary.table_title}
          content={items}
        />
      );
    case 'cards_carousel':
      return (
        <CardsCarouselSlice
          headingComponents={primary.heading_components}
          title={primary.title}
          subtitle={primary.subtitle}
          titleUnderline={primary.title_underline}
          titleArrow={primary.title_arrow}
          backgroundColor={primary.background_color}
          singleSlide={primary.single_slide}
          content={items}
        />
      );
    case 'feature_block':
      return (
        <FeatureBlockSlice
          title={primary.title}
          titleIcon={primary.title_icon}
          titleUnderline={primary.title_underline}
          subtitle={primary.subtitle}
          subtitleUnderline={primary.subtitle_underline}
          gridAlign={primary.grid_align}
          textContent={primary.text_content}
          mediaContentDesktop={primary.media_content_desktop}
          mediaContentMobile={primary.media_content_mobile}
          mediaContentCenter={primary.media_content_center}
          content={items}
        />
      );
    case 'image':
      return (
        <ImageSlice
          backgroundColor={primary.background_color}
          imageDesktop={primary.image_desktop}
          imageMobile={primary.image_mobile}
        />
      );
    case 'info_card':
      return (
        <InfoCardSlice
          title={primary.title}
          titleUnderline={primary.title_underline}
          subtitle={primary.subtitle}
          backgroundColor={primary.background_color}
          content={items}
        />
      );
    case 'key_visual':
      return (
        <KeyVisualSlice
          title={primary.title}
          subtitle={primary.subtitle}
          titleUnderline={primary.title_underline}
          gridAlign={primary.grid_align}
          textAlign={primary.text_align}
          mobileGridHeight={primary.mobile_grid_height}
          backgroundImageDesktop={primary.background_image_desktop}
          backgroundImageMobile={primary.background_image_mobile}
          bannerImageMobile={primary.banner_image_mobile}
          content={items}
        />
      );
    case 'split_layout':
      return (
        <SplitLayoutSlice
          title={primary.title}
          subtitle={primary.subtitle}
          image={primary.image}
          gridAlign={primary.grid_align}
          content={items}
        />
      );
    case 'smart_alerts':
      return (
        <SmartAlertsSlice
          title={primary.title}
          titleIcon={primary.title_icon}
          titleUnderline={primary.title_underline}
          subtitle={primary.subtitle}
          backgroundImageDesktop={primary.background_image_desktop}
          backgroundImageMobile={primary.background_image_mobile}
          content={items}
          textContent={primary.text_content}
        />
      );
    case 'two_cards':
      return (
        <TwoCardsSlice
          title={primary.title}
          titleUnderline={primary.title_underline}
          imageFullWidth={primary.image_full_width}
          enableElevation={primary.enable_elevation}
          content={items}
        />
      );
    case 'logo_slider':
      return <LogoSliderSlice content={items} />;
    case 'comparison_table':
      return (
        <ComparisonTableSlice
          itemAName={primary.item_a_name}
          itemAImage={primary.item_a_image}
          itemBName={primary.item_b_name}
          itemBImage={primary.item_b_image}
          content={items}
        />
      );
    default:
      return null;
  }
};

RenderSlice.propTypes = {
  type: PropTypes.string.isRequired,
  primary: PropTypes.object.isRequired,
  item: PropTypes.object,
};

export default RenderSlice;
