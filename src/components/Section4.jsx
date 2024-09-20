import React from 'react';
import instagramIcon from './imgs/pngwing.com (5).png';
import facebookIcon from './imgs/pngwing.com (4).png';
import twitterIcon from './imgs/X-Logo.png';
import linkedinIcon from './imgs/pngwing.com (6).png';
import youtubeIcon from './imgs/pngwing.com (7).png';
import tiktokIcon from './imgs/pngwing.com (8).png';

const Section4 = ({ translate }) => {
  return (
    <div id="section-4">
      <span id="section-4-span-1">{translate('followLamborghini')}</span>
      <div id="section-4-imgs">
        <img onClick={() => window.open('https://www.instagram.com/lamborghini', '_blank')} src={instagramIcon} alt="Instagram"/>
        <img onClick={() => window.open('https://web.facebook.com/Lamborghini', '_blank')} src={facebookIcon} alt="Facebook"/>
        <img onClick={() => window.open('https://x.com/Lamborghini', '_blank')} src={twitterIcon} alt="Twitter"/>
        <img onClick={() => window.open('https://www.linkedin.com/company/automobili-lamborghini-s-p-a-', '_blank')} src={linkedinIcon} alt="LinkedIn"/>
        <img onClick={() => window.open('https://www.youtube.com/@Lamborghini', '_blank')} src={youtubeIcon} alt="YouTube"/>
        <img onClick={() => window.open('https://www.tiktok.com/@lamborghini', '_blank')} src={tiktokIcon} alt="TikTok"/>
      </div>
    </div>
  );
};

export default Section4;