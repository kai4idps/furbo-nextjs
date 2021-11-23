import {
  FURBO_DOG_CAMERA_ICON_PNG,
  FURBO_DOG_NANNY_ICON_PNG,
  FURBO_WITH_JOY_ICON_PNG,
} from 'config/images/header';

export const PAGE_KEYS = {
  HOME: 'HOME',
  PRODUCTS: 'PRODUCTS',
  FURBO_DOG_NANNY: 'FURBO_DOG_NANNY',
  FAAS: 'FAAS',
  SAVING_LIVES: 'SAVING_LIVES',
  FURBO_FOR_GOOD: 'FURBO_FOR_GOOD',
  DESIGNED_FOR_DOGS: 'DESIGNED_FOR_DOGS',
  BLOGS: 'BLOGS',
  PRESS: 'PRESS',
  BRAND_STORY: 'BRAND_STORY',
  ORDER_STATUS: 'ORDER_STATUS',
  CART: 'CART',
};

export const PAGE_PATHS = {
  [PAGE_KEYS.HOME]: '',
  [PAGE_KEYS.PRODUCTS]: '/products/furbo-dog-camera',
  [PAGE_KEYS.FURBO_DOG_NANNY]: '/products/furbo-dog-nanny',
  [PAGE_KEYS.FAAS]: '/products/furbo-nanny-cam-bundle',
  [PAGE_KEYS.SAVING_LIVES]: '/pages/saving-lives',
  [PAGE_KEYS.FURBO_FOR_GOOD]: '/pages/furbo-for-good',
  [PAGE_KEYS.DESIGNED_FOR_DOGS]: '/pages/designed-for-dogs',
  [PAGE_KEYS.BLOGS]: '/pages/blogs',
  [PAGE_KEYS.PRESS]: '/pages/press-mention',
  [PAGE_KEYS.BRAND_STORY]: '/pages/brand-story',
  [PAGE_KEYS.ORDER_STATUS]: '/pages/order-status',
  [PAGE_KEYS.CART]: '/pages/cart',
};

export const HEADER_ROUTES = (region, content) => [
  {
    enabled: content.enable_product,
    title: content.furbo_dog_camera,
    path: `/${region}${PAGE_PATHS[PAGE_KEYS.PRODUCTS]}`,
    key: PAGE_KEYS.PRODUCTS,
    icon: FURBO_DOG_CAMERA_ICON_PNG,
  },
  {
    enabled: content.enable_furbo_dog_nanny,
    title: content.furbo_dog_nanny,
    path: `/${region}${PAGE_PATHS[PAGE_KEYS.FURBO_DOG_NANNY]}`,
    key: PAGE_KEYS.FURBO_DOG_NANNY,
    icon: FURBO_DOG_NANNY_ICON_PNG,
  },
  {
    enabled: content.enable_faas,
    title: content.furbo_nanny_cam_bundle,
    path: `/${region}${PAGE_PATHS[PAGE_KEYS.FAAS]}`,
    key: PAGE_KEYS.FAAS,
    icon: FURBO_WITH_JOY_ICON_PNG,
  },
  {
    enabled: content.enable_furbo_for_good,
    title: content.furbo_for_good,
    path: `/${region}${PAGE_PATHS[PAGE_KEYS.FURBO_FOR_GOOD]}`,
    key: PAGE_KEYS.FURBO_FOR_GOOD,
    icon: null,
  },
  {
    enabled: content.enable_saving_lives,
    title: content.saving_lives,
    path: `/${region}${PAGE_PATHS[PAGE_KEYS.SAVING_LIVES]}`,
    key: PAGE_KEYS.SAVING_LIVES,
    icon: null,
  },
  {
    enabled: content.enable_designed_for_dogs,
    title: content.designed_for_dogs,
    path: `/${region}${PAGE_PATHS[PAGE_KEYS.DESIGNED_FOR_DOGS]}`,
    key: PAGE_KEYS.DESIGNED_FOR_DOGS,
    icon: null,
  },
];
