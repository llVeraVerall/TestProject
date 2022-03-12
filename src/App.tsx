import React from 'react';
import { Header } from './components/Header';
import { Brand } from './components/Brand';
import { Portfolio } from './components/Portfolio';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';

function App() {
  return (
    <div>
      <Header />
      <Brand />
      <Portfolio />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default App;
