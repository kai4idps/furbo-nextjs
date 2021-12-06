export const CHECKOUT_URL = (region, quantity) => {
  const env = process.env.BUILD_ENV || 'development';
  if (env !== 'production') {
    return `https://route-stg.furbo.com/cart/33333304329:${quantity}`;
  } else if (region === 'us') {
    return `https://furbo-dog-camera.myshopify.com/cart/21266488961:${quantity},34559072731181:1`;
  } else if (region === 'ca') {
    return `https://furbo-ca.myshopify.com/cart/32267984840:${quantity},31909699125331:1`;
  } else if (region === 'de') {
    return `https://furbo-de.myshopify.com/cart/7458271264827:${quantity},31947763548278:1`;
  } else if (region === 'uk') {
    return `https://furbo-uk.myshopify.com/cart/32280748882:${quantity},32687316992093:1`;
  } else if (region === 'fr') {
    return `https://furbo-fr.myshopify.com/cart/32293606195281:${quantity},39360347111505:1`;
  } else if (region === 'au') {
    return `https://furbo-global.myshopify.com/cart/4686733606944:${quantity},32935146881127:1`;
  }
  return `https://furbo-dog-camera.myshopify.com/cart/21266488961:${quantity},34559072731181:1`;
};

export const CUSTOM_CHECKOUT_URL = (region, variantId, quantity) => {
  const env = process.env.BUILD_ENV || 'development';
  if (env !== 'production') {
    return `https://route-stg.furbo.com/cart/${variantId}:${quantity}`;
  } else if (region === 'us') {
    return `https://furbo-dog-camera.myshopify.com/cart/${variantId}:${quantity}`;
  } else if (region === 'ca') {
    return `https://furbo-ca.myshopify.com/cart/${variantId}:${quantity}`;
  } else if (region === 'de') {
    return `https://furbo-de.myshopify.com/cart/${variantId}:${quantity}`;
  } else if (region === 'uk') {
    return `https://furbo-uk.myshopify.com/cart/${variantId}:${quantity}`;
  } else if (region === 'fr') {
    return `https://furbo-fr.myshopify.com/cart/${variantId}:${quantity}`;
  } else if (region === 'au') {
    return `https://furbo-global.myshopify.com/cart/${variantId}:${quantity}`;
  }
  return `https://furbo-dog-camera.myshopify.com/cart/${variantId}:${quantity}`;
};
