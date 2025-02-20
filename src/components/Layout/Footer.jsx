import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm">
      <div className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center text-center md:text-left">
            
            {/* Copyright Text */}
            <div className="mb-4 md:mb-0">
              <p>© 2024 Country Guide. All Rights Reserved.</p>
            </div>

            {/* Navigation Links */}
            <div className="flex justify-center md:justify-end space-x-6">
              <NavLink to="/" className="hover:text-white transition">
                Home
              </NavLink>
              <NavLink
                to="https://www.instagram.com/"
                target="_blank"
                className="hover:text-white transition"
              >
                Social
              </NavLink>
              <NavLink to="/contact" className="hover:text-white transition">
                Contact
              </NavLink>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
