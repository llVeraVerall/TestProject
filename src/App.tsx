import React from 'react';
import { Header } from './pages/Header';
import { Brand } from './pages/Brand';
import { Portfolio } from './pages/Portfolio';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';
import { Footer } from './pages/Footer';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Brand />
     <Portfolio />
      <AboutUs />
      <ContactUs />
       <Routes>
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/aboutUs' element={<AboutUs />}/>
                <Route path='/contactUs' element={<ContactUs/>}/>
            </Routes>
            <Footer />
    </div>
  );
}

export default App;
