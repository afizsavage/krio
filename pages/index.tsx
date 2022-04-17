import type { NextPage } from 'next';
import Head from 'next/head';
import Main from '../components/main';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Krio Dictionary | Home</title>
        <meta name="description" content="A Krio language web dictionary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  );
};

export default Home;
