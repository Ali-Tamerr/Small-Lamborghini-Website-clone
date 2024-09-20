import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import imageImports from './components/imageImports';
import translations from './components/Translations';
import SearchSection from './components/SearchSection';
import './components/App.css';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState('en');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  const translate = (key) => {
    return translations[language][key] || key;
  };

  const toggleSearchVisibility = () => {
    setIsSearchVisible(prevState => !prevState);
  };

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.controls = false;
    }

    const animatedElements = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animatedElements.has(entry.target)) {
          entry.target.classList.add('back-to-default');
          animatedElements.add(entry.target);
        }
      });
    });

    const footerLogosDiv = document.querySelector('#footer-logos div');
    if (footerLogosDiv) {
      footerLogosDiv.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    const header = document.querySelector('#header');
    const arEn = document.querySelector('#ar-en');
    const loadingBar = document.querySelector('#loading-bar');

    const handleScroll = () => {
      if (header && arEn) {
        if (window.scrollY > 500) {
          header.classList.add('shrink');
          arEn.classList.add('shrink');
        } else {
          header.classList.remove('shrink');
          arEn.classList.remove('shrink');
        }
      }
      if (loadingBar) {
        if (window.scrollY > 500) {
          loadingBar.classList.add('shrink');
        } else {
          loadingBar.classList.remove('shrink');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    const elementsToObserve = [
      '#car-review-1-rect', '#car-review-1-img', '#car-review-2-rect', '#car-review-2-img',
      '#car-review-3-rect', '#car-review-3-img', '#car-review-1-right-side', '#car-review-2-left-side',
      '#car-review-3-right-side', '#section-3-img:nth-child(1)', '#section-3-img:nth-child(2)',
      '#section-3-img:nth-child(3)', '#section-3-upper-side', '#section-4-imgs img:nth-child(1)',
      '#section-4-imgs img:nth-child(2)', '#section-4-imgs img:nth-child(3)', '#section-4-imgs img:nth-child(4)',
      '#section-4-imgs img:nth-child(5)', '#section-4-imgs img:nth-child(6)', '#section-4-span-1', '#lambo-logo-2'
    ];

    elementsToObserve.forEach(selector => {
      const element = document.querySelector(selector);
      if (element) observer.observe(element);
    });

    return () => {
      if (footerLogosDiv) {
        footerLogosDiv.removeEventListener('click', () => { });
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  return (
    <div className="App" data-lang={language}>
      <SearchSection startLoading={startLoading} isVisible={isSearchVisible} toggleVisibility={toggleSearchVisibility} />
      <Header loading={loading} toggleLanguage={toggleLanguage} translate={translate} startLoading={startLoading} toggleSearchVisibility={toggleSearchVisibility} />
      <Routes>
      <Route path="*" element={<Navigate to="/" />} />

        <Route path="/" element={
          <>
            <Section1 startLoading={startLoading} translate={translate} />
            <Section2 startLoading={startLoading} translate={translate} />
            <Section3 translate={translate} />
            <Section4 translate={translate} />
          </>
        } />
        <Route path="/section-5-revuelto" element={
          <Section5 
            startLoading={startLoading}
            translate={translate}
            img1={imageImports.revueltoImg1}
            img2={imageImports.revueltoImg2}
            imgLogo={imageImports.revueltoLogo}
            img4={imageImports.revueltoImg4}
            span2={translate("revueltoSpan2")}
            span4={translate("revueltoSpan4")}
            span6={translate("revueltoSpan6")}
          />
        } />
        <Route path="/section-5-huracan" element={
          <Section5 
            startLoading={startLoading}
            translate={translate}
            img1={imageImports.huracanImg1}
            img2={imageImports.huracanImg2}
            imgLogo={imageImports.huracanLogo}
            img4={imageImports.huracanImg4}
            span2={translate("huracanSpan2")}
            span4={translate("huracanSpan4")}
            span6={translate("huracanSpan6")}
          />
        } />
        <Route path="/section-5-urus" element={
          <Section5 
            startLoading={startLoading}
            translate={translate}
            img1={imageImports.urusImg1}
            img2={imageImports.urusImg2}
            imgLogo={imageImports.urusLogo}
            img4={imageImports.urusImg4}
            span2={translate("urusSpan2")}
            span4={translate("urusSpan4")}
            span6={translate("urusSpan6")}
          />
        } />
        <Route path="/section-5-countach" element={
          <Section5 
            startLoading={startLoading}
            translate={translate}
            img1={imageImports.countachImg1}
            img2={imageImports.countachImg2}
            imgLogo={imageImports.countachLogo}
            img4={imageImports.countachImg4}
            span2={translate("countachSpan2")}
            span4={translate("countachSpan4")}
            span6={translate("countachSpan6")}
          />
        } />
      </Routes>
      <Footer translate={translate} />
    </div>
  );
}

export default App;