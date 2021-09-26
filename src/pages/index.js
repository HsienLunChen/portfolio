import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSession';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSession/data';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import SideBar from '../components/Sidebar';
import Footer from '../components/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <Projects />
      <InfoSection {...homeObjThree}/>
      <Footer />
    </>
  )
}

export default Home;