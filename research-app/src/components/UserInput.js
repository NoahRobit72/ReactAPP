import React, { useState } from 'react';
import '../css/UserInput.css';

function UserInput({ onEnter }) {
  const [text, setText] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onEnter(text);
      setText('');
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="user-input">
      <input
        type="text"
        placeholder="Enter Your School Here!"
        value={text}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default UserInput;
