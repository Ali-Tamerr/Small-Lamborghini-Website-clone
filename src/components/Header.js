import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import lamboLogo from './imgs/pngwing.com (3).png';
import searchIcon from './imgs/search-icon.svg';

const Header = ({ loading, startLoading, toggleLanguage, translate, toggleSearchVisibility }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      startLoading();
      setTimeout(() => navigate('/'), 1000);
    }
  };

  return (
    <div id='header'>
      <div id="ar-en">
        <span tabIndex="0" className="lang-option" onClick={() => toggleLanguage('ar')}>Arabic</span> <span>|</span> <span tabIndex="0" className="lang-option" onClick={() => toggleLanguage('en')}>English</span>
      </div>
      <img id="lambo-logo" onClick={handleGoBack} src={lamboLogo} alt="Lamborghini Logo"/>
      <div id="header-right-side">
        <div id="search-div" onClick={toggleSearchVisibility}>
          <span>{translate('search')}</span> <img src={searchIcon} alt="Search Icon"/>
        </div>
        <div id="login-div">
          <span>{translate('login')}</span>
        </div>
      </div>
      {loading && <div id="loading-bar"></div>}
    </div>
  );
};

export default Header;