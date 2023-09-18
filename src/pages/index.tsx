import AdvancedStats from '@/widgets/AdvancedStat';
import Hero from '@/widgets/Hero';
import Navigation from '@/widgets/Navigation';

export default function Home() {
  return (
    <div className='container'>
      <Navigation />
      <Hero />
      <AdvancedStats />
    </div>
  )
}
