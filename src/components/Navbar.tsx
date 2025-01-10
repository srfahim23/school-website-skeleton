import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>Email: srfahim23@gmail.com</span>
            <span>Phone: +880 1617026858</span>
          </div>
          <div>
            <span>School Hours: Sun-Thu 8:00 AM - 4:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/school-logo.png" alt="School Logo" className="h-16 w-auto" />
              <div>
                <h1 className="text-2xl font-bold text-blue-900">School Name</h1>
                <p className="text-sm text-gray-600">Established 1990</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blue-900 font-medium">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-900 font-medium">About</Link>
              <Link to="/academics" className="text-gray-700 hover:text-blue-900 font-medium">Academics</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-900 font-medium">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-3">
                <Link to="/" className="text-gray-700 hover:text-blue-900 py-2">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-900 py-2">About</Link>
                <Link to="/academics" className="text-gray-700 hover:text-blue-900 py-2">Academics</Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-900 py-2">Contact</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;