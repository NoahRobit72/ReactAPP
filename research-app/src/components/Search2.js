import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [redirectTo, setRedirectTo] = useState(null);

  const handleSearch = (event) => {
    event.preventDefault();
    if (query === 'boston university') {
      setRedirectTo('/ResultPageBU');
    } else if (query === 'MIT') {
      setRedirectTo('/PageResultMIT');
    } else {
      // handle other queries here
    }
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  if (redirectTo) {
    return <Redirect to={redirectTo} />;
  }

  return (
    <form onSubmit={handleSearch}>
      <input type="text" value={query} onChange={handleQueryChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
