import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


export const Header = () => {
  const [show, setShow] = useState(false);

  const handleButtonToggle = () => setShow(!show);

  const navLinkStyles = ({ isActive }) => 
    `text-white hover:text-blue-400 transition-colors duration-300 ${isActive ? 'text-blue-400' : ''}`;

  return (
    <header className="bg-gray-900 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto">
        <div className="h-16 px-4 flex items-center justify-between">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-white hover:text-blue-400 transition-colors duration-300">
              <h1 className="text-2xl font-bold">World Guide</h1>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><NavLink to="/" className={navLinkStyles}>Home</NavLink></li>
              <li><NavLink to="/about" className={navLinkStyles}>About</NavLink></li>
              <li><NavLink to="/country" className={navLinkStyles}>Country</NavLink></li>
              <li><NavLink to="/contact" className={navLinkStyles}>Contact</NavLink></li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={handleButtonToggle}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <GiHamburgerMenu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {show && (
          <nav className="md:hidden bg-gray-800 shadow-lg">
            <ul className="flex flex-col py-2">
              <li>
                <NavLink 
                  to="/" 
                  className={`block px-4 py-2 ${navLinkStyles}`}
                  onClick={handleButtonToggle}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={`block px-4 py-2 ${navLinkStyles}`}
                  onClick={handleButtonToggle}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/country" 
                  className={`block px-4 py-2 ${navLinkStyles}`}
                  onClick={handleButtonToggle}
                >
                  Country
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={`block px-4 py-2 ${navLinkStyles}`}
                  onClick={handleButtonToggle}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;