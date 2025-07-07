import { useState } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
   

  return (
    <>
    <div className="bg-black text-white min-h-screen">
      <Navbar/>
      <HeroSection />
      <AboutSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </div>
    </>
  )
}

export default App
