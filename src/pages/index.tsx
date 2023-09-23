import AdvancedStats from '@/widgets/AdvancedStat';
import Boost from '@/widgets/Boost';
import Footer from '@/widgets/Footer';
import Hero from '@/widgets/Hero';
import Navigation from '@/widgets/Navigation';

export default function Home() {
  return (
    <>
      <div className='container'>
        <Navigation />
        <Hero />
      </div>
      <AdvancedStats />
      <Boost />
      <Footer />
    </>
  )
}
