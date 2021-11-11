import AccordionFeatureListSlice from 'components/cms/slices/AccordionFeatureListSlice';
import AccordionKeyVisualSlice from 'components/cms/slices/AccordionKeyVisualSlice';
import AccordionListSlice from 'components/cms/slices/AccordionListSlice';
import AccordionSpecsListSlice from 'components/cms/slices/AccordionSpecsListSlice';
import AccordionCardsSlice from 'components/cms/slices/AccordionCardsSlice';
import CardsCarouselSlice from 'components/cms/slices/CardsCarouselSlice';
import FeatureBlockSlice from 'components/cms/slices/FeatureBlockSlice';
import KeyVisualSlice from 'components/cms/slices/KeyVisualSlice';
import SplitLayoutSlice from 'components/cms/slices/SplitLayoutSlice';
import SmartAlertsSlice from 'components/cms/slices/SmartAlertsSlice';
import InfoCardSlice from 'components/cms/slices/InfoCardSlice';
import ImageSlice from 'components/cms/slices/ImageSlice';
import TwoCardsSlice from 'components/cms/slices/TwoCardsSlice';
import LogoSliderSlice from 'components/cms/slices/LogoSliderSlice';

const RenderSectionSlice = (slice) => {
  switch (slice.slice_type) {
    case 'accordion_feature_list':
      return (
        <AccordionFeatureListSlice
          title={slice.primary.accordion_title}
          content={slice.items}
        />
      );
    case 'accordion_key_visual':
      return (
        <AccordionKeyVisualSlice
          expand={slice.primary.expand}
          title={slice.primary.accordion_title}
          subtitle={slice.primary.accordion_subtitle}
          textContent={slice.primary.accordion_text_content}
          backgroundImageDesktop={
            slice.primary.accordion_background_image_desktop
          }
          backgroundImageMobile={
            slice.primary.accordion_background_image_mobile
          }
        />
      );
    case 'accordion_list':
      return (
        <AccordionListSlice
          expand={slice.primary.expand}
          title={slice.primary.accordion_title}
          content={slice.items}
        />
      );
    case 'accordion_specs_list':
      return (
        <AccordionSpecsListSlice
          expand={slice.primary.expand}
          title={slice.primary.accordion_title}
          mainImage={slice.primary.main_image}
          content={slice.items}
        />
      );
    case 'accordion_cards':
      return (
        <AccordionCardsSlice
          expand={slice.primary.expand}
          title={slice.primary.accordion_title}
          tableTitle={slice.primary.table_title}
          content={slice.items}
        />
      );
    case 'cards_carousel':
      return (
        <CardsCarouselSlice
          headingComponents={slice.primary.heading_components}
          title={slice.primary.title}
          subtitle={slice.primary.subtitle}
          titleUnderline={slice.primary.title_underline}
          titleArrow={slice.primary.title_arrow}
          backgroundColor={slice.primary.background_color}
          content={slice.items}
        />
      );
    case 'feature_block':
      return (
        <FeatureBlockSlice
          title={slice.primary.title}
          titleIcon={slice.primary.title_icon}
          titleUnderline={slice.primary.title_underline}
          subtitle={slice.primary.subtitle}
          subtitleUnderline={slice.primary.subtitle_underline}
          gridAlign={slice.primary.grid_align}
          textContent={slice.primary.text_content}
          mediaContentDesktop={slice.primary.media_content_desktop}
          mediaContentMobile={slice.primary.media_content_mobile}
          mediaContentCenter={slice.primary.media_content_center}
          content={slice.items}
        />
      );
    case 'image':
      return (
        <ImageSlice
          imageDesktop={slice.primary.image_desktop}
          imageMobile={slice.primary.image_mobile}
        />
      );
    case 'info_card':
      return (
        <InfoCardSlice
          title={slice.primary.title}
          titleUnderline={slice.primary.title_underline}
          subtitle={slice.primary.subtitle}
          backgroundColor={slice.primary.background_color}
          content={slice.items}
        />
      );
    case 'key_visual':
      return (
        <KeyVisualSlice
          title={slice.primary.title}
          subtitle={slice.primary.subtitle}
          titleUnderline={slice.primary.title_underline}
          gridAlign={slice.primary.grid_align}
          textAlign={slice.primary.text_align}
          mobileGridHeight={slice.primary.mobile_grid_height}
          backgroundImageDesktop={slice.primary.background_image_desktop}
          backgroundImageMobile={slice.primary.background_image_mobile}
          bannerImageMobile={slice.primary.banner_image_mobile}
          content={slice.items}
        />
      );
    case 'split_layout':
      return (
        <SplitLayoutSlice
          title={slice.primary.title}
          subtitle={slice.primary.subtitle}
          image={slice.primary.image}
          gridAlign={slice.primary.grid_align}
          content={slice.items}
        />
      );
    case 'smart_alerts':
      return (
        <SmartAlertsSlice
          title={slice.primary.title}
          titleIcon={slice.primary.title_icon}
          titleUnderline={slice.primary.title_underline}
          subtitle={slice.primary.subtitle}
          backgroundImageDesktop={slice.primary.background_image_desktop}
          backgroundImageMobile={slice.primary.background_image_mobile}
          content={slice.items}
          textContent={slice.primary.text_content}
        />
      );
    case 'two_cards':
      return (
        <TwoCardsSlice
          title={slice.primary.title}
          titleUnderline={slice.primary.title_underline}
          imageFullWidth={slice.primary.image_full_width}
          enableElevation={slice.primary.enable_elevation}
          content={slice.items}
        />
      );
    case 'logo_slider':
      return <LogoSliderSlice content={slice.items} />;
    default:
      return null;
  }
};

export default RenderSectionSlice;
