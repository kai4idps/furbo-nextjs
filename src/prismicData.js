import { client } from 'config/prismic';

export const fetchCampaignData = async (language) => {
  const data = await client.getSingle('campaign', {
    lang: language,
    fetchLinks: [
      'shop_button.shop_button_text',
      'shop_button.center',
      'video_button.watch_video_text',
      'video_button.center',
      'video_button.video_link',
    ],
  });
  return data.data;
};

export const fetchSeoData = async (language) => {
  const data = await client.getSingle('seo_manager', {
    lang: language,
  });
  return data.data;
};

export const fetchHomepageData = async (language) => {
  const data = await client.getSingle('homepage_section', {
    lang: language,
    fetchLinks: [
      'grid_element.content',
      'shop_button.shop_button_text',
      'shop_button.center',
      'learn_button.learn_button_text',
      'learn_button.color',
      'learn_button.link',
    ],
  });
  return data.data.body;
};

export const fetchProductPageData = async (language) => {
  const data = await client.getSingle('product_page_section', {
    lang: language,
    fetchLinks: [
      'product_button.product_name',
      'product_button.button_text',
      'product_button.product_info',
      'product_button.product_type',
      'grid_element.content',
      'shop_button.shop_button_text',
      'shop_button.center',
      'learn_button.learn_button_text',
      'learn_button.color',
      'learn_button.link',
    ],
  });
  return data.data;
};

export const fetchFdnPageData = async (language) => {
  const data = await client.getSingle('fdn_page_section', {
    lang: language,
    fetchLinks: [
      'grid_element.content',
      'video_button.watch_video_text',
      'video_button.center',
      'video_button.video_link',
      'shop_button.shop_button_text',
      'shop_button.center',
      'learn_button.learn_button_text',
      'learn_button.color',
      'learn_button.link',
      'sign_in_button.sign_in_button_text',
      'sign_in_button.center',
    ],
  });
  return data.data;
};

export const fetchFfgPageData = async (language) => {
  const data = await client.getSingle('ffg_page_section', {
    lang: language,
    fetchLinks: [
      'learn_button.learn_button_text',
      'learn_button.color',
      'learn_button.link',
      'shop_button.shop_button_text',
      'shop_button.center',
    ],
  });
  return data.data;
};

export const fetchSavingLivesPageData = async (language) => {
  const data = await client.getSingle('saving_lives_page_section', {
    lang: language,
    fetchLinks: [
      'learn_button.learn_button_text',
      'learn_button.color',
      'learn_button.link',
      'custom_button.text',
      'custom_button.color',
      'custom_button.link',
      'custom_button.center',
      'shop_button.shop_button_text',
      'shop_button.center',
    ],
  });
  return data.data;
};

export const fetchDfdPageData = async (language) => {
  const data = await client.getSingle('dfd_page_section', {
    lang: language,
    fetchLinks: [
      'grid_element.content',
      'shop_button.shop_button_text',
      'shop_button.center',
    ],
  });
  return data.data;
};

export const fetchCartPageData = async (language) => {
  const data = await client.getSingle('cart_page', {
    lang: language,
  });
  return data.data;
};

export const fetchBrandStoryPageData = async (language) => {
  const data = await client.getSingle('brand_story_page', {
    lang: language,
  });
  return data.data;
};

export const fetchOrderStatusPageData = async (language) => {
  const data = await client.getSingle('order_status_page', {
    lang: language,
  });
  return data.data;
};

export const fetchHeaderFooterData = async (language) => {
  const data = await client.getSingle('header_footer', {
    lang: language,
  });
  return data.data;
};
