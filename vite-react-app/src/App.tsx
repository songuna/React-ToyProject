
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Main />
      <About />
      <Features />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;