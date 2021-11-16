import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { updateRegion, fetchRegion } from 'redux/features/region/regionSlice';
import { VALID_ROUTES } from 'config/routes/routes';
import { REGION_INFO } from 'config/navigation';
import { isEmpty } from 'src/helpers';

const Redirect = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const path = router.query.region;
    const matchInfo =
      VALID_ROUTES.find((route) => route.path === `/${path}`) ||
      VALID_ROUTES[0];
    const regionInfo = REGION_INFO?.[matchInfo.code?.toUpperCase()];
    if (!isEmpty(regionInfo)) {
      dispatch(updateRegion(regionInfo));
    } else {
      dispatch(fetchRegion());
    }
  }, [router]);

  return null;
};

export default Redirect;
