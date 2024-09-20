import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from './imgs/search-icon.svg';

const carNames = [
    { name: "Lamborghini Revuelto", path: "/section-5-revuelto" },
    { name: "Lamborghini Huracan Tecnica", path: "/section-5-huracan" },
    { name: "Lamborghini Urus Performante", path: "/section-5-urus" },
    { name: "Lamborghini Countach LP-800 4", path: "/section-5-countach" }
];

const SearchSection = ({ startLoading, isVisible, toggleVisibility }) => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredCars, setFilteredCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (searchInput) {
            const results = carNames.filter(car => 
                car.name.toLowerCase().includes(searchInput.toLowerCase())
            );
            setFilteredCars(results);
        } else {
            setFilteredCars([]);
        }
    }, [searchInput]);

    const handleClick = (path) => {
        startLoading();
        setTimeout(() => {
            navigate(path);
            toggleVisibility();
        }, 1000);    
    };

    return (
        <div id="search-section" className={isVisible ? 'visible' : 'hidden'}>
            <div id="search-section-bar">
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <img src={searchIcon} alt="Search" />
            </div>
            <div id="search-section-results">
                {searchInput && filteredCars.length === 0 && (
                    <div>No cars found.</div>
                )}
                {filteredCars.map((car, index) => (
                    <div key={index} onClick={() => handleClick(car.path)}>
                        {car.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchSection;