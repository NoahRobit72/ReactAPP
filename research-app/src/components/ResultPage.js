import React from 'react';

function ResultPage(props) {
  return (
    <div>
      <h1>Your input was: {props.text}</h1>
    </div>
  );
}

export default ResultPage;