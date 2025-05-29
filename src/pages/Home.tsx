import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import ClientsSection from '../components/home/ClientsSection';
import ContactForm from '../components/home/ContactForm';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ClientsSection />
      <ContactForm />
    </>
  );
};

export default Home;