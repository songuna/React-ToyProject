
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import useScrollAnimation from './hook/UseScrollAnimation';

const App: React.FC = () => {
    useScrollAnimation();

    return (
        <>
          <Header />
          <Main />
          <About />
          <Features />
          <Portfolio />
          <Contact />
        </>
    );
};

export default App;