import Head from 'next/head';
import Hero from '../components/feature/hero/';
import Projects from '../components/feature/Projects/';
import Footer from '../components/shared/footer/';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kristian Dunne</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero></Hero>
      <Projects></Projects>
      <Footer></Footer>
      <noscript>You need to enable JavaScript to run this app.</noscript>
    </div>
  );
}
