import React from 'react';
import KeyVisualSlice from 'components/cms/slices/KeyVisualSlice';
import CardsCarouselSlice from 'components/cms/slices/CardsCarouselSlice';
import SmartAlertsSlice from 'components/cms/slices/SmartAlertsSlice';
import FeatureBlockSlice from 'components/cms/slices/FeatureBlockSlice';
import AccordionFeatureListSlice from 'components/cms/slices/AccordionFeatureListSlice';
import AccordionKeyVisualSlice from 'components/cms/slices/AccordionKeyVisualSlice';
import AccordionListSlice from 'components/cms/slices/AccordionListSlice';
import AccordionSpecsListSlice from 'components/cms/slices/AccordionSpecsListSlice';
import AccordionCardsSlice from 'components/cms/slices/AccordionCardsSlice';

const renderSlice = (slice) => {
  if (slice.slice_type === 'key_visual') {
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
  } else if (slice.slice_type === 'cards_carousel') {
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
  } else if (slice.slice_type === 'smart_alerts') {
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
  } else if (slice.slice_type === 'feature_block') {
    return (
      <FeatureBlockSlice
        title={slice.primary.title}
        titleIcon={slice.primary.title_icon}
        titleUnderline={slice.primary.title_underline}
        subtitle={slice.primary.subtitle}
        subtitleUnderline={slice.primary.subtitle_underline}
        textContent={slice.primary.text_content}
        gridAlign={slice.primary.grid_align}
        mediaContentDesktop={slice.primary.media_content_desktop}
        mediaContentMobile={slice.primary.media_content_mobile}
        mediaContentCenter={slice.primary.media_content_center}
        content={slice.items}
      />
    );
  } else if (slice.slice_type === 'accordion_feature_list') {
    return (
      <AccordionFeatureListSlice
        title={slice.primary.accordion_title}
        content={slice.items}
      />
    );
  } else if (slice.slice_type === 'accordion_key_visual') {
    return (
      <AccordionKeyVisualSlice
        expand={slice.primary.expand}
        title={slice.primary.accordion_title}
        subtitle={slice.primary.accordion_subtitle}
        textContent={slice.primary.accordion_text_content}
        backgroundImageDesktop={
          slice.primary.accordion_background_image_desktop
        }
        backgroundImageMobile={slice.primary.accordion_background_image_mobile}
      />
    );
  } else if (slice.slice_type === 'accordion_list') {
    return (
      <AccordionListSlice
        expand={slice.primary.expand}
        title={slice.primary.accordion_title}
        content={slice.items}
      />
    );
  } else if (slice.slice_type === 'accordion_specs_list') {
    return (
      <AccordionSpecsListSlice
        expand={slice.primary.expand}
        title={slice.primary.accordion_title}
        mainImage={slice.primary.main_image}
        content={slice.items}
      />
    );
  } else if (slice.slice_type === 'accordion_cards') {
    return (
      <AccordionCardsSlice
        expand={slice.primary.expand}
        title={slice.primary.accordion_title}
        tableTitle={slice.primary.table_title}
        content={slice.items}
      />
    );
  }
  return null;
};

const ProductSection = ({ productPage }) => {
  return (
    <>
      {React.Children.toArray(
        productPage.body.map((slice) => renderSlice(slice)),
      )}
    </>
  );
};

export default ProductSection;
