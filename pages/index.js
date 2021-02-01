import Head from 'next/head';
import Hero from '../components/feature/hero/';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kristian Dunne</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero></Hero>
    </div>
  );
}
