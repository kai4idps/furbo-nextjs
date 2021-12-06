export const CHECKOUT_URL = (region, quantity) => {
  const env = process.env.BUILD_ENV || 'development';
  if (env !== 'production') {
    return `https://route-stg.furbo.com/cart/33333304329:${quantity}`;
  } else if (region === 'us') {
    return `https://furbo-dog-camera.myshopify.com/cart/21266488961:${quantity},34559072731181:1?channel=buy_button`;
  } else if (region === 'ca') {
    return `https://furbo-ca.myshopify.com/cart/32267984840:${quantity},31909699125331:1`;
  }
  return `https://furbo-dog-camera.myshopify.com/cart/21266488961:${quantity},34559072731181:1?channel=buy_button`;
};
