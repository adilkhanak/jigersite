import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Advantages from './components/Advantages';
import Documents from './components/Documents';
import Geography from './components/Geography';
import CTA from './components/CTA';
import ContactModal from './components/ContactModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ backgroundColor: 'var(--bg-light)' }}>
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <Hero />
      <About />
      <Products />
      <Advantages />
      <Documents />
      <Geography />
      <CTA onOpenModal={() => setIsModalOpen(true)} />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
