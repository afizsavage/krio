import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Krio Dictionary</title>
        <meta name="description" content="A Krio language web dictionary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <span className="text-blue-500">Krio Dictionary</span>
      </main>

      <footer>
        <span>Krio</span>
      </footer>
    </>
  );
};

export default Home;
