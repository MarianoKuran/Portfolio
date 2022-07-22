import React from 'react'
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Skills from './components/Skills';
import Works from './components/Works';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
    </>
  );
}

export default App
