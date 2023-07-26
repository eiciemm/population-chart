import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

const Home: NextPage = (props) => {
  const router = useRouter();

  useEffect(() => {
    router.push('/populations');
  }, [router]);

  return <></>;
};

export default Home;
