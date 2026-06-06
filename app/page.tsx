import Hero from './components/Hero';
import Framework from './components/Framework';
import Instruments from './components/Instruments';
import Process from './components/Process';
import Membership from './components/Membership';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <main className="site-shell">
        <Hero />
        <Framework />
        <Instruments />
        <Process />
        <Membership />
      </main>
      <Footer />
    </>
  );
}
