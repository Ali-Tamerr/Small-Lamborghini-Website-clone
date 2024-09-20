import React from 'react';
import fanArt1 from './imgs/sian_fkp37_centro_stile.jpg';
import fanArt2 from './imgs/02.jpg';
import fanArt3 from './imgs/01.jpg';

const Section3 = ({ translate }) => {
  return (
    <div id="section-3">
      <div id="video-black-shade-4"></div>
      <div id="section-3-upper-side">
        <span id="section-3-span-1">{translate('discoverOurFanMadeArt')}</span>
        <button id="section-3-button-1">{translate('viewMore')}</button>
      </div>
      <div id="section-3-imgs">
        <img id="section-3-img" src={fanArt1} alt="Fan Art 1"/>
        <img id="section-3-img" src={fanArt2} alt="Fan Art 2"/>
        <img id="section-3-img" src={fanArt3} alt="Fan Art 3"/>
      </div>
    </div>
  );
};

export default Section3;