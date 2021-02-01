import Head from 'next/head';
import Hero from '../components/feature/hero/';
import Projects from '../components/feature/Projects/';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kristian Dunne</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero></Hero>
      <Projects></Projects>
    </div>
  );
}
