// App.js
import React from 'react';
import './styles.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Hero />
      <Skills />
      <About />
    </div>
  );
}

export default App;
