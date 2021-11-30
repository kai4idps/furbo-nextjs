import {
  FLAG_AU,
  FLAG_CA,
  FLAG_DE,
  FLAG_ES,
  FLAG_FR,
  FLAG_HK,
  FLAG_IT,
  FLAG_JP,
  FLAG_MX,
  FLAG_TW,
  FLAG_UK,
  FLAG_US,
  FLAG_SG,
  FLAG_NL,
  FLAG_SE,
  FLAG_CN,
} from 'config/images/flags';

export const REGION_INFO = {
  US: {
    country: 'United States',
    group: 'Americas',
    code: 'us',
    timezone: -8,
    language: 'en-us',
    image: FLAG_US,
  },
  CA: {
    country: 'Canada',
    group: 'Americas',
    code: 'ca',
    timezone: -8,
    language: 'en-ca',
    image: FLAG_CA,
  },
  CN: {
    country: '中国',
    group: 'Americas',
    code: 'cn',
    timezone: +8,
    language: 'zh-cn',
    image: FLAG_CN,
  },
  MX: {
    country: 'México',
    group: 'Americas',
    code: 'mx',
    timezone: -6,
    language: 'es-mx',
    image: FLAG_MX,
  },
  UK: {
    country: 'United Kingdom',
    group: 'Europe',
    code: 'uk',
    timezone: +0,
    language: 'en-gb',
    image: FLAG_UK,
  },
  DE: {
    country: 'Deutschland',
    group: 'Europe',
    code: 'de',
    timezone: +1,
    language: 'de-de',
    image: FLAG_DE,
  },
  FR: {
    country: 'France',
    group: 'Europe',
    code: 'fr',
    timezone: +1,
    language: 'fr-fr',
    image: FLAG_FR,
  },
  IT: {
    country: 'Italia',
    group: 'Europe',
    code: 'it',
    timezone: +1,
    language: 'it-it',
    image: FLAG_IT,
  },
  ES: {
    country: 'Espana',
    group: 'Europe',
    code: 'es',
    timezone: +1,
    language: 'es-es',
    image: FLAG_ES,
  },
  SE: {
    country: 'Sverige',
    group: 'Europe',
    code: 'se',
    timezone: +1,
    language: 'sv-se',
    image: FLAG_SE,
  },
  NL: {
    country: 'Nederland',
    group: 'Europe',
    code: 'nl',
    timezone: +1,
    language: 'nl-nl',
    image: FLAG_NL,
  },
  AU: {
    country: 'Australia',
    group: 'Asia-Pacific',
    code: 'au',
    timezone: +11,
    language: 'en-au',
    image: FLAG_AU,
  },
  HK: {
    country: '香港',
    group: 'Asia-Pacific',
    code: 'hk',
    timezone: +8,
    language: 'zh-hk',
    image: FLAG_HK,
  },
  TW: {
    country: '臺灣',
    group: 'Asia-Pacific',
    code: 'tw',
    timezone: +8,
    language: 'zh-tw',
    image: FLAG_TW,
  },
  JP: {
    country: '日本',
    group: 'Asia-Pacific',
    code: 'jp',
    timezone: +9,
    language: 'ja-jp',
    image: FLAG_JP,
  },
  SG: {
    country: 'Singapore',
    group: 'Asia-Pacific',
    code: 'sg',
    timezone: +8,
    language: 'en-sg',
    image: FLAG_SG,
  },
};

export const REGION_LIST = ['us', 'ca', 'de', 'uk', 'fr'];

export const PATHS = REGION_LIST.map((region) => ({ params: { region } }));
