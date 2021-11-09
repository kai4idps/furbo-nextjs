import Image from 'next/image';
import {
  HFURBO_DOG_CAMERA_ICON_PNG,
  FURBO_DOG_NANNY_ICON_PNG,
} from 'config/images/header';
import { PAGE_KEYS } from 'config/routes/routes';

export const PAGE_PATHS = {
  [PAGE_KEYS.HOME]: '/ca',
  [PAGE_KEYS.PRODUCTS]: '/ca/products/furbo-dog-camera',
  [PAGE_KEYS.FURBO_DOG_NANNY]: '/ca/products/furbo-dog-nanny',
  [PAGE_KEYS.SAVING_LIVES]: '/ca/pages/saving-lives',
  [PAGE_KEYS.FURBO_FOR_GOOD]: '/ca/pages/furbo-for-good',
  [PAGE_KEYS.DESIGNED_FOR_DOGS]: '/ca/pages/designed-for-dogs',
  [PAGE_KEYS.BLOGS]: '/ca/pages/blogs',
  [PAGE_KEYS.PRESS]: '/ca/pages/press-mention',
  [PAGE_KEYS.BRAND_STORY]: '/ca/pages/brand-story',
  [PAGE_KEYS.ORDER_STATUS]: '/ca/pages/order-status',
  [PAGE_KEYS.CART]: '/ca/pages/cart',
};

export const HEADER_ROUTES = (content) => [
  {
    enabled: content.enable_product,
    title: content.furbo_dog_camera,
    path: PAGE_PATHS[PAGE_KEYS.PRODUCTS],
    key: PAGE_KEYS.PRODUCTS,
    icon: {
      mdUp: (
        <div
          style={{
            position: 'relative',
            top: '50%',
            display: 'flex',
            left: 0,
            width: '45px',
            height: '45px',
          }}
        >
          <Image
            src={HFURBO_DOG_CAMERA_ICON_PNG}
            alt="furbo-dog-camera-icon"
            layout="fill"
            objectFit="contain"
          />
        </div>
      ),
      smDown: (
        <div
          style={{
            position: 'relative',
            top: '50%',
            display: 'flex',
            left: 0,
            width: '45px',
            height: '45px',
          }}
        >
          <Image
            src={HFURBO_DOG_CAMERA_ICON_PNG}
            alt="furbo-dog-camera-icon"
            layout="fill"
            objectFit="contain"
          />
        </div>
      ),
    },
  },
  {
    enabled: content.enable_furbo_dog_nanny,
    title: content.furbo_dog_nanny,
    path: PAGE_PATHS[PAGE_KEYS.FURBO_DOG_NANNY],
    key: PAGE_KEYS.FURBO_DOG_NANNY,
    icon: {
      mdUp: (
        <div
          style={{
            position: 'relative',
            top: '50%',
            display: 'flex',
            left: 0,
            width: '45px',
            height: '45px',
          }}
        >
          <Image
            src={FURBO_DOG_NANNY_ICON_PNG}
            alt="furbo-dog-nanny-icon"
            layout="fill"
            objectFit="contain"
          />
        </div>
      ),
      smDown: (
        <div
          style={{
            position: 'relative',
            top: '50%',
            display: 'flex',
            left: 0,
            width: '45px',
            height: '45px',
          }}
        >
          <Image
            src={FURBO_DOG_NANNY_ICON_PNG}
            alt="furbo-dog-nanny-icon"
            layout="fill"
            objectFit="contain"
          />
        </div>
      ),
    },
  },
  {
    enabled: content.enable_furbo_for_good,
    title: content.furbo_for_good,
    path: PAGE_PATHS[PAGE_KEYS.FURBO_FOR_GOOD],
    key: PAGE_KEYS.FURBO_FOR_GOOD,
    icon: <></>,
  },
  {
    enabled: content.enable_saving_lives,
    title: content.saving_lives,
    path: PAGE_PATHS[PAGE_KEYS.SAVING_LIVES],
    key: PAGE_KEYS.SAVING_LIVES,
    icon: <></>,
  },
  {
    enabled: content.enable_designed_for_dogs,
    title: content.designed_for_dogs,
    path: PAGE_PATHS[PAGE_KEYS.DESIGNED_FOR_DOGS],
    key: PAGE_KEYS.DESIGNED_FOR_DOGS,
    icon: <></>,
  },
];
