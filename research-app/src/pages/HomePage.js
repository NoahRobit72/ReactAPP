import React from 'react';
import Header from '../components/Header';
import Slogan from '../components/Slogan';
import Footer from '../components/Footer';

import '../css/HomePage.css'

function HomePage() {

  return (
    <div className="home-page">
      <Header />
      <Slogan />
      <Footer />
    </div>
  );
}
export default HomePage;