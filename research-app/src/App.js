
import Footer from './components/Footer';
import LogoCaption from './components/LogoCaption';
import UserInput from './components/UserInput';
import Header from './components/Header';
import Slogan from './components/Slogan';
import React, { useState } from 'react';



import './css/App.css';

function App() {
  const [inputText, setInputText] = useState('');

  const handleUserInput = (text) => {
    setInputText(text);
  };

  return (
    <div className="App">
      <Header />
      <Slogan />
      <UserInput onEnter={handleUserInput} />
      <p>You entered: {inputText}</p>
      <LogoCaption />
      <Footer />
    </div>
  );
}

export default App;
