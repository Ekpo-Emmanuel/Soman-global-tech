import React from 'react';
import Navbar from './Navbar';
import Head from './head';
import Feature from './features';
import About from './About';
import Services from './Services';
import Team from './Team';
import Pricing from './Pricing';
import Testimonial from './Testimonial';
import Footer from './Footer';



const Homepage = () => {
  return (
    <>
    <Navbar />
    <Head />
    <Feature />
    <About />
    <Services />
    <Team />
    <Pricing />
    <Testimonial />
    <Footer />
    </>
  )
}

export default Homepage