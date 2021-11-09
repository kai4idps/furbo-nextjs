import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { fetchRegion } from 'redux/features/region/regionSlice';

const Home = () => {
  const dispatch = useDispatch();
  const region = useSelector((state) => state.region);
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchRegion());
  }, []);

  useEffect(() => {
    if (region.status === 'succeeded') {
      router.push(`${region.code}`);
    }
  }, [region]);

  return (
    <Head>
      <title>
        Furbo Dog Camera | Furbo Dog Camera - Treat-tossing Pet Camera with HD
      </title>
      <meta
        name="title"
        content="Furbo Dog Camera | Furbo Dog Camera - Treat-tossing Pet Camera with HD"
      />
      <meta
        name="description"
        content="Furbo Dog Camera lets you see, talk and toss treats to your dog when you're not home. It's the #1 best-selling interactive pet camera. Furbo alerts you when your dog barks by sending you Bark Alerts on your phone. Over 5,000 vets and professional dog trainers recommend using Furbo to ease separation anxiety in dogs."
      />
    </Head>
  );
};

export default Home;
