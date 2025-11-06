import { Navigation, Footer } from '@/components';
import { Hero, FeaturedSpeakers, Overview, FAQ } from '@/sections';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white w-full" style={{ width: '100vw' }}>
      <Navigation />
      <Hero />
      <FeaturedSpeakers />
      <Overview />
      <FAQ />
      <Footer />
    </div>
  );
}
