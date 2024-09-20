import React from 'react';
import revueltoLogo from './imgs/Lamborghini-revuelto-logo.png';
import revueltoVideo from './imgs/Lamborghini reveulto preview.mp4';
import { useNavigate } from "react-router-dom";

const Section1 = ({ startLoading, translate }) => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    startLoading();
    setTimeout(() => navigate(path), 1000);
  };

  return (
    <div id="section-1">
      <div id="section-1-video">
        <video autoPlay loop muted>
          <source src={revueltoVideo} type="video/mp4"/>
        </video>
        <div id="video-black-shade"></div>
        <img id="revuelto-logo" src={revueltoLogo} alt="Revuelto Logo"/>
      </div>
      <div id="section-1-content">
        <span>{translate('discover')}</span>
        <button onClick={() => handleClick('/section-5-revuelto')}>{translate('takeALook')}</button>
      </div>
    </div>
  );
};

export default Section1;