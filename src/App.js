import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResumePage from './components/ResumePage';
import Footer from './components/Footer';
import Header from './components/Header';
import SubFooter from './components/SubFooter';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Experience from './components/Experience';
import MainPage from './components/MainPage';
import ContactUs from './components/ContactUs';
import './MainStyling.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <SubFooter />
      <Footer />
    </Router>
  );
};

export default App;
