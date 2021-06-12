import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Experiences from './Experiences/Experiences';
import Articles from './Articles/Articles';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, experiencesData, articlesData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [articles, setArticles] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setExperiences([...experiencesData]);
    setArticles([...articlesData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, experiences, articles, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Articles />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
