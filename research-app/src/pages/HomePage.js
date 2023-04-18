import React from 'react';
import Header from '../components/Header';
import Slogan from '../components/Slogan';
import UserInput from '../components/UserInput';
import LogoCaption from '../components/LogoCaption';
import Footer from '../components/Footer';

function HomePage(props) {
  const { handleUserInput } = props;

  return (
    <div className="home-page">
      <Header />
      <Slogan />
      <UserInput onEnter={handleUserInput} />
      <LogoCaption />
      <Footer />
    </div>
  );
}
export default HomePage;
