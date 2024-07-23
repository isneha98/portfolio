import React from 'react';
import Container from '@mui/material/Container';
import Banner from './Banner';
import Navigation from './Navigation';
import About from './About';
import ContactForm from './ContactForm';

import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <About />
     
      <ContactForm />
      <Footer />
    </div>
   
  )
}

export default Home;