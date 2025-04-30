import { useEffect, useState } from 'react';
import ParallaxLayer from './ParallaxSection/ParallaxLayer';
import Background from './Background/Background';
import Headers from './Header/Headers';
import Footer from './Footer/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Background />
      <Headers />
      <ParallaxLayer scrollY={scrollY} />
      <Footer />
    </>
  );
}

export default App;
