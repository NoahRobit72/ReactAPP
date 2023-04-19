import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function DropdownMenu() {
  const [selectedOption, setSelectedOption] = useState('');

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">-- Select a page --</option>
        <option value="about">About</option>
        <option value="contact">Contact</option>
      </select>
      <Link to={'/' + selectedOption}>
        <button>Go</button>
      </Link>
    </div>
  );
}

export default DropdownMenu;
