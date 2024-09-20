import React, { useEffect } from 'react';
import carReview1Img from './imgs/Screenshot 2024-09-03 115411.png';
import carReview2Img from './imgs/Screenshot 2024-09-03 115452.png';
import carReview3Img from './imgs/Screenshot 2024-09-03 115732.png';
import { useNavigate } from "react-router-dom";

function Section2({ startLoading, translate }) {
  useEffect(() => {
    return () => {
      window.scrollTo({
        top: 0,
      });
    };
  }, []);

  const navigate = useNavigate();

  const handleClick = (path) => {
    startLoading();
    setTimeout(() => navigate(path), 1000);
  };

  return (
    <div id="section-2">
      <div id="video-black-shade-2"></div>
      <div id="car-review-1">
        <div id="car-review-1-left-side">
          <img id="car-review-1-img" src={carReview1Img} alt="Car Review 1"/>
          <div id="car-review-1-rect"></div>
        </div>
        <div id="car-review-1-right-side">
          <span id="car-review-1-span-1">{translate('takeAllYourSoulsToDrive')}</span>
          <div>
            <span id="car-review-1-span-2">Lamborghini Huracán Tecnica</span>
            <button id="car-review-1-button-1" onClick={() => handleClick('/section-5-huracan')}>{translate('viewCar')}</button>
          </div>
        </div>
      </div>
      <div id="section-2-line"></div>
      <div id="car-review-2">
        <div id="car-review-2-left-side">
          <span id="car-review-2-span-1">{translate('forBarRaisersOnly')}</span>
          <div>
            <span id="car-review-2-span-2">Lamborghini Urus Performante</span>
            <button id="car-review-2-button-1" onClick={() => handleClick('/section-5-urus')}>{translate('viewCar')}</button>
          </div>
        </div>
        <div id="car-review-2-right-side">
          <img id="car-review-2-img" src={carReview2Img} alt="Car Review 2"/>
          <div id="car-review-2-rect"></div>
        </div>
      </div>
      <div id="section-2-line"></div>
      <div id="car-review-3">
        <div id="car-review-3-left-side">
          <img id="car-review-3-img" src={carReview3Img} alt="Car Review 3"/>
          <div id="car-review-3-rect"></div>
        </div>
        <div id="car-review-3-right-side">
          <span id="car-review-3-span-1">{translate('futureIsOurLegacy')}</span>
          <div>
            <span id="car-review-3-span-2">Lamborghini Countach LPI 800-4</span>
            <button id="car-review-3-button-1" onClick={() => handleClick('/section-5-countach')}>{translate('viewCar')}</button>
          </div>
        </div>
      </div>
      <div id="video-black-shade-3"></div>
    </div>
  );
};

export default Section2;