import { NextPage } from 'next';

import { ProductArea } from '../components/ProductArea';
import { Hero } from '../components/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <main>
        <ProductArea />
      </main>
    </>
  );
};

export default Home;
