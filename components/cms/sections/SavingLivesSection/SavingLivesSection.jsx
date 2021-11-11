import React from 'react';
import CardsCarouselSlice from 'components/cms/slices/CardsCarouselSlice';
import TwoCardsSlice from 'components/cms/slices/TwoCardsSlice';
import ImageSlice from 'components/cms/slices/ImageSlice';

const renderSlice = (slice) => {
  if (slice.slice_type === 'image') {
    return (
      <ImageSlice
        imageDesktop={slice.primary.image_desktop}
        imageMobile={slice.primary.image_mobile}
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
  } else if (slice.slice_type === 'two_cards') {
    return (
      <TwoCardsSlice
        title={slice.primary.title}
        titleUnderline={slice.primary.title_underline}
        imageFullWidth={slice.primary.image_full_width}
        enableElevation={slice.primary.enable_elevation}
        content={slice.items}
      />
    );
  }
  return null;
};

const FurboForGoodSection = ({ savingLivesPage }) => {
  return (
    <>
      {React.Children.toArray(
        savingLivesPage.body.map((slice) => renderSlice(slice)),
      )}
    </>
  );
};

export default FurboForGoodSection;
