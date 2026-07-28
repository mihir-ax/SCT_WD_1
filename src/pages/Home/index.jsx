import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Solutions } from './sections/Solutions';
import { Testimonials } from './sections/Testimonials';
import { Pricing } from './sections/Pricing';

export const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Solutions />
      <Testimonials />
      <Pricing />
    </main>
  );
};
