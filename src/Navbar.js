import React, { useState } from 'react';
import {menuItems} from './assets/data'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuHover = (index) => {
    if (!isMenuOpen) {
      setActiveMenu(index);
    }
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const renderMenuItems = () =>
    menuItems.map((item, index) => (
      <a
        key={index}
        href={item.href}
        className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium ${
          activeMenu === index ? 'border-b-2 border-white' : ''
        }`}
        onMouseEnter={() => handleMenuHover(index)}
        onMouseLeave={handleMenuLeave}
        
      >
        {item.label}
      </a>
    ));

  return (
    <nav className="bg-gray-800 sticky top-0 mb-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center">
              <a
                href="https://www.linkedin.com/in/paulinusaghughu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <i className="fab fa-linkedin text-white text-xl"></i>
              </a>
              <a
                href="https://github.com/PaulAyere"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 ml-2"
              >
                <i className="fab fa-github text-white text-xl"></i>
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium md:hidden"
              onClick={handleMenuToggle}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {renderMenuItems()}
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 right-0 mt-2 bg-gray-800 rounded-md shadow-lg z-10">
          <div className="flex flex-col items-end space-y-2 max-h-56  overflow-y-auto">
            {renderMenuItems()}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

