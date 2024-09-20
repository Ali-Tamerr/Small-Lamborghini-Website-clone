import React from 'react';
import lamboLogo2 from './imgs/lamborghini-logo.png';
import lamboLogo from './imgs/pngwing.com (3).png';
import upArrow from './imgs/up arrow.png';

const Footer = ({ translate }) => {
  return (
    <div>
      <div id="section-4-line-div">
        <div id="section-4-line"></div>
      </div>
      <div id="footer">
        <div id="footer-links">
          <span id="footer-span-1">{translate('company')}</span>
          <span id="footer-span-2">{translate('careers')}</span>
          <span id="footer-span-3">{translate('accessibility')}</span>
          <span id="footer-span-4">{translate('privacyLegal')}</span>
          <span id="footer-span-5">{translate('financials')}</span>
          <span id="footer-span-6">{translate('contactUs')}</span>
        </div>
        <div id="footer-logos">
          <img id="lambo-logo-2" src={lamboLogo2} alt="Lamborghini Logo" />
          <img id="lambo-logo" src={lamboLogo} alt="Lamborghini Logo" />
          <div>
            <img id="up-arrow" src={upArrow} alt="Up Arrow" />
            <span id="footer-logos-span-1">{translate('goToTop')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;