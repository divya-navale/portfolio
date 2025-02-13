import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResumePage from './components/ResumePage';
import Footer from './components/Footer';
import Header from './components/Header';
import SubFooter from './components/SubFooter';
// import HomePage from './components/HomePage'; // Replace with your homepage

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
      <SubFooter/>
      <Footer />
    </Router>
  );
};

export default App;
