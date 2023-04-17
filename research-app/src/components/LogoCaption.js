import React from 'react';
import { ReactComponent as Fern } from '../photos/fern.svg';
import { ReactComponent as Pencil } from '../photos/pencil.svg';
import { ReactComponent as Thumb } from '../photos/thumbs.svg';


import '../css/LogoCaption.css';

function LogoCaption() {
  return (
    <div className="LogoCaption">
      <div className="image-container">
        <Fern/>
        <Pencil/>
        <Thumb/>
      </div>

      <div className="captions">
        <p>Caption for image 1</p>
        <p>Caption for image 2</p>
        <p>Caption for image 3</p>
      </div>
    </div>
  );
}

export default LogoCaption;

