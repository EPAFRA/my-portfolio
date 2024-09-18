import React from 'react';
import Header from './components/header';
import Carousel from './components/carousel';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Carousel />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
