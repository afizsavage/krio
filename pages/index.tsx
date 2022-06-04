import type { NextPage } from 'next';
import Head from 'next/head';
import { MainSection } from '../components/Main';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Krio Dictionary | Home</title>
        <meta name="description" content="A Krio language web dictionary" />
      </Head>
      <MainSection />
    </>
  );
};

export default Home;
